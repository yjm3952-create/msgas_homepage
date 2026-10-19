import React from 'react';
import { TabType, GasProduct, NoticeItem } from '../../types';
import {
  HERO_IMAGE,
  PRODUCT_IMAGES,
  LAB_IMAGES,
  BENTO_IMAGES,
  GAS_PRODUCTS,
  NOTICES,
} from '../../data/companyData';

interface HomeScreenProps {
  onSelectTab: (tab: TabType) => void;
  onOpenQuote: (defaultGas?: string) => void;
  onOpenProductDetail: (product: GasProduct) => void;
  onOpenNoticeDetail: (notice: NoticeItem) => void;
  onOpenCertModal: () => void;
  lang: 'ko' | 'en';
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenQuote,
  onOpenProductDetail,
  onOpenNoticeDetail,
  onOpenCertModal,
  lang,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full bg-[#0a2540] text-white overflow-hidden -mt-20 pt-28 pb-24">
        {/* Atmospheric Ambient Glows & Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000f22] via-[#0a2540] to-[#071728] opacity-95"></div>
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-[#006ff0]/20 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-[420px] h-[420px] rounded-full bg-[#63f9e8]/15 blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#63f9e8] mb-6 shadow-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#63f9e8] animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Global Industrial &amp; Specialty Gas Standard
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-sm text-[#d8e2ff] font-semibold tracking-wider uppercase block">
                  Since 1974 · 반세기를 이어온 신뢰와 기술력
                </span>
                <h1 className="font-display-hero text-white tracking-tight">
                  가스 설계부터 공급까지<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8e2ff] via-[#63f9e8] to-white">
                    전 공정 토탈 솔루션
                  </span>
                </h1>
              </div>

              <p className="font-body-lg text-[#b0c8eb] max-w-xl leading-relaxed">
                (주)MS가스는 1974년 창립 이래 전국 단위 초저온 유통 인프라와 24/7 실시간 모니터링 시스템을 바탕으로 첨단 반도체·조선·화학 및 친환경 미래 에너지 전환을 선도합니다.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectTab('product-catalog')}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#0057c0] text-white text-sm font-bold hover:bg-[#006ff0] transition-all shadow-lg hover:shadow-[#006ff0]/40 gap-2 group cursor-pointer"
                >
                  제품 포트폴리오 살펴보기
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white/10 backdrop-blur-md text-white text-sm font-bold hover:bg-white/20 transition-colors gap-2 border border-white/10 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#63f9e8]">
                    support_agent
                  </span>
                  가스 엔지니어링 문의
                </button>
              </div>
            </div>

            {/* Hero Visual Media & Floating Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#071728] aspect-[4/3] border border-white/10 group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="High tech cryogenic MS GAS industrial fleet of yellow bulk tankers and specialized gas transport trailers"
                  src={HERO_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f22]/90 via-transparent to-transparent"></div>

                {/* Floating Live Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071728]/85 backdrop-blur-md shadow-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#006ff0]/20 flex items-center justify-center text-[#63f9e8]">
                      <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                    </div>
                    <div>
                      <div className="text-sm text-white font-bold">전국 당일 공급 체계 가동</div>
                      <div className="text-xs text-[#b0c8eb]">실시간 GPS &amp; 초저온 압력 관제</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0057c0] text-white text-[11px] uppercase font-bold tracking-wider animate-pulse">
                    LIVE ON
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <span className="text-xs text-[#63f9e8] uppercase tracking-wider block mb-1 font-bold">
                Company History
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-metric-stat text-white font-black">50+</span>
                <span className="text-xl text-[#b0c8eb] font-bold">년</span>
              </div>
              <p className="text-xs text-[#b0c8eb] mt-1">1974년 설립 반세기 전통</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <span className="text-xs text-[#63f9e8] uppercase tracking-wider block mb-1 font-bold">
                Domestic Hubs
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-metric-stat text-white font-black">17</span>
                <span className="text-xl text-[#b0c8eb] font-bold">개소</span>
              </div>
              <p className="text-xs text-[#b0c8eb] mt-1">8개 광역 권역 직영 영업망</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <span className="text-xs text-[#63f9e8] uppercase tracking-wider block mb-1 font-bold">
                Global Reach
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-metric-stat text-white font-black">10</span>
                <span className="text-xl text-[#b0c8eb] font-bold">개국</span>
              </div>
              <p className="text-xs text-[#b0c8eb] mt-1">글로벌 특수가스 수출입 파트너</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <span className="text-xs text-[#63f9e8] uppercase tracking-wider block mb-1 font-bold">
                Annual Revenue
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-metric-stat text-white font-black">935</span>
                <span className="text-xl text-[#b0c8eb] font-bold">억</span>
              </div>
              <p className="text-xs text-[#b0c8eb] mt-1">2024년 GAAP 기준 탄탄한 재무구조</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS & SOLUTIONS SECTION ===================== */}
      <section className="w-full py-20 bg-[#f8f9ff]" id="products-section">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#0057c0] text-xs uppercase tracking-widest font-bold mb-2">
                <span className="material-symbols-outlined text-[16px]">apps</span>
                Comprehensive Gas Portfolio
              </div>
              <h2 className="font-headline-lg text-[#0b1c30] font-extrabold tracking-tight">
                다양한 산업분야를 아우르는 고부가가치 가스 솔루션
              </h2>
              <p className="text-base text-[#64748b] mt-2 max-w-2xl">
                고순도 산업용 가스부터 정밀 분석 표준가스, 반도체 특수가스까지 대한민국 첨단 산업 현장에 가장 최적화된 혼합비와 안정성을 제공합니다.
              </p>
            </div>
            <button
              onClick={() => onSelectTab('product-catalog')}
              className="flex items-center gap-2 text-sm text-[#0057c0] font-bold hover:underline"
            >
              <span>전체 6개 카테고리</span>
              <div className="w-2 h-2 rounded-full bg-[#0057c0]"></div>
            </button>
          </div>

          {/* 6-Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Industrial Gas */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[0])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="High pressure industrial gas cylinder racks and automated manifold system"
                    src={PRODUCT_IMAGES.industrial}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    01 / INDUSTRIAL
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    산업용 가스
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂) 등 철강, 조선, 석유화학 산업 전반의 고순도 기초 소재 가스
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">순도 99.999%</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">벌크로리 공급</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">실린더 번들</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">규격 사양 및 납품 상담</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 2: Fuel Gas */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[1])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Intense blue and orange clean burning industrial gas burner flame"
                    src={PRODUCT_IMAGES.fuel}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    02 / FUEL ENERGY
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    연료용 가스
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    프로판(C₃H₈), 프라멕스(Pramax), 에탄(C₂H₆), 부탄, 이소부탄 등 고열량 고효율의 친환경 산업 연료 가스
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">고발열량</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">절단/용접 특화</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">저공해 에너지</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">열효율 데이터 시트</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 3: Specialty Gas */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[2])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="High tech semiconductor cleanroom robotic arm handling silicon wafers"
                    src={PRODUCT_IMAGES.specialty}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    03 / SPECIALTY
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    특수 가스
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    반도체, 디스플레이, 정밀 전자 산업의 핵심 공정(에칭, 증착 등)에 필수적인 초고순도 전자급 특수가스
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">UHP 6N~7N급</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">클린룸 충전</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">전자기기 인증</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">특수가스 스펙 조회</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 4: Medical Gas */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[3])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Modern medical surgical operating room with clean surgical equipment"
                    src={PRODUCT_IMAGES.medical}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    04 / MEDICAL
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    의료용 가스
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    종합병원, 병의원에 안정적으로 공급되는 GMP 적합 기준의 고순도 의료용 산소 및 흡입 마취용 가스
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">식약처 GMP 인증</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">24시간 비상공급</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">의료기관 전용</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">의료용 인증서 확인</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 5: Calibration Standard Gas */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[4])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Analytical research laboratory testing equipment gas chromatograph"
                    src={PRODUCT_IMAGES.calibration}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    05 / CALIBRATION
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    표준 가스 (Standard Gas)
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    정밀 환경 분석기기, 가스 측정기, 연구소 교정용으로 배합된 극미량 ppm/ppb 단위의 공인 표준 혼합가스
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">KOLAS 검정 대응</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">다성분 정밀조액</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">성적서 100% 발급</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">정밀 조액 주문 안내</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Card 6: Infrastructure & Equipment */}
            <div
              onClick={() => onOpenProductDetail(GAS_PRODUCTS[5])}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 cursor-pointer border border-[#e5eeff] hover:border-[#0057c0]/30"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Massive white cryogenic liquid storage tanks and pressurized vaporizer manifolds"
                    src={PRODUCT_IMAGES.infrastructure}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    06 / INFRASTRUCTURE
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors">
                    가스 설비 및 초저온 장비
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                    초저온 액체 저장탱크(LGC), 고압 기화기, 초고압 압력조정기 및 산업단지 특화 배관 엔지니어링 구축
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">초저온 탱크 제작</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">KGS 안전검사 대행</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-semibold">설비 유지보수</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <span className="text-xs text-[#0057c0] font-bold">인프라 시공 상담</span>
                <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] group-hover:bg-[#0057c0] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENGINEERING & QUALITY VERIFICATION SECTION ===================== */}
      <section className="w-full py-20 bg-[#eff4ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text intro */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[#0057c0] text-xs uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Engineering Services &amp; Quality
              </div>
              <h2 className="font-headline-lg text-[#0b1c30] font-extrabold tracking-tight">
                전국적인 가스 운송 능력과<br />실시간 무결점 품질 관리
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                MS가스는 단순한 가스 유통을 넘어, 배관 분석, 가스 퍼지(Purge), 정밀 안전진단까지 현장의 무재해와 운영 효율성을 위한 전방위 기술 서비스를 제공합니다.
              </p>

              {/* Interactive Service Pills */}
              <div className="space-y-3 pt-2">
                <div
                  onClick={() => onSelectTab('engineering-services')}
                  className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-shadow border border-[#e5eeff]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0a2540] text-[#63f9e8] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">biotech</span>
                  </div>
                  <div>
                    <h4 className="text-sm text-[#0b1c30] font-bold">가스분석 서비스</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      최첨단 가스크로마토그래피(GC) 설비를 통한 실시간 불순물 측정 및 순도 보증 성적서 발급
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => onSelectTab('engineering-services')}
                  className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-shadow border border-[#e5eeff]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0a2540] text-[#63f9e8] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">air</span>
                  </div>
                  <div>
                    <h4 className="text-sm text-[#0b1c30] font-bold">가스퍼지(Purge) 엔지니어링</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      플랜트 신설, 정기보수(TA) 시 폭발 위험 가스를 불활성 질소로 안전하게 치환 및 배출
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => onSelectTab('engineering-services')}
                  className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-shadow border border-[#e5eeff]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0a2540] text-[#63f9e8] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <div>
                    <h4 className="text-sm text-[#0b1c30] font-bold">수출입 및 글로벌 복합 물류</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      ISO 탱크컨테이너를 활용한 아시아 및 글로벌 권역 초저온 화학 물질 안전 해상 운송
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => onSelectTab('engineering-services')}
                  className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-4 cursor-pointer hover:shadow-md transition-shadow border border-[#e5eeff]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0a2540] text-[#63f9e8] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                  </div>
                  <div>
                    <h4 className="text-sm text-[#0b1c30] font-bold">전문 안전관리 컨설팅</h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      고압가스 안전관리법 규정 준수 인허가 지원 및 법정 검사 지원 시스템
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Card Visual Representation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Lab Photo 1 */}
                <div
                  onClick={() => onSelectTab('production-facilities')}
                  className="rounded-2xl overflow-hidden bg-white shadow-md group cursor-pointer border border-[#e5eeff]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Cryogenic liquid cylinder filling systems"
                      src={LAB_IMAGES.filling}
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#000f22]/80 backdrop-blur text-white text-[10px] font-bold">
                      충전 설비 인프라
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[#0b1c30] font-bold">초저온 충전 시스템</div>
                    <p className="text-xs text-[#64748b] mt-1">대용량 자동화 매니폴드</p>
                  </div>
                </div>

                {/* Lab Photo 2 */}
                <div
                  onClick={() => onSelectTab('engineering-services')}
                  className="rounded-2xl overflow-hidden bg-white shadow-md group cursor-pointer border border-[#e5eeff]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Laboratory gas chromatography analysis instrument"
                      src={LAB_IMAGES.gc}
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#000f22]/80 backdrop-blur text-white text-[10px] font-bold">
                      R&amp;D 센터 분석기
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[#0b1c30] font-bold">정밀 GC 분석기</div>
                    <p className="text-xs text-[#64748b] mt-1">ppb 단위 불순물 사전 검출</p>
                  </div>
                </div>

                {/* Lab Photo 3 */}
                <div
                  onClick={() => onSelectTab('production-facilities')}
                  className="rounded-2xl overflow-hidden bg-white shadow-md group cursor-pointer border border-[#e5eeff]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Industrial control cabinets and automated telemetry panel"
                      src={LAB_IMAGES.telemetry}
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#000f22]/80 backdrop-blur text-white text-[10px] font-bold">
                      실시간 관제 패널
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[#0b1c30] font-bold">원격 원격제어 판넬</div>
                    <p className="text-xs text-[#64748b] mt-1">압력/잔량 자동 감지 및 보충</p>
                  </div>
                </div>
              </div>

              {/* Quality Certification Banner */}
              <div className="p-6 rounded-2xl bg-[#000f22] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#63f9e8] text-[#001210] flex items-center justify-center flex-shrink-0 font-bold">
                    <span className="material-symbols-outlined text-[28px]">military_tech</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      ISO 9001 · 14001 &amp; KGS 안전인증 전 사업장 획득
                    </h4>
                    <p className="text-xs text-[#b0c8eb] mt-0.5">
                      원료 가스 입고부터 최종 수요처 납품까지 전 공정 품질 추적 시스템 운영
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenCertModal}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white text-[#000f22] text-xs font-bold hover:bg-[#d8e2ff] transition-colors flex-shrink-0 cursor-pointer"
                >
                  인증서 사본 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ESG & MS GAS OVERVIEW BENTO SECTION ===================== */}
      <section className="w-full py-20 bg-[#f8f9ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-[#0057c0] text-xs uppercase tracking-widest font-bold mb-2">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
              Corporate Essence
            </div>
            <h2 className="font-headline-lg text-[#0b1c30] font-extrabold tracking-tight">
              MS가스 Overview &amp; 지속가능경영
            </h2>
            <p className="text-base text-[#64748b] mt-2">
              1974년부터 축적된 제조·유통 노하우와 환경(E), 사회(S), 투명 지배구조(G)를 결합하여 내일의 녹색 에너지를 준비합니다.
            </p>
          </div>

          {/* Bento Grid (4 Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tile 1: ESG Management */}
            <div
              onClick={() => onSelectTab('esg-management')}
              className="group relative rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[340px] bg-[#0057c0] text-white cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${BENTO_IMAGES.esg})` }}
              ></div>
              <div className="relative z-10 space-y-2">
                <span className="px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase inline-block">
                  ESG 경영
                </span>
                <h3 className="text-2xl font-bold text-white pt-1">
                  친환경 전환과<br />안전 최우선
                </h3>
              </div>
              <div className="relative z-10 space-y-3">
                <p className="text-xs text-[#d8e2ff] leading-relaxed">
                  탄소중립 유공 국무총리/도지사 표창 수훈. 암모니아 TTS 벙커링 및 수소 에너지 인프라 연구 주도
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white font-bold group-hover:translate-x-1 transition-transform">
                  <span>자세히 보기</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Tile 2: History (1974~) */}
            <div
              onClick={() => onSelectTab('company-overview')}
              className="group relative rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[340px] bg-[#000f22] text-white cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${BENTO_IMAGES.history})` }}
              ></div>
              <div className="relative z-10 space-y-2">
                <span className="px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase inline-block">
                  History
                </span>
                <h3 className="text-2xl font-bold text-white pt-1">
                  1974년 설립<br />반세기 역사
                </h3>
              </div>
              <div className="relative z-10 space-y-3">
                <p className="text-xs text-[#b0c8eb] leading-relaxed">
                  부산 본사에서 출발하여 전국 17개소 영업망과 해외 네트워크를 갖춘 글로벌 가스 전문기업으로의 도약
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#63f9e8] font-bold group-hover:translate-x-1 transition-transform">
                  <span>연혁 살펴보기</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Tile 3: Safety & MSDS */}
            <div
              onClick={() => onSelectTab('msds-archive')}
              className="group relative rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[340px] bg-[#edf2f7] text-[#0b1c30] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${BENTO_IMAGES.msds})` }}
              ></div>
              <div className="relative z-10 space-y-2">
                <span className="px-2.5 py-1 rounded bg-[#000f22] text-white text-[11px] font-bold uppercase inline-block">
                  Services &amp; Safety
                </span>
                <h3 className="text-2xl font-bold text-[#0b1c30] pt-1">
                  전 제품 MSDS<br />실시간 아카이브
                </h3>
              </div>
              <div className="relative z-10 space-y-3">
                <p className="text-xs text-[#64748b] leading-relaxed">
                  가스 취급 안전 매뉴얼, 화학물질 물질안전보건자료 원문 및 비상대응 가이드를 원클릭으로 다운로드
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#0057c0] font-bold group-hover:translate-x-1 transition-transform">
                  <span>MSDS 검색 바로가기</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Tile 4: Nationwide Logistics */}
            <div
              onClick={() => onSelectTab('production-facilities')}
              className="group relative rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[340px] bg-[#071728] text-white cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${BENTO_IMAGES.network})` }}
              ></div>
              <div className="relative z-10 space-y-2">
                <span className="px-2.5 py-1 rounded bg-[#006ff0] text-white text-[11px] font-bold uppercase inline-block">
                  Networks
                </span>
                <h3 className="text-2xl font-bold text-white pt-1">
                  전국 고속<br />운송 네트워크
                </h3>
              </div>
              <div className="relative z-10 space-y-3">
                <p className="text-xs text-[#b0c8eb] leading-relaxed">
                  화성, 서산, 군산, 울산, 여수, 부산 등 주요 산업 허브에 위치한 직영 플랜트로 중단 없는 안정 공급
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#d8e2ff] font-bold group-hover:translate-x-1 transition-transform">
                  <span>네트워크 지도 보기</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NOTICE & PRESS SECTION ===================== */}
      <section className="w-full py-20 bg-[#eff4ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#0057c0] text-xs uppercase tracking-widest font-bold mb-2">
                <span className="material-symbols-outlined text-[16px]">campaign</span>
                Notice &amp; Industry Updates
              </div>
              <h2 className="font-headline-lg text-[#0b1c30] font-extrabold tracking-tight">
                MS가스의 새로운 소식을 전달드립니다
              </h2>
              <p className="text-base text-[#64748b] mt-2">
                규제자유특구 실증 사업, 공공 안전진단 입찰 및 대표 수상 소식을 투명하게 공시합니다.
              </p>
            </div>
            <button
              onClick={() => onSelectTab('customer-support')}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white text-[#000f22] text-xs font-bold hover:bg-[#edf2f7] transition-colors gap-1 shadow-sm"
            >
              공지사항 전체보기
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Notice List Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {NOTICES.slice(0, 3).map((notice) => (
              <div
                key={notice.id}
                onClick={() => onOpenNoticeDetail(notice)}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer border border-[#e5eeff]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-bold ${
                        notice.badgeType === 'news'
                          ? 'bg-[#63f9e8] text-[#001210]'
                          : 'bg-[#d8e2ff] text-[#001a43]'
                      }`}
                    >
                      {notice.badge}
                    </span>
                    <span className="text-xs text-[#64748b] font-medium">{notice.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0b1c30] line-clamp-2 leading-snug">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-[#64748b] line-clamp-3 leading-relaxed">
                    {notice.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between text-[#0057c0] text-xs font-bold">
                  <span>{notice.externalLink ? '입찰 요강 확인' : '보도자료 상세'}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {notice.externalLink ? 'open_in_new' : 'arrow_forward'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUICK ACCESS & INQUIRY ACTION BANNER ===================== */}
      <section className="w-full py-20 bg-[#071728] text-white relative overflow-hidden" id="inquiry-section">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#071728] to-[#000f22] opacity-90"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#006ff0]/20 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs text-[#63f9e8] uppercase tracking-widest font-bold">
              Fast Customer Support
            </span>
            <h2 className="font-headline-lg text-white font-extrabold tracking-tight mt-1">
              신속하고 편리한 온라인 고객지원
            </h2>
            <p className="text-base text-[#b0c8eb] mt-2">
              가스 견적 문의부터 물질안전보건자료(MSDS) 열람, 전국 17개소 공급 센터 위치까지 원클릭으로 연결됩니다.
            </p>
          </div>

          {/* 4 Quick Access Interactive Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quick Tile 1 */}
            <div
              onClick={() => onSelectTab('company-overview')}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#006ff0]/20 flex items-center justify-center text-[#63f9e8] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">apartment</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">회사소개</h4>
                <p className="text-xs text-[#b0c8eb]">MS가스의 비전, 경영이념 및 50년의 발자취를 소개합니다.</p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1 text-[#63f9e8] text-xs font-bold">
                <span>알아보기</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Quick Tile 2 */}
            <div
              onClick={() => onOpenQuote()}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#006ff0]/20 flex items-center justify-center text-[#63f9e8] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">rate_review</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">온라인 견적 문의</h4>
                <p className="text-xs text-[#b0c8eb]">가스 규격, 필요 유량, 납기 일정을 입력하시면 신속 상담을 드립니다.</p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1 text-[#63f9e8] text-xs font-bold">
                <span>문의 작성</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Quick Tile 3 */}
            <div
              onClick={() => onSelectTab('msds-archive')}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#006ff0]/20 flex items-center justify-center text-[#63f9e8] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">description</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">MSDS 자료실</h4>
                <p className="text-xs text-[#b0c8eb]">전 제품의 물질안전보건자료를 품목명 검색으로 즉시 다운로드합니다.</p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1 text-[#63f9e8] text-xs font-bold">
                <span>자료 검색</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Quick Tile 4 */}
            <div
              onClick={() => onSelectTab('directions')}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between cursor-pointer border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#006ff0]/20 flex items-center justify-center text-[#63f9e8] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">pin_drop</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">오시는 길</h4>
                <p className="text-xs text-[#b0c8eb]">부산 본사, 화성·서산 플랜트 등 전국 사업소 상세 위치를 안내합니다.</p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1 text-[#63f9e8] text-xs font-bold">
                <span>위치 안내</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
