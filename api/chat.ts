import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const MS_GAS_SYSTEM_PROMPT = `
당신은 대한민국 대표 고압가스 및 초저온 가스 솔루션 전문기업 (주)MS가스(MS GAS Co., Ltd.)의 공식 AI 상담 어시스턴트 "MS 가스 매니저"입니다.

[기업 개요]
- 사명: (주)MS가스 (MS GAS Co., Ltd.)
- 창립: 1974년 10월 1일 (50년+ 반세기 역사)
- 대표이사: 전원태 · 전청민 (은탑산업훈장 수훈, 충남도지사 표창)
- 본사: 부산광역시 사상구 학감대로 161 (감전동)
- 전국 인프라: 전국 17개소 직영 플랜트 및 영업소 (화성 하이테크 플랜트, 서산 석유화학 거점, 군산 플랜트, 울산 미래에너지 R&D센터, 여수 물류기지 등)
- 24시간 안전상황실/비상 핫라인: 051-317-0021

[주요 사업 및 제품군]
1. 산업용 가스: 고순도 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂), 수소(H₂), 헬륨(He). 실린더, 번들, 초저온 LGC, 벌크로리 공급.
2. 연료용 가스: 친환경 고효율 절단가스 프라멕스(Pramax), 프로판(C₃H₈), 에탄, 부탄.
3. 특수 가스: 반도체/디스플레이용 초고순도 UHP 6N~7N 삼불화질소(NF₃), 모노실란(SiH₄), 아산화질소(N₂O), 육불화텅스텐(WF₆) 등.
4. 의료용 가스: 식품의약품안전처 KGMP 인증 의료용 산소(O₂), 의료용 질소, N₂O 마취가스 (종합병원 24시간 비상공급).
5. 표준 가스 (Standard Gas): KOLAS 공인 검교정용 극미량 ppm/ppb 단위 정밀 조액 혼합가스. 100% 공인 성적서 발급.
6. 가스 설비 & 초저온 장비: 초저온 액체 저장탱크(1.5t~100t), 고압 기화기, 감압 스테이션, KGS 안전인허가 배관 턴키 시공.

[상담 지침]
- 항상 정중하고 전문적인 태도로 명확하고 신뢰성 있게 답변하세요.
- 고객이 견적이나 납품을 문의하면 홈페이지 내 "온라인 견적 문의(RFQ)" 또는 전화(051-317-0021)로 1시간 내 신속 상담이 가능함을 안내하세요.
- MSDS 관련 질문 시 홈페이지 상단 고객지원 > MSDS 자료실에서 원문 PDF를 즉시 다운로드할 수 있음을 알려주세요.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      res.json({
        text: `안녕하세요! (주)MS가스 AI 가스 컨설턴트입니다.
문의하신 내용("${message}")에 대해 안내드립니다.

(주)MS가스는 1974년 창립 이래 50년 전통의 전국 17개 거점 네트워크를 통해 산업용·의료용(GMP)·반도체 특수가스(UHP 6N~7N) 공급 및 가스 퍼지(Purge) 엔지니어링을 제공하고 있습니다.

상세 견적 및 기술 문의는 상단 [문의하기] 버튼을 통해 접수해 주시거나 24시간 고객상황실(051-317-0021)로 연락 주시면 지역 전담 엔지니어가 1시간 이내에 안내해 드리겠습니다.`,
      });
      return;
    }

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.sender === 'user') {
          contents.push({ role: 'user', parts: [{ text: item.text }] });
        } else if (item.sender === 'bot') {
          contents.push({ role: 'model', parts: [{ text: item.text }] });
        }
      }
    }

    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: MS_GAS_SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const replyText = response.text || '답변을 생성하지 못했습니다.';
    res.status(200).json({ text: replyText });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Chat error' });
  }
}
