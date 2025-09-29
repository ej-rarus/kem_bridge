import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "학원 소개",
  description: "켐브릿지학원은 2019년 설립된 교육 전문 기관으로, K(국어) E(영어) M(수학)을 연결하는 다리가 되는 교육을 통해 학생들의 종합적인 학습 능력을 향상시킵니다. 대표 박은경, 경기도 양주시 옥정로 위치.",
  keywords: ["켐브릿지학원", "학원소개", "박은경", "양주학원", "옥정학원", "교육철학", "강사진", "설립일", "학원정보"],
  openGraph: {
    title: "학원 소개 | 켐브릿지학원",
    description: "켐브릿지학원은 2019년 설립된 교육 전문 기관으로, K(국어) E(영어) M(수학)을 연결하는 다리가 되는 교육을 제공합니다.",
    url: "https://kembridge.co.kr/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StructuredData 
        type="breadcrumb" 
        data={[
          { name: "홈", url: "https://kembridge.co.kr" },
          { name: "학원 소개", url: "https://kembridge.co.kr/about" }
        ]} 
      />
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            학원 소개
          </h1>
          <p className="text-xl text-primary-100">
            KEM Bridge는 학생들의 꿈을 현실로 만들어가는 교육 전문 기관입니다
          </p>
        </div>
      </section>

      {/* 학원 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                KEM Bridge 소개
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                KEM Bridge는 2019년 설립된 교육 전문 기관으로, 
                K(국어) E(영어) M(수학)을 연결하는 다리가 되는 교육을 통해 
                학생들의 종합적인 학습 능력을 향상시키고 있습니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                우리는 단순한 지식 전달이 아닌, 초·중·고 학생들의 
                잠재력을 최대한 발휘할 수 있도록 돕는 것이 
                교육의 목표라고 믿습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  개별 맞춤형 교육
                </span>
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  체계적 학습 관리
                </span>
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  전문 강사진
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">학원 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">설립일:</span>
                  <span className="text-gray-600">2019년 2월</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">대표:</span>
                  <span className="text-gray-600">박은경</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">주소:</span>
                  <span className="text-gray-600">경기도 양주시 옥정로 222 스카이타워 9층 904호</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">전화:</span>
                  <span className="text-gray-600">0507-1379-6889</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">이메일:</span>
                  <span className="text-gray-600">8686889@naver.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 철학 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            KEM Bridge 교육철학
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">국어 (Korean)</h3>
              <p className="text-gray-600">
                독서·논술 프로그램을 통해 사고력과 표현력을 기르고, 
                학생부 컨설팅으로 종합적인 국어 역량을 개발합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">영어 (English)</h3>
              <p className="text-gray-600">
                체계적인 영어 교육으로 의사소통 능력을 향상시키고, 
                면접 대비 프로그램으로 실전 영어 실력을 완성합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">수학 (Mathematics)</h3>
              <p className="text-gray-600">
                논리적 사고력과 문제 해결 능력을 기르며, 
                과학과 연계하여 종합적인 수학적 사고를 완성합니다.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">KEM Bridge의 의미</h3>
              <p className="text-lg text-gray-600">
                K(국어) E(영어) M(수학)을 연결하는 다리가 되어<br />
                초·중·고 학생들의 종합적인 학습 능력을 향상시키고<br />
                입시 컨설팅과 학종 관리를 통해 최적의 진로를 제시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 강사진 소개 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            전문 강사진
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">김수학 선생님</h3>
              <p className="text-blue-600 font-medium mb-2">수학 전문</p>
              <p className="text-gray-600 text-sm">
                서울대 수학과 졸업, 15년 경력의 수학 전문 강사
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">이영어 선생님</h3>
              <p className="text-green-600 font-medium mb-2">영어 전문</p>
              <p className="text-gray-600 text-sm">
                연세대 영어영문학과 졸업, 해외 유학 경험 보유
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">박과학 선생님</h3>
              <p className="text-purple-600 font-medium mb-2">과학 전문</p>
              <p className="text-gray-600 text-sm">
                KAIST 물리학과 졸업, 실험 중심의 과학 교육 전문
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
