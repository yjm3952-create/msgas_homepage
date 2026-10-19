import React from 'react';
import { BENTO_IMAGES } from '../../data/companyData';

interface EsgScreenProps {
  onOpenCertModal: () => void;
  onOpenQuote: () => void;
  lang: 'ko' | 'en';
}

export const EsgScreen: React.FC<EsgScreenProps> = ({ onOpenCertModal, onOpenQuote, lang }) => {
  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="rounded-3xl bg-[#0057c0] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply"
            style={{ backgroundImage: `url(${BENTO_IMAGES.esg})` }}
          ></div>
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              ESG &amp; Carbon Neutrality Vision
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              친환경 에너지 전환과 안전 최우선,<br />
              <span className="text-[#63f9e8]">지속 가능한 미래를 여는 MS가스</span>
            </h1>
            <p className="text-sm text-[#d8e2ff] leading-relaxed">
              (주)MS가스는 1974년 창립 이래 쌓아온 가스 취급 엔지니어링 역량을 바탕으로 탄소중립 실증 규제자유특구 암모니아 TTS 벙커링 인프라 구축을 주도하며 글로벌 환경 및 안전 기준을 선도하고 있습니다.
            </p>
          </div>
        </div>

        {/* 3 Pillars: E, S, G Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* E: Environmental */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">eco</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">ENVIRONMENT (환경)</span>
              <h3 className="text-xl font-bold text-[#000f22]">탄소중립 및 무탄소 에너지 전환</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
              국내 최초 울산 규제자유특구 『친환경 선박용 암모니아 TTS 벙커링 인프라 구축 및 안전기준 개발』 R&D 실증을 주관하며 차세대 청정 수소·암모니아 유통망의 기준을 수립하고 있습니다.
            </p>
            <div className="pt-2 text-xs text-[#64748b] space-y-1 border-t border-[#edf2f7]">
              <div>• ISO 14001 환경경영시스템 전 사업장 획득</div>
              <div>• 대기 배출 스크러버 및 가스 회수 정화 설비 100% 가동</div>
              <div>• 탄소중립 유공 국무총리 표창 수훈</div>
            </div>
          </div>

          {/* S: Social */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0057c0] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">groups</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">SOCIAL (사회)</span>
              <h3 className="text-xl font-bold text-[#000f22]">안전 최우선 문화 및 지역 상생</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
              임직원과 협력업체 및 고객사 전 공정 '무재해·무사고 안전 골든룰'을 제정하고, 취약계층 가스 타이머콕 무상 보급 사업 및 전국 거점 지역 소외계층 후원을 적극 실천하고 있습니다.
            </p>
            <div className="pt-2 text-xs text-[#64748b] space-y-1 border-t border-[#edf2f7]">
              <div>• KGS 한국가스안전공사 안전관리 최우수 기업 선정</div>
              <div>• 사업장 인근 소방서 및 지자체 합동 비상 모의훈련 분기별 실시</div>
              <div>• 청년 가스 전문 엔지니어 육성 장학 프로그램 운영</div>
            </div>
          </div>

          {/* G: Governance */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[28px]">gavel</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">GOVERNANCE (지배구조)</span>
              <h3 className="text-xl font-bold text-[#000f22]">투명한 윤리경영과 준법 감시</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
              공정거래 원칙을 준수하고 독립적인 준법 감시인 제도와 익명 윤리제보 센터를 상시 운영하여 모든 경영활동의 투명성과 청렴성을 철저히 보장합니다.
            </p>
            <div className="pt-2 text-xs text-[#64748b] space-y-1 border-t border-[#edf2f7]">
              <div>• GAAP 회계 기준 준수 및 외부 회계감사 적정 의견</div>
              <div>• 임직원 윤리강령 선포 및 정기 컴플라이언스 교육</div>
              <div>• 투명한 협력사 공개 입찰 및 성과 공유제 도입</div>
            </div>
          </div>
        </div>

        {/* Featured Project Spotlight: Ammonia TTS Bunkering */}
        <div className="bg-[#000f22] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-2.5 py-1 rounded bg-[#63f9e8] text-[#001210] text-xs font-bold uppercase tracking-wider inline-block">
              국책 과제 핵심 실증
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              울산 친환경 선박용 암모니아 TTS 벙커링 인프라 구축
            </h2>
            <p className="text-xs sm:text-sm text-[#b0c8eb] leading-relaxed">
              해양 탄소중립 실현을 위해 무탄소 연료인 액화 암모니아를 탱크로리(Truck)에서 선박(Ship)으로 직접 이송 충전하는 TTS(Truck-to-Ship) 벙커링 시스템의 실증 및 안전 표준 제정을 (주)MS가스가 주도하고 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#63f9e8] font-bold block mb-1">HAZOP 정밀 위험평가</span>
                <span className="text-[#b0c8eb]">누출 방지 긴급차단(ESD) 및 건식 커플러 설계</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#63f9e8] font-bold block mb-1">국가 표준 지침 제정</span>
                <span className="text-[#b0c8eb]">친환경선박 벙커링 안전관리 기준 제도화</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-[#071728] border border-white/15 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#006ff0] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">정부 포상 및 훈장 수훈</h4>
                  <p className="text-xs text-[#b0c8eb]">대한민국 가스안전대상</p>
                </div>
              </div>
              <p className="text-xs text-[#d8e2ff] leading-relaxed">
                2025년 (주)MS가스 전청민 대표이사 은탑산업훈장 및 충남도지사 표창 수상. 50년간의 유통 인프라 안전 기여와 탄소중립 프로젝트 성과를 대외적으로 공인받았습니다.
              </p>
              <button
                onClick={onOpenCertModal}
                className="w-full py-2.5 rounded-lg bg-white text-[#000f22] text-xs font-bold hover:bg-[#d8e2ff] transition-colors"
              >
                공인 인증 및 수상 내역 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
