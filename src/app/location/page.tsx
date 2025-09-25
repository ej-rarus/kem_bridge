export default function LocationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            위치/오시는 길
          </h1>
          <p className="text-xl text-primary-100">
            KEM Bridge로 오시는 길을 안내해드립니다
          </p>
        </div>
      </section>

      {/* 학원 정보 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 학원 정보 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                학원 정보
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary-600 text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">주소</h3>
                      <p className="text-gray-600">
                        경기도 양주시 옥정로 222<br />
                        스카이타워 9층 904호
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary-600 text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">전화번호</h3>
                      <p className="text-gray-600">0507-1379-6889</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary-600 text-sm">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">이메일</h3>
                      <p className="text-gray-600">8686889@naver.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-primary-600 text-sm">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">운영시간</h3>
                      <div className="text-gray-600">
                        <p>평일: 오전 9시 ~ 오후 9시</p>
                        <p>토요일: 오전 9시 ~ 오후 6시</p>
                        <p>일요일: 휴무</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 교통편 안내 */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  교통편 안내
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">🚇</span>
                      지하철
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>1호선 양주역:</strong> 도보 10분</p>
                      <p><strong>경의중앙선 덕정역:</strong> 도보 15분</p>
                      <p><strong>버스:</strong> 옥정로 정류장 하차</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">🚌</span>
                      버스
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>시내버스:</strong> 1, 1-1, 1-2, 1-3, 1-4, 1-5</p>
                      <p><strong>마을버스:</strong> 양주 1, 양주 2</p>
                      <p><strong>정류장:</strong> 옥정로 스카이타워 하차</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">🚗</span>
                      자가용
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>주차장:</strong> 스카이타워 지하 주차장 이용</p>
                      <p><strong>주차 요금:</strong> 30분당 1,000원</p>
                      <p><strong>주차 공간:</strong> 충분한 주차 공간 확보</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 지도 영역 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                위치 지도
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* 네이버지도 */}
                <div className="w-full h-96 rounded-lg overflow-hidden mb-4 shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196.97900645069217!2d127.09211375967574!3d37.82133601344711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1758788469256!5m2!1sko!2skr" 
                width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                {/* 지도 링크 버튼들 */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://place.map.kakao.com/805867350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    <span className="mr-2">📱</span>
                    카카오맵
                  </a>
                  <a
                    href="https://naver.me/xE6VDcog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <span className="mr-2">🗺️</span>
                    네이버지도
                  </a>
                </div>
              </div>

              {/* 주변 시설 */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  주변 시설
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">🏪</div>
                      <p className="text-sm font-medium text-gray-800">편의점</p>
                      <p className="text-xs text-gray-600">도보 2분</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">☕</div>
                      <p className="text-sm font-medium text-gray-800">카페</p>
                      <p className="text-xs text-gray-600">도보 3분</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">🍽️</div>
                      <p className="text-sm font-medium text-gray-800">식당</p>
                      <p className="text-xs text-gray-600">도보 5분</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">🏥</div>
                      <p className="text-sm font-medium text-gray-800">병원</p>
                      <p className="text-xs text-gray-600">도보 7분</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 안내 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            길 찾기 어려우시다면?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            오시는 길에 대해 궁금한 점이 있으시면 언제든지 연락해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0507-1379-6889"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              📞 전화 문의
            </a>
            <a
              href="mailto:8686889@naver.com"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              ✉️ 이메일 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
