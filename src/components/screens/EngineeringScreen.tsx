import React, { useState } from 'react';
import { LAB_IMAGES } from '../../data/companyData';

interface EngineeringScreenProps {
  onOpenQuote: (serviceName?: string) => void;
  lang: 'ko' | 'en';
}

export const EngineeringScreen: React.FC<EngineeringScreenProps> = ({ onOpenQuote, lang }) => {
  // Purge Calculator state
  const [pipeVolume, setPipeVolume] = useState<number>(50); // m³
  const [initialO2, setInitialO2] = useState<number>(20.9); // %
  const [targetO2, setTargetO2] = useState<number>(0.5); // %
  const [purgeCycles, setPurgeCycles] = useState<number>(4);

  // Dilution purge formula: target = initial * (P_low / P_high)^n or volume factor
  const requiredN2 = Math.round(pipeVolume * Math.log(initialO2 / Math.max(targetO2, 0.01)) * 1.25);

  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="rounded-3xl bg-[#0a2540] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider block">
              Advanced Cryogenic &amp; Analytical Engineering
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              무결점 안전과 공정 최적화를 위한<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8e2ff] via-[#63f9e8] to-white">
                엔지니어링 &amp; 품질 분석 서비스
              </span>
            </h1>
            <p className="text-sm text-[#b0c8eb] leading-relaxed">
              MS가스는 단순 유통을 넘어 배관 시운전 질소 퍼지(Purge), ppb 단위 극미량 가스크로마토그래피(GC) 분석, 글로벌 ISO 탱크컨테이너 해상 물류, KGS 고압가스 안전 인허가까지 전 공정 턴키 엔지니어링을 제공합니다.
            </p>
          </div>
        </div>

        {/* 4 Core Services Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[32px]">biotech</span>
              </div>
              <h3 className="text-xl font-bold text-[#000f22]">정밀 가스분석 서비스 (Gas Analysis)</h3>
              <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                국가공인 시험 장비(GC-TCD, GC-FID, GC-PDHID 및 수분/산소 미량 분석기)를 통해 가스 내 0.1 ppb 단위의 수분, 탄화수소, 일산화탄소 등 불순물을 실시간 검출하고 공인 품질 시험성적서를 발급합니다.
              </p>
              <ul className="text-xs text-[#64748b] space-y-1.5 list-disc pl-5">
                <li>반도체/전자급 초고순도 가스 전수 로트(Lot) 검사</li>
                <li>식음료용 액화탄산(CO₂) 유해물질 사전 검출</li>
                <li>대기 배출가스 및 교정용 표준가스 농도 정밀 검증</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuote('정밀 가스분석 서비스 의뢰')}
              className="w-full py-2.5 rounded-xl bg-[#edf2f7] hover:bg-[#0057c0] hover:text-white text-[#0057c0] text-xs font-bold transition-colors"
            >
              분석 의뢰 상담
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[32px]">air</span>
              </div>
              <h3 className="text-xl font-bold text-[#000f22]">가스 퍼지(Purge) 엔지니어링</h3>
              <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                석유화학 플랜트 및 배관망 신설, 정기보수(TA: Turn-Around) 시 배관 내부의 가연성/폭발성 가스를 고순도 질소(N₂)로 안전하게 치환(Purge)하여 화재 및 폭발 사고를 원천 차단합니다.
              </p>
              <ul className="text-xs text-[#64748b] space-y-1.5 list-disc pl-5">
                <li>대용량 액체질소 기화기(Vaporizer) 현장 급송 투입</li>
                <li>산소 농도 0.5% 이하 도달 실시간 계측 모니터링</li>
                <li>배관 기밀 시험 및 누출 탐지(Pneumatic Test) 병행</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuote('가스 퍼지(Purge) 시공 견적')}
              className="w-full py-2.5 rounded-xl bg-[#edf2f7] hover:bg-[#0057c0] hover:text-white text-[#0057c0] text-xs font-bold transition-colors"
            >
              퍼지 시공 문의
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[32px]">public</span>
              </div>
              <h3 className="text-xl font-bold text-[#000f22]">수출입 및 글로벌 복합 물류</h3>
              <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                자체 보유 ISO T75/T50 초저온 극저온 탱크컨테이너를 기반으로 일본, 중국, 동남아 및 미주 지역으로의 초저온 화학물질 및 특수가스 국제 해상·육상 복합 물류를 원스톱으로 지원합니다.
              </p>
              <ul className="text-xs text-[#64748b] space-y-1.5 list-disc pl-5">
                <li>IMO/IMDG 위험물 해상 운송 규정 100% 준수</li>
                <li>위성 GPS 및 실시간 컨테이너 내압·온도 추적 관제</li>
                <li>국내 항만 보세 통관 및 세관 인허가 대행</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuote('ISO 탱크컨테이너 해상 물류 상담')}
              className="w-full py-2.5 rounded-xl bg-[#edf2f7] hover:bg-[#0057c0] hover:text-white text-[#0057c0] text-xs font-bold transition-colors"
            >
              글로벌 물류 상담
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#0057c0] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[32px]">shield</span>
              </div>
              <h3 className="text-xl font-bold text-[#000f22]">전문 안전관리 및 KGS 인허가 컨설팅</h3>
              <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                고압가스 안전관리법, 위험물안전관리법, 산업안전보건법에 근거한 가스 저장소 설치 허가, 완성검사 수검, 위험성평가(HAZOP/K-PSR) 및 기술검토서 작성을 전문 엔지니어가 책임 대행합니다.
              </p>
              <ul className="text-xs text-[#64748b] space-y-1.5 list-disc pl-5">
                <li>특정설비 제조 및 저장능력 산정 인허가 대행</li>
                <li>가스누출감지경보기 및 비상차단장치 인터록 적정성 평가</li>
                <li>정기 법정 안전진단 및 사전 컨설팅</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuote('안전관리 인허가 컨설팅 신청')}
              className="w-full py-2.5 rounded-xl bg-[#edf2f7] hover:bg-[#0057c0] hover:text-white text-[#0057c0] text-xs font-bold transition-colors"
            >
              인허가 컨설팅 상담
            </button>
          </div>
        </div>

        {/* Interactive Purge Volume Calculator Simulator */}
        <div className="bg-white p-8 rounded-3xl border border-[#e5eeff] shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">
              ONLINE ENGINEERING TOOL
            </span>
            <h3 className="text-xl font-bold text-[#000f22]">
              질소 퍼지(Nitrogen Purging) 필요 유량 시뮬레이터
            </h3>
            <p className="text-xs text-[#64748b]">
              배관 및 탱크 체적과 목표 잔여 산소 농도를 설정하여 예상 필요 질소 공급량(Nm³)을 즉시 계산해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe]">
            <div>
              <label className="block text-xs font-bold text-[#000f22] mb-1">
                배관/용기 총 체적 (Volume, m³)
              </label>
              <input
                type="number"
                min="1"
                max="5000"
                value={pipeVolume}
                onChange={(e) => setPipeVolume(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white rounded-lg border border-[#c4c6ce] text-sm font-bold outline-none"
              />
              <span className="text-[11px] text-[#64748b] mt-1 block">현재 설정: {pipeVolume} m³</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#000f22] mb-1">
                목표 잔여 산소 농도 (Target O₂, %)
              </label>
              <select
                value={targetO2}
                onChange={(e) => setTargetO2(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white rounded-lg border border-[#c4c6ce] text-sm font-bold outline-none"
              >
                <option value={1.0}>1.0% 이하 (일반 불활성화)</option>
                <option value={0.5}>0.5% 이하 (권장 안전기준)</option>
                <option value={0.1}>0.1% 이하 (초정밀 화학공정)</option>
                <option value={0.01}>0.01% 이하 (반도체/전자급)</option>
              </select>
              <span className="text-[11px] text-[#64748b] mt-1 block">대기중 기준: 20.9%</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#000f22] mb-1">
                치환 방식 (Purge Method)
              </label>
              <select
                value={purgeCycles}
                onChange={(e) => setPurgeCycles(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white rounded-lg border border-[#c4c6ce] text-sm font-bold outline-none"
              >
                <option value={3}>희석 치환 (Dilution Purge)</option>
                <option value={4}>압력 순환 치환 (Pressure Cycle Purge)</option>
                <option value={5}>진공 치환 (Vacuum Displacement)</option>
              </select>
              <span className="text-[11px] text-[#64748b] mt-1 block">연속 유동 기화기 투입</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#000f22] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#63f9e8] font-bold uppercase tracking-wider">
                예상 필요 고순도 질소(N₂) 유량
              </span>
              <div className="text-3xl font-black mt-1">
                약 <span className="text-[#63f9e8]">{requiredN2.toLocaleString()}</span> Nm³
                <span className="text-xs font-normal text-[#b0c8eb] ml-2">
                  (초저온 액체질소 환산 약 {Math.round(requiredN2 * 1.25 / 1000 * 10) / 10} 톤)
                </span>
              </div>
            </div>
            <button
              onClick={() => onOpenQuote(`질소 퍼지 엔지니어링 (${pipeVolume}m³, 목표O2: ${targetO2}%)`)}
              className="px-6 py-3 rounded-xl bg-[#0057c0] hover:bg-[#006ff0] text-white font-bold text-xs whitespace-nowrap transition-colors"
            >
              현장 기술지원 신청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
