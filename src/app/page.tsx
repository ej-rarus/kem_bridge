import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "홈",
  description: "켐브릿지학원은 K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다. 개별 맞춤형 교육, 입시 컨설팅, 독서·논술 프로그램을 제공합니다.",
  keywords: ["켐브릿지학원", "KEM Bridge", "국어", "영어", "수학", "학원", "입시컨설팅", "독서논술", "학생부컨설팅", "양주학원", "옥정학원", "초등학원", "중등학원", "고등학원"],
  openGraph: {
    title: "켐브릿지학원 | KEM Bridge - 국어 영어 수학 연결 교육",
    description: "K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다.",
    url: "https://kembridge.co.kr",
  },
};

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData 
        type="course" 
        data={{
          name: "KEM Bridge 종합 교육 프로그램",
          description: "K(국어) E(영어) M(수학)을 연결하는 종합적인 교육으로 초·중·고 학생들의 학습 능력을 향상시킵니다.",
          level: "초등학교, 중학교, 고등학교"
        }} 
      />
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KEM Bridge
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            K(국어) E(영어) M(수학)을 연결하는 교육의 다리
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                상담 신청하기
              </button>
            </Link>
            <Link href="/curriculum">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                커리큘럼 보기
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            KEM Bridge의 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">KEM</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">KEM 연결 교육</h3>
              <p className="text-gray-600">
                국어, 영어, 수학을 연결하는 종합적인 교육으로 
                초·중·고 학생들의 학습 능력을 향상시킵니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">입시 컨설팅</h3>
              <p className="text-gray-600">
                학생부 컨설팅, 입시 컨설팅, 학종 관리, 면접 대비 등 
                체계적인 입시 준비를 지원합니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">독서·논술</h3>
              <p className="text-gray-600">
                독서·논술 프로그램을 통해 사고력과 표현력을 기르고, 
                과학과 연계한 종합 교육을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">졸업생</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">목표 달성률</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10년</div>
              <div className="text-primary-100">운영 경력</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">학습 지원</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            지금 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            KEM Bridge와 함께 초·중·고 학생들의 종합적인 학습 능력을 향상시켜보세요. 
            무료 상담을 통해 맞춤형 학습 계획과 입시 전략을 세워드립니다.
          </p>
          <Link href="/consultation">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              무료 상담 신청하기
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
