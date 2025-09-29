import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "커리큘럼",
  description: "켐브릿지학원의 체계적인 커리큘럼을 확인하세요. 국어, 영어, 수학, 과학, 독서·논술, 학생부 컨설팅, 입시 컨설팅, 학종 관리, 면접 대비 등 종합적인 교육 프로그램을 제공합니다.",
  keywords: ["켐브릿지학원", "커리큘럼", "국어교육", "영어교육", "수학교육", "과학교육", "독서논술", "입시컨설팅", "학생부컨설팅", "학종관리", "면접대비"],
  openGraph: {
    title: "커리큘럼 | 켐브릿지학원",
    description: "국어, 영어, 수학, 과학, 독서·논술, 입시 컨설팅 등 체계적인 교육 프로그램을 제공합니다.",
    url: "https://kembridge.co.kr/curriculum",
  },
};

export default function CurriculumPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "홈", url: "https://kembridge.co.kr" },
          { name: "커리큘럼", url: "https://kembridge.co.kr/curriculum" }
        ]} 
      />
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            커리큘럼
          </h1>
          <p className="text-xl text-primary-100">
            체계적이고 효과적인 학습 프로그램을 제공합니다
          </p>
        </div>
      </section>

      {/* 전체 커리큘럼 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              KEM Bridge 커리큘럼
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              초·중·고 학생을 대상으로 국어, 영어, 수학, 과학, 독서·논술, 
              학생부 컨설팅, 입시 컨설팅, 학종 관리, 면접 대비 등 
              종합적인 교육 프로그램을 제공합니다.
            </p>
          </div>

          {/* 과목별 커리큘럼 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 국어 커리큘럼 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary-600">K</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">국어</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">독서·논술</h4>
                  <p className="text-gray-600 text-sm">사고력과 표현력 향상</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">학생부 컨설팅</h4>
                  <p className="text-gray-600 text-sm">종합적인 국어 역량 개발</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">기초 문법</h4>
                  <p className="text-gray-600 text-sm">체계적인 국어 기초 다지기</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>대상: 초등 1학년 ~ 고등 3학년</span>
                  <span>주 2-3회</span>
                </div>
              </div>
            </div>

            {/* 영어 커리큘럼 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary-600">E</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">영어</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">기초 과정</h4>
                  <p className="text-gray-600 text-sm">문법 기초 및 어휘력 확장</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">면접 대비</h4>
                  <p className="text-gray-600 text-sm">실전 영어 면접 준비</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">고급 과정</h4>
                  <p className="text-gray-600 text-sm">의사소통 능력 향상</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>대상: 초등 1학년 ~ 고등 3학년</span>
                  <span>주 2-4회</span>
                </div>
              </div>
            </div>

            {/* 수학 커리큘럼 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary-600">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">수학</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">기초 과정</h4>
                  <p className="text-gray-600 text-sm">기본 개념 이해 및 연산 능력</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">심화 과정</h4>
                  <p className="text-gray-600 text-sm">논리적 사고력과 문제 해결 능력</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800">과학 연계</h4>
                  <p className="text-gray-600 text-sm">종합적인 수학적 사고 완성</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>대상: 초등 3학년 ~ 고등 3학년</span>
                  <span>주 2-3회</span>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 프로그램 */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              특별 프로그램
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">과학</h4>
                <p className="text-gray-600 text-sm">실험을 통한 과학 원리 이해</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">입시 컨설팅</h4>
                <p className="text-gray-600 text-sm">체계적인 입시 전략 수립</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">학종 관리</h4>
                <p className="text-gray-600 text-sm">학생부 종합전형 대비</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 학습 단계별 과정 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            학습 단계별 과정
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">진단 평가</h3>
              <p className="text-gray-600 text-sm">
                학생의 현재 수준을 정확히 파악하여 
                맞춤형 학습 계획을 수립합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">기초 다지기</h3>
              <p className="text-gray-600 text-sm">
                기본 개념을 탄탄히 다져 
                향후 학습의 기반을 마련합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">심화 학습</h3>
              <p className="text-gray-600 text-sm">
                단계별로 난이도를 높여 
                실력 향상을 도모합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">목표 달성</h3>
              <p className="text-gray-600 text-sm">
                최종 목표 달성을 위한 
                집중적인 학습과 관리가 이루어집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 특별 프로그램 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            특별 프로그램
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">집중 관리반</h3>
              <p className="text-gray-600 mb-4">
                소수 정예로 구성된 집중 관리반에서 
                개별 맞춤형 학습을 진행합니다.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 정원 5명 이하 소수 정예</li>
                <li>• 개별 학습 계획 수립</li>
                <li>• 주 3회 이상 집중 학습</li>
                <li>• 정기적인 진도 점검</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">시험 대비반</h3>
              <p className="text-gray-600 mb-4">
                각종 시험에 특화된 전략적 학습으로 
                목표 점수 달성을 도와드립니다.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 모의고사 정기 실시</li>
                <li>• 시험 전략 및 시간 관리</li>
                <li>• 약점 보완 집중 학습</li>
                <li>• 심리적 안정 지원</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
