import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'educationalOrganization' | 'localBusiness' | 'course' | 'breadcrumb';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "켐브릿지학원",
          "alternateName": "KEM Bridge",
          "description": "K(국어) E(영어) M(수학)을 연결하는 종합 교육으로 초·중·고 학생들의 학습 능력을 향상시키는 교육 전문 기관",
          "url": "https://kembridge.co.kr",
          "logo": "https://kembridge.co.kr/logo.png",
          "image": "https://kembridge.co.kr/og-image.jpg",
          "telephone": "0507-1379-6889",
          "email": "8686889@naver.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "옥정로 222 스카이타워 9층 904호",
            "addressLocality": "양주시",
            "addressRegion": "경기도",
            "addressCountry": "KR"
          },
          "founder": {
            "@type": "Person",
            "name": "박은경"
          },
          "foundingDate": "2019-02-01",
          "sameAs": [
            "https://kembridge.co.kr"
          ]
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "켐브릿지학원",
          "description": "K(국어) E(영어) M(수학)을 연결하는 종합 교육 기관",
          "url": "https://kembridge.co.kr",
          "telephone": "0507-1379-6889",
          "email": "8686889@naver.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "옥정로 222 스카이타워 9층 904호",
            "addressLocality": "양주시",
            "addressRegion": "경기도",
            "addressCountry": "KR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.821336",
            "longitude": "127.092114"
          },
          "openingHours": [
            "Mo-Fr 09:00-21:00",
            "Sa 09:00-18:00"
          ],
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card",
          "currenciesAccepted": "KRW"
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "켐브릿지학원",
            "url": "https://kembridge.co.kr"
          },
          "courseMode": "blended",
          "educationalLevel": data.level,
          "inLanguage": "ko",
          "availableLanguage": "ko"
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      default:
        return data;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}
