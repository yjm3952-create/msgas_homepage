import React, { useState, useRef, useEffect } from 'react';
import { TabType } from '../../types';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  actions?: Array<{ label: string; action: () => void }>;
}

interface ChatbotWidgetProps {
  onOpenQuote: (defaultGas?: string) => void;
  onSelectTab: (tab: TabType) => void;
  lang: 'ko' | 'en';
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onOpenQuote,
  onSelectTab,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: lang === 'ko'
        ? `반갑습니다! (주)MS가스 AI 가스 컨설턴트 **'MS 가스 매니저'**입니다.\n50년 전통의 산업용·의료용·반도체 특수가스 공급 사양, 배관 질소 퍼지(Purge), 전국 17개 거점 납품 일정, MSDS 조회 등 무엇이든 편하게 물어보세요.`
        : `Welcome to MS GAS! I am your AI Gas Consultant.\nAsk me anything about our industrial, medical, and electronic specialty gases, purging engineering, 17 nationwide logistics hubs, or MSDS sheets.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { label: '고순도 질소/산소 공급 규격', query: '고순도 질소와 산소의 공급 규격과 순도(Purity)에 대해 알려줘' },
    { label: '배관 질소 퍼지(Purge) 견적', query: '플랜트 신설 배관의 질소 퍼지(Purge) 시공 및 소요 유량 견적은 어떻게 산출되나요?' },
    { label: 'MSDS 및 성적서 발급', query: 'MSDS 물질안전보건자료와 로트별 분석성적서는 어디서 발급받나요?' },
    { label: '전국 17개소 공급망 위치', query: '부산 본사와 화성, 서산 플랜트 등 전국 직영 공급 거점 현황을 알려줘' },
    { label: '암모니아 TTS 벙커링 실증', query: '울산 규제자유특구 암모니아 TTS 벙커링 실증 사업에 대해 설명해줘' },
    { label: '24시간 긴급 비상 핫라인', query: '가스 압력 저하 시 24시간 비상 대응 절차와 긴급 핫라인 번호는?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.text || '응답을 받지 못했습니다.';

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.warn('Chat API error, using intelligent fallback:', err);
      // High-reliability corporate fallback matching user query
      let fallbackText = `(주)MS가스 AI 가스 컨설턴트입니다.
문의주신 "${text}"에 대해 안내드립니다.

- **산업·의료·특수가스 공급**: 5N(99.999%)~7N 초고순도 가스를 전국 17개소 거점에서 당일/익일 직납합니다.
- **배관 및 설비 엔지니어링**: KGS 기준에 맞춘 초저온 저장탱크 시공 및 현장 질소 퍼지(Purge) 서비스를 원스톱으로 지원합니다.
- **온라인 견적 및 기술 문의**: 상단 [문의하기]를 클릭하시거나 24시간 상황실(051-317-0021)로 연락주시면 전문 엔지니어가 1시간 내 상담해 드립니다.`;

      if (text.includes('퍼지') || text.includes('Purge')) {
        fallbackText = `**[MS가스 질소 퍼지(Purge) 엔지니어링 안내]**
- 석유화학 플랜트 및 배관 신설/TA(정기보수) 시 폭발 위험 가스를 고순도 질소(N₂)로 안전하게 불활성화 치환합니다.
- 대용량 기화기(Vaporizer)와 고압 탱크로리를 현장에 급송 배치하며, 잔여 산소 농도 0.5% 이하까지 실시간 계측 모니터링합니다.
- 상단 메뉴의 [서비스 > 질소 퍼지 시뮬레이터]에서 배관 체적(m³)별 예상 필요 질소량을 즉시 계산해보실 수 있습니다.`;
      } else if (text.includes('MSDS') || text.includes('성적서')) {
        fallbackText = `**[MSDS 및 성적서 발급 안내]**
- 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂), 삼불화질소(NF₃), 모노실란(SiH₄) 등 전 품목 GHS 공인 물질안전보건자료를 홈페이지 상단 [고객지원 > MSDS 자료실]에서 원본 PDF로 무료 다운로드하실 수 있습니다.
- 정밀 분석 성적서는 출하 시 로트(Lot)별로 100% 동봉 교부됩니다.`;
      } else if (text.includes('거점') || text.includes('위치') || text.includes('플랜트')) {
        fallbackText = `**[전국 17개소 직영 인프라]**
- **부산 본사**: 부산 사상구 학감대로 161 (의료용 가스 GMP 충전동)
- **화성 하이테크 플랜트**: 경기 화성 향남읍 제약공단로 88 (수도권 반도체 UHP 거점)
- **서산 플랜트**: 충남 서산 대산읍 대죽1로 45 (대산 석유화학 연계 배관망)
- **군산/울산/여수/구미**: 새만금 2차전지, 울산 암모니아 R&D, 여수 화학단지 거점
상단 [생산설비] 메뉴에서 인터랙티브 전국 지도와 실시간 IoT 관제 상태를 확인하실 수 있습니다.`;
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: '대화 내용이 초기화되었습니다. 새로운 질문을 입력해 주세요.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#000f22] hover:bg-[#0057c0] text-white shadow-2xl hover:shadow-[#0057c0]/50 transition-all duration-300 border border-[#63f9e8]/40 hover:scale-105 cursor-pointer"
            aria-label="Open AI Gas Consultant Chatbot"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#0a2540] flex items-center justify-center text-[#63f9e8] group-hover:bg-white group-hover:text-[#0057c0] transition-colors shadow-inner">
                <span className="material-symbols-outlined text-[24px]">smart_toy</span>
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#63f9e8] rounded-full ring-2 ring-[#000f22] animate-pulse"></span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-black tracking-wider text-white">AI 가스 매니저</div>
              <div className="text-[10px] text-[#63f9e8] font-bold">24시간 실시간 기술 상담</div>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#d3e4fe] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#000f22] text-white px-5 py-4 flex items-center justify-between border-b border-[#0a2540]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0057c0] flex items-center justify-center text-[#63f9e8] shadow-sm">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white">MS 가스 AI 컨설턴트</h3>
                  <span className="w-2 h-2 rounded-full bg-[#63f9e8] animate-ping"></span>
                </div>
                <p className="text-[11px] text-[#b0c8eb]">고순도 가스 &amp; 엔지니어링 24/7 AI 상담</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="w-8 h-8 rounded-lg text-[#b0c8eb] hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                title="대화 초기화"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg text-[#b0c8eb] hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                title="닫기"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Quick Questions Chips */}
          <div className="bg-[#eff4ff] px-3 py-2 border-b border-[#d3e4fe] flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.query)}
                disabled={loading}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-[#0057c0] text-[#0057c0] hover:text-white border border-[#d3e4fe] text-[11px] font-bold whitespace-nowrap transition-colors shadow-2xs cursor-pointer flex-shrink-0"
              >
                #{q.label}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#f8f9ff]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#000f22] text-[#63f9e8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed space-y-2 shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#0057c0] text-white rounded-tr-xs'
                      : 'bg-white text-[#0b1c30] border border-[#e5eeff] rounded-tl-xs'
                  }`}
                >
                  <div className="whitespace-pre-line font-sans">
                    {msg.text}
                  </div>
                  <span
                    className={`block text-[10px] text-right ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-[#64748b]'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-lg bg-[#000f22] text-[#63f9e8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                </div>
                <div className="bg-white border border-[#e5eeff] rounded-2xl rounded-tl-xs px-4 py-3 text-xs shadow-sm flex items-center gap-1.5 text-[#0057c0]">
                  <span className="w-2 h-2 rounded-full bg-[#0057c0] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0057c0] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0057c0] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[11px] text-[#64748b] ml-1.5 font-medium">답변 작성 중...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Direct Action Bar */}
          <div className="px-3 py-1.5 bg-[#edf2f7] border-t border-[#e5eeff] flex items-center justify-between text-[11px]">
            <span className="text-[#64748b] font-medium">빠른 서비스 연결:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="text-[#0057c0] font-bold hover:underline px-1.5 py-0.5 rounded hover:bg-white"
              >
                견적 요청
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onSelectTab('msds-archive');
                }}
                className="text-[#0057c0] font-bold hover:underline px-1.5 py-0.5 rounded hover:bg-white"
              >
                MSDS 자료
              </button>
              <span className="text-gray-300">|</span>
              <a
                href="tel:051-317-0021"
                className="text-red-700 font-bold hover:underline px-1.5 py-0.5 rounded hover:bg-white"
              >
                051-317-0021
              </a>
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#e5eeff] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="가스 규격, 견적, 퍼지 공정, MSDS를 질문하세요..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#c4c6ce] text-xs focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3] outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className="w-10 h-10 rounded-xl bg-[#000f22] hover:bg-[#0057c0] disabled:bg-gray-200 text-white disabled:text-gray-400 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 shadow-sm"
              title="전송"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
