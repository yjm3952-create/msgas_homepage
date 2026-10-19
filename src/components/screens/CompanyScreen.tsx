import React from 'react';
import { HISTORY_TIMELINE, BENTO_IMAGES } from '../../data/companyData';

interface CompanyScreenProps {
  onOpenCertModal: () => void;
  onOpenQuote: () => void;
  lang: 'ko' | 'en';
}

export const CompanyScreen: React.FC<CompanyScreenProps> = ({
  onOpenCertModal,
  onOpenQuote,
  lang,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Title Banner */}
        <div className="rounded-3xl bg-[#0a2540] text-white p-8 sm:p-14 relative overflow-hidden shadow-xl border border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url(${BENTO_IMAGES.history})` }}
          ></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#63f9e8] text-[#001210] text-xs font-bold uppercase tracking-wider inline-block">
              Since 1974 · 50 Years of Excellence
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              반세기를 이어온 신뢰와 기술,<br />
              <span className="text-[#63f9e8]">대한민국 가스 산업의 역사</span>와 함께합니다.
            </h1>
            <p className="text-sm sm:text-base text-[#b0c8eb] leading-relaxed pt-2">
              (주)MS가스는 1974년 창립 이래 안전과 품질을 최우선으로 반도체, 조선, 화학 및 국가 기간산업의 든든한 동반자로 성장해 왔습니다. 전국 17개 직영 네트워크와 최첨단 초저온 인프라로 무결점 가스 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        {/* CEO Greeting Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#e5eeff]">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#071728] aspect-[4/5] relative">
              <img
                src={BENTO_IMAGES.history}
                alt="MS GAS Corporate Heritage"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs text-[#63f9e8] font-bold uppercase">Representative Directors</div>
                <div className="text-2xl font-bold">대표이사 전원태 · 전청민</div>
                <p className="text-xs text-[#b0c8eb]">은탑산업훈장 수훈 · 가스안전대상 대통령 표창</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">CEO MESSAGE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000f22] tracking-tight">
                "안전에는 타협이 없으며,<br />품질에는 한계가 없습니다."
              </h2>
            </div>
            <div className="text-sm text-[#43474d] leading-relaxed space-y-4">
              <p>
                안녕하십니까, (주)MS가스 홈페이지를 찾아주신 고객 여러분을 진심으로 환영합니다.
              </p>
              <p>
                1974년 첫 발을 내디딘 당사는 50여 년 동안 대한민국 산업 발전의 보이지 않는 심장 역할을 해왔습니다. 제철·조선 현장의 고순도 산소와 질소 공급부터, 오늘날 나노미터 단위의 정밀도를 다투는 첨단 반도체 특수가스, 그리고 환자의 생명을 지키는 의료용 의약품 가스에 이르기까지, MS가스는 끊임없는 기술 혁신으로 신뢰를 쌓아왔습니다.
              </p>
              <p>
                특히 최근에는 탄소중립 실증특례 프로젝트를 통해 친환경 암모니아 해상 벙커링 인프라와 수소 에너지 유통 기술을 선도하며, ESG 경영을 기반으로 다음 50년의 푸른 미래를 준비하고 있습니다.
              </p>
              <p className="font-semibold text-[#000f22]">
                고객사의 성공이 곧 당사의 존재 이유라는 사명감으로, 365일 24시간 안전하고 완벽한 품질로 보답하겠습니다. 감사합니다.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenCertModal}
                className="px-5 py-2.5 rounded-lg bg-[#eff4ff] text-[#0057c0] text-xs font-bold hover:bg-[#d8e2ff] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>품질·안전 인증서 보기</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>기술 및 공급 상담</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">CORE VALUES</span>
            <h2 className="text-2xl font-bold text-[#000f22]">MS가스의 4대 경영 핵심가치</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <h3 className="text-lg font-bold text-[#000f22]">안전 최우선 (Safety)</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                전 사업장 무재해 원칙과 24/7 IoT 압력 모니터링으로 어떠한 위험도 사전에 차단합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">biotech</span>
              </div>
              <h3 className="text-lg font-bold text-[#000f22]">기술 혁신 (Innovation)</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                UHP 7N급 초고순도 가스 정제와 ppb 극미량 불순물 분석 설비로 글로벌 표준을 창출합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <h3 className="text-lg font-bold text-[#000f22]">고객 신뢰 (Integrity)</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                전국 17개소 직영망을 통한 당일 급송 체계로 고객사의 생산 중단 리스크를 원천 제거합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[28px]">eco</span>
              </div>
              <h3 className="text-lg font-bold text-[#000f22]">지속가능경영 (ESG)</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">
                암모니아 선박 벙커링 및 수소 인프라 연구로 친환경 무탄소 에너지 사회로의 전환을 견인합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 50-Year History Timeline */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#e5eeff] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">HERITAGE TIMELINE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000f22] tracking-tight mt-1">
                반세기를 걸어온 MS가스의 발자취 (1974~2025)
              </h2>
            </div>
            <div className="text-xs font-semibold text-[#0057c0] px-3 py-1.5 rounded-lg bg-[#eff4ff]">
              51 Years Legacy
            </div>
          </div>

          <div className="relative border-l-2 border-[#0057c0]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {HISTORY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#0057c0] group-hover:scale-125 transition-transform"></div>
                <div className="space-y-1">
                  <span className="font-mono text-sm font-black text-[#0057c0]">{item.year}</span>
                  <h4 className="text-base font-bold text-[#000f22]">{item.title}</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Profile Table */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e5eeff] space-y-4">
          <h3 className="text-lg font-bold text-[#000f22]">회사 일반 현황</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">회사명</span>
              <span className="font-bold text-[#000f22]">(주)MS가스 (MS GAS Co., Ltd.)</span>
            </div>
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">설립연월일</span>
              <span className="font-bold text-[#000f22]">1974년 10월 1일 (창립 51주년)</span>
            </div>
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">대표이사</span>
              <span className="font-bold text-[#000f22]">전원태 · 전청민</span>
            </div>
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">사업자등록번호</span>
              <span className="font-bold text-[#000f22]">605-81-12490</span>
            </div>
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">연간 매출 규모</span>
              <span className="font-bold text-[#0057c0]">935억 원 (2024년 결산 기준)</span>
            </div>
            <div className="flex p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff] justify-between">
              <span className="text-[#64748b] font-medium">사업 인프라</span>
              <span className="font-bold text-[#000f22]">전국 17개 거점 플랜트 및 영업소</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
