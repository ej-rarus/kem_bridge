'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ConsultationForm() {
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

      // 3. 카카오톡 알림톡 발송 (선택사항)
      try {
        // 카카오 알림톡 API 호출
        const kakaoResponse = await fetch('/api/kakao-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: '010-6289-6443', // 수신자 번호
            templateId: 'KEM_BRIDGE_CONSULTATION', // 알림톡 템플릿 ID
            templateArgs: {
              신청자명: formData.name,
              학생명: formData.studentName,
              학년: formData.studentGrade,
              과목: formData.subjects.join(', '),
              연락처: formData.phone,
              이메일: formData.email,
              희망시간: formData.preferredTime,
              문의사항: formData.message
            }
          })
        });

        if (kakaoResponse.ok) {
          console.log('카카오톡 알림톡 발송 성공');
        }
      } catch (kakaoError) {
        console.log('카카오톡 알림톡 발송 실패:', kakaoError);
      }

      // 성공 메시지와 함께 추가 연락 방법 안내
      const successMessage = `상담 신청이 완료되었습니다!

📧 학원 이메일로 상세 정보가 발송되었습니다.
📱 SMS 알림도 발송을 시도했습니다.
💬 카카오톡 알림톡도 발송을 시도했습니다.

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
  );
}
