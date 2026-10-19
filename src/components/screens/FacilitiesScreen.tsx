import React, { useState } from 'react';
import { NATIONWIDE_HUBS, LAB_IMAGES, BENTO_IMAGES } from '../../data/companyData';
import { FacilityHub } from '../../types';

interface FacilitiesScreenProps {
  onOpenQuote: (hubName?: string) => void;
  lang: 'ko' | 'en';
}

export const FacilitiesScreen: React.FC<FacilitiesScreenProps> = ({ onOpenQuote, lang }) => {
  const [selectedHub, setSelectedHub] = useState<FacilityHub>(NATIONWIDE_HUBS[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { key: 'all', label: '전체 (17개소)' },
    { key: '부산/경남', label: '부산/경남 본부' },
    { key: '경기/수도권', label: '수도권/화성' },
    { key: '충청권', label: '충청/서산' },
    { key: '호남권', label: '호남/군산' },
    { key: '영남/울산', label: '울산 R&D' },
  ];

  const filteredHubs = NATIONWIDE_HUBS.filter(
    (hub) => selectedRegion === 'all' || hub.region === selectedRegion
  );

  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="rounded-3xl bg-[#071728] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
            style={{ backgroundImage: `url(${BENTO_IMAGES.network})` }}
          ></div>
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider block">
              17 Strategic Hubs &amp; Real-time Telemetry
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              전국을 촘촘히 잇는<br />
              <span className="text-[#63f9e8]">초저온 가스 생산 및 직영 유통 네트워크</span>
            </h1>
            <p className="text-sm text-[#b0c8eb] leading-relaxed">
              부산 본사를 기점으로 화성, 서산, 군산, 여수, 울산 등 대한민국 핵심 산업 벨트에 위치한 17개 거점 플랜트에서 365일 24시간 실시간 IoT 원격 압력 관제와 함께 당일 급송 체계를 가동합니다.
            </p>
          </div>
        </div>

        {/* Live IoT Telemetry Simulator Banner */}
        <div className="p-6 rounded-2xl bg-[#000f22] border border-white/10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006ff0]/20 text-[#63f9e8] flex items-center justify-center flex-shrink-0 animate-pulse">
              <span className="material-symbols-outlined text-[28px]">sensors</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">실시간 원격 탱크 및 벌크로리 관제 현황</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  정상 가동 중 (NORMAL)
                </span>
              </div>
              <p className="text-xs text-[#b0c8eb] mt-0.5">
                전국 1,480여 고객사 초저온 탱크 압력(bar) 및 액면 잔량(%) 실시간 자동 전송 중
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#d8e2ff]">
            <div className="text-center">
              <span className="block text-[11px] text-[#768dad]">운행 중 차량</span>
              <span className="text-base font-bold text-white">48 대</span>
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <div className="text-center">
              <span className="block text-[11px] text-[#768dad]">저장 탱크 합산</span>
              <span className="text-base font-bold text-[#63f9e8]">1,850 톤</span>
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <div className="text-center">
              <span className="block text-[11px] text-[#768dad]">당일 정시 배송률</span>
              <span className="text-base font-bold text-emerald-400">99.98%</span>
            </div>
          </div>
        </div>

        {/* Interactive Network Map & Hub Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map & Visual representation (Left: 5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#e5eeff] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#000f22] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[20px] text-[#0057c0]">map</span>
                대한민국 거점 지도
              </h3>
              <span className="text-xs text-[#64748b]">노드 클릭 시 상세 조회</span>
            </div>

            {/* Stylized Korea Map Canvas */}
            <div className="relative w-full h-[460px] bg-[#071728] rounded-2xl overflow-hidden border border-[#0a2540] flex items-center justify-center p-4">
              {/* Abstract Map Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

              {/* Map Outline Simulation (SVG) */}
              <svg className="w-full h-full opacity-60" viewBox="0 0 100 100">
                <path
                  d="M35 15 Q45 10 50 18 Q55 25 58 40 Q62 55 75 60 Q80 72 70 82 Q55 90 45 85 Q35 80 32 65 Q28 45 35 15 Z"
                  fill="#0a2540"
                  stroke="#0057c0"
                  strokeWidth="0.8"
                />
              </svg>

              {/* Hub Interactive Markers */}
              {NATIONWIDE_HUBS.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all z-20 focus:outline-none`}
                  >
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all ${
                        isSelected
                          ? 'w-7 h-7 bg-[#63f9e8] text-[#001210] ring-4 ring-[#63f9e8]/40 scale-125 font-bold shadow-lg'
                          : 'w-4 h-4 bg-[#006ff0] hover:bg-[#63f9e8] text-white'
                      }`}
                    >
                      <span className="text-[10px] font-black">
                        {isSelected ? '★' : ''}
                      </span>
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      )}
                    </div>
                    <span
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-md pointer-events-none ${
                        isSelected
                          ? 'bg-[#0057c0] text-white z-30'
                          : 'bg-black/70 text-gray-200'
                      }`}
                    >
                      {hub.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-[#eff4ff] text-xs text-[#0057c0] flex items-center justify-between">
              <span>선택 거점: <strong>{selectedHub.name}</strong></span>
              <span className="font-mono">{selectedHub.region}</span>
            </div>
          </div>

          {/* Hub Directory & Details (Right: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Selected Hub Spotlight Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e5eeff] shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5eeff] pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#eff4ff] text-[#0057c0] text-xs font-bold uppercase">
                    {selectedHub.region}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#000f22] mt-1.5">
                    {selectedHub.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#64748b]">운영 전담 차량</span>
                  <div className="text-lg font-bold text-[#0057c0]">{selectedHub.fleetCount} 대 상시배차</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff]">
                  <span className="text-[#64748b] block font-medium">소재지 주소</span>
                  <span className="font-bold text-[#000f22]">{selectedHub.address}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff]">
                  <span className="text-[#64748b] block font-medium">연락처 / 배차 직통</span>
                  <span className="font-bold text-[#0057c0]">{selectedHub.phone}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff] sm:col-span-2">
                  <span className="text-[#64748b] block font-medium">저장 인프라 설비 용량</span>
                  <span className="font-bold text-[#000f22]">{selectedHub.tankCapacity}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#000f22] uppercase tracking-wider block">
                  거점 특화 기능 및 인증 설비
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#edf2f7] text-[#0b1c30] text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[15px] text-[#0057c0]">check_circle</span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuote(`${selectedHub.name} 공급 문의`)}
                  className="px-5 py-2.5 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] transition-colors"
                >
                  해당 거점 직납 상담
                </button>
                <a
                  href={`tel:${selectedHub.phone}`}
                  className="px-4 py-2.5 rounded-lg border border-[#c4c6ce] text-[#43474d] text-xs font-semibold hover:bg-[#edf2f7] flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>{selectedHub.phone}</span>
                </a>
              </div>
            </div>

            {/* Hubs List Selector */}
            <div className="bg-white p-6 rounded-3xl border border-[#e5eeff] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#000f22]">전국 17개소 거점 목록</h4>
                <div className="flex gap-1">
                  {regions.map((reg) => (
                    <button
                      key={reg.key}
                      onClick={() => setSelectedRegion(reg.key)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                        selectedRegion === reg.key
                          ? 'bg-[#0057c0] text-white'
                          : 'bg-[#edf2f7] text-[#64748b] hover:text-[#000f22]'
                      }`}
                    >
                      {reg.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-[#e5eeff] border border-[#e5eeff] rounded-2xl overflow-hidden max-h-60 overflow-y-auto">
                {filteredHubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className={`w-full p-3.5 text-left flex items-center justify-between transition-colors ${
                      selectedHub.id === hub.id ? 'bg-[#eff4ff]' : 'hover:bg-[#f8f9ff]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#000f22]">{hub.name}</div>
                      <div className="text-[11px] text-[#64748b]">{hub.address}</div>
                    </div>
                    <span className="material-symbols-outlined text-[#0057c0] text-[18px]">
                      chevron_right
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Major Equipment Showcases (3 columns) */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider">
              FACILITY EQUIPMENT
            </span>
            <h3 className="text-2xl font-bold text-[#000f22]">핵심 생산 및 충전 설비</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#e5eeff] shadow-sm group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={LAB_IMAGES.filling}
                  alt="초저온 충전 시스템"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-[#000f22]">초저온 충전 시스템</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  대용량 자동화 매니폴드와 진공단열 배관을 갖추어 기화 손실을 최소화하고 안전 충전을 보장합니다.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#e5eeff] shadow-sm group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={LAB_IMAGES.gc}
                  alt="R&D 센터 분석기"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-[#000f22]">정밀 GC 분석기</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  ppb 단위 극미량 불순물 사전 검출 및 로트별 성적서 100% 실시간 자동 전산화 시스템을 운영합니다.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#e5eeff] shadow-sm group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={LAB_IMAGES.telemetry}
                  alt="실시간 관제 패널"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-[#000f22]">원격 원격제어 관제 패널</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  고객사 저장탱크의 잔량 20% 미만 감지 시 자동 배차 알림 및 사전 보충 충전으로 가스 고갈을 원천 차단합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
