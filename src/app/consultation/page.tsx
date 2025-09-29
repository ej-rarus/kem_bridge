import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "상담 신청",
  description: "켐브릿지학원 무료 상담을 신청하세요. 학생의 현재 수준 파악, 맞춤형 학습 계획 수립, 체계적인 학습 관리를 통해 최적의 교육 방향을 제시합니다. 전화: 0507-1379-6889",
  keywords: ["켐브릿지학원", "상담신청", "무료상담", "학습상담", "입시상담", "맞춤형교육", "학습계획", "양주학원상담"],
  openGraph: {
    title: "상담 신청 | 켐브릿지학원",
    description: "무료 상담을 통해 맞춤형 학습 계획을 세워드립니다. 학생의 현재 수준 파악부터 목표 달성까지 체계적으로 지원합니다.",
    url: "https://kembridge.co.kr/consultation",
  },
};

export default function ConsultationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "홈", url: "https://kembridge.co.kr" },
          { name: "상담 신청", url: "https://kembridge.co.kr/consultation" }
        ]} 
      />
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
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
