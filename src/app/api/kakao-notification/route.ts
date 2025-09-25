import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, templateId, templateArgs } = body;

    // 카카오 알림톡 API 설정
    const KAKAO_API_URL = 'https://kapi.kakao.com/v2/api/talk/memo/default/send';
    const KAKAO_ACCESS_TOKEN = process.env.KAKAO_ACCESS_TOKEN; // 카카오 액세스 토큰

    if (!KAKAO_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: '카카오 액세스 토큰이 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // 알림톡 메시지 구성
    const message = {
      object_type: 'text',
      text: `[KEM Bridge 상담 신청]

신청자: ${templateArgs.신청자명}
학생: ${templateArgs.학생명} (${templateArgs.학년})
희망과목: ${templateArgs.과목}
연락처: ${templateArgs.연락처}
이메일: ${templateArgs.이메일}
희망시간: ${templateArgs.희망시간}
문의사항: ${templateArgs.문의사항}

빠른 시일 내에 연락드리겠습니다.`,
      link: {
        web_url: 'https://kem-bridge.com/consultation',
        mobile_web_url: 'https://kem-bridge.com/consultation'
      }
    };

    // 카카오 API 호출
    const response = await fetch(KAKAO_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KAKAO_ACCESS_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `template_object=${encodeURIComponent(JSON.stringify(message))}`,
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: '카카오톡 알림톡 발송 성공' });
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: '카카오톡 알림톡 발송 실패', details: errorData },
        { status: response.status }
      );
    }

  } catch (error) {
    console.error('카카오톡 알림톡 API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
