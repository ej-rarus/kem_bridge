'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentName: '',
    studentGrade: '',
    subjects: [] as string[],
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      subjects: checked 
        ? [...prev.subjects, value]
        : prev.subjects.filter(subject => subject !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 이메일 템플릿 데이터 준비 (학원 이메일로 발송)
      const templateParams = {
        to_name: 'KEM Bridge',
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        student_name: formData.studentName,
        student_grade: formData.studentGrade,
        subjects: formData.subjects.join(', '),
        preferred_time: formData.preferredTime,
        message: formData.message,
        to_email: 'lpl2001@naver.com' // 학원 이메일로 발송
      };

      // SMS용 템플릿 데이터 (간단한 형태)
      const smsTemplateParams = {
        to_name: 'KEM Bridge',
        from_name: formData.name,
        phone: formData.phone,
        student_name: formData.studentName,
        student_grade: formData.studentGrade,
        subjects: formData.subjects.join(', '),
        to_email: '010-6289-6443@lguplus.co.kr' // LG U+ SMS 이메일
      };

      // 1. 학원 이메일로 상세 정보 발송
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2. SMS용 간단한 알림 발송 (별도 템플릿 필요)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          'template_sms_notification', // SMS용 템플릿 ID (별도 생성 필요)
          smsTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      } catch (smsError) {
        console.log('SMS 발송 실패, 이메일로만 발송됨:', smsError);
      }

      // 3. 카카오톡 알림톡 대안 (선택사항)
      // 카카오톡 비즈니스 계정이 있다면 알림톡 API 사용 가능
      // 현재는 이메일과 SMS만 사용

      // 성공 메시지와 함께 추가 연락 방법 안내
      const successMessage = `상담 신청이 완료되었습니다!

📧 학원 이메일로 상세 정보가 발송되었습니다.
📱 SMS 알림도 발송을 시도했습니다.

💡 만약 연락이 오지 않는다면:
📞 직접 전화: 0507-1379-6889
✉️ 이메일: lpl2001@naver.com

빠른 시일 내에 연락드리겠습니다.`;

      alert(successMessage);
      
      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        studentName: '',
        studentGrade: '',
        subjects: [],
        preferredTime: '',
        message: ''
      });
      
    } catch (error) {
      console.error('이메일 발송 실패:', error);
      alert('상담 신청 중 오류가 발생했습니다. 전화로 직접 연락해주세요: 0507-1379-6889');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            상담 신청
          </h1>
          <p className="text-xl text-primary-100">
            무료 상담을 통해 맞춤형 학습 계획을 세워드립니다
          </p>
        </div>
      </section>

      {/* 상담 안내 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 상담 안내 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                무료 상담 안내
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">학습 진단</h3>
                    <p className="text-gray-600">
                      학생의 현재 학습 수준과 약점을 정확히 파악하여 
                      개선 방향을 제시합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">맞춤형 계획</h3>
                    <p className="text-gray-600">
                      학생의 목표와 특성에 맞는 
                      개별화된 학습 계획을 수립합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">체계적 관리</h3>
                    <p className="text-gray-600">
                      정기적인 진도 점검과 피드백을 통해 
                      지속적인 성장을 지원합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 상담 시간 안내 */}
                   <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold mb-4 text-gray-800">상담 시간</h3>
                     <div className="space-y-2 text-gray-600">
                       <div className="flex justify-between">
                         <span>평일:</span>
                         <span>오전 9시 ~ 오후 9시</span>
                       </div>
                       <div className="flex justify-between">
                         <span>토요일:</span>
                         <span>오전 9시 ~ 오후 6시</span>
                       </div>
                       <div className="flex justify-between">
                         <span>일요일:</span>
                         <span>휴무</span>
                       </div>
                       <div className="mt-4 pt-4 border-t">
                         <div className="text-sm text-gray-600">
                           <p><strong>연락처:</strong> 0507-1379-6889</p>
                           <p><strong>이메일:</strong> lpl2001@naver.com</p>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* 직접 연락 방법 안내 */}
                   <div className="mt-6 bg-primary-50 p-6 rounded-lg border border-primary-200">
                     <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                       <span className="text-2xl mr-2">💡</span>
                       빠른 상담이 필요하시다면
                     </h3>
                     <div className="space-y-3">
                       <div className="flex items-center">
                         <span className="text-2xl mr-3">📞</span>
                         <div>
                           <p className="font-medium text-gray-800">직접 전화</p>
                           <a href="tel:0507-1379-6889" className="text-primary-600 hover:text-primary-700 font-semibold">
                             0507-1379-6889
                           </a>
                         </div>
                       </div>
                       <div className="flex items-center">
                         <span className="text-2xl mr-3">✉️</span>
                         <div>
                           <p className="font-medium text-gray-800">이메일 문의</p>
                           <a href="mailto:lpl2001@naver.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                             lpl2001@naver.com
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
            </div>

            {/* 상담 신청 폼 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                상담 신청서
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 학부모 정보 */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">학부모 정보</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        학부모 성함 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* 학생 정보 */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">학생 정보</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        학생 성함 *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        학년 *
                      </label>
                      <select
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">학년 선택</option>
                        <option value="초등1">초등 1학년</option>
                        <option value="초등2">초등 2학년</option>
                        <option value="초등3">초등 3학년</option>
                        <option value="초등4">초등 4학년</option>
                        <option value="초등5">초등 5학년</option>
                        <option value="초등6">초등 6학년</option>
                        <option value="중등1">중등 1학년</option>
                        <option value="중등2">중등 2학년</option>
                        <option value="중등3">중등 3학년</option>
                        <option value="고등1">고등 1학년</option>
                        <option value="고등2">고등 2학년</option>
                        <option value="고등3">고등 3학년</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 희망 과목 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 과목 (복수 선택 가능)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['국어', '영어', '수학', '과학', '독서·논술', '학생부 컨설팅', '입시 컨설팅', '학종 관리', '면접 대비', '기타'].map((subject) => (
                      <label key={subject} className="flex items-center">
                        <input
                          type="checkbox"
                          value={subject}
                          checked={formData.subjects.includes(subject)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 희망 상담 시간 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 상담 시간
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">시간 선택</option>
                    <option value="오전9-12">오전 9시 ~ 12시</option>
                    <option value="오후1-3">오후 1시 ~ 3시</option>
                    <option value="오후3-6">오후 3시 ~ 6시</option>
                    <option value="오후6-9">오후 6시 ~ 9시</option>
                  </select>
                </div>

                {/* 문의사항 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의사항
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="학습 목표나 특별한 요청사항이 있으시면 적어주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
