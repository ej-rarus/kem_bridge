export default function NoticePage() {
  // 임시 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: "2024년 여름방학 특별 프로그램 안내",
      content: "여름방학을 맞아 특별 프로그램을 운영합니다. 자세한 내용은 학원으로 문의해주세요.",
      date: "2024-07-15",
      category: "프로그램",
      important: true
    },
    {
      id: 2,
      title: "8월 정기 휴무일 안내",
      content: "8월 15일(광복절)은 정기 휴무일입니다. 수업이 진행되지 않으니 참고해주세요.",
      date: "2024-07-10",
      category: "휴무",
      important: false
    },
    {
      id: 3,
      title: "신규 강사진 합류 소식",
      content: "수학 전문 강사 김선생님이 새롭게 합류하셨습니다. 많은 관심 부탁드립니다.",
      date: "2024-07-05",
      category: "소식",
      important: false
    },
    {
      id: 4,
      title: "7월 모의고사 성적 발표",
      content: "7월 모의고사 성적이 발표되었습니다. 개별 상담을 통해 성적 분석을 받으실 수 있습니다.",
      date: "2024-07-01",
      category: "성적",
      important: true
    },
    {
      id: 5,
      title: "여름철 안전 수칙 안내",
      content: "여름철 안전한 학원 생활을 위한 안전 수칙을 안내드립니다.",
      date: "2024-06-28",
      category: "안전",
      important: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            공지사항
          </h1>
          <p className="text-xl text-primary-100">
            KEM Bridge의 최신 소식과 중요한 안내사항을 확인하세요
          </p>
        </div>
      </section>

      {/* 공지사항 목록 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 검색 및 필터 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="공지사항 검색..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">전체 카테고리</option>
                  <option value="프로그램">프로그램</option>
                  <option value="휴무">휴무</option>
                  <option value="소식">소식</option>
                  <option value="성적">성적</option>
                  <option value="안전">안전</option>
                </select>
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  검색
                </button>
              </div>
            </div>
          </div>

          {/* 공지사항 리스트 */}
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                  notice.important ? 'border-l-4 border-red-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {notice.important && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        중요
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {notice.category}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">{notice.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary-600 transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {notice.content}
                </p>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
                이전
              </button>
              <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                다음
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 작성 안내 (관리자용) */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            공지사항 관련 문의사항이 있으시면 학원으로 연락해주세요.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-sm text-gray-500">전화: 0507-1379-6889</span>
            <span className="text-sm text-gray-500">이메일: 8686889@naver.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
