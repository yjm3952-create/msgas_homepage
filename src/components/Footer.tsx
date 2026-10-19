import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenCertModal: () => void;
  lang: 'ko' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenCertModal, lang }) => {
  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#071728] text-[#eaf1ff] pt-16 pb-12 border-t border-[#0a2540]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#0a2540] flex items-center justify-center text-[#d8e2ff]">
                <span className="material-symbols-outlined text-[22px]">cyclone</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white tracking-tight">MS GAS</span>
                <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">(주)MS가스</span>
              </div>
            </div>
            <p className="text-sm text-[#b0c8eb] max-w-md leading-relaxed">
              {lang === 'ko'
                ? '고순도 특수가스, 산업용 에너지 및 정밀 엔지니어링 토탈 인프라를 구축하여 반도체, 조선, 화학 등 핵심 산업의 안전성과 생산성을 이끕니다.'
                : 'Pioneering ultra-high-purity specialty gas, industrial energy, and cryogenic engineering infrastructure for semiconductors, shipbuilding, and green energy.'}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={onOpenCertModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a2540] hover:bg-[#0057c0] text-[#63f9e8] text-xs font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">verified</span>
                ISO 9001 / 14001
              </button>
              <button
                type="button"
                onClick={onOpenCertModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a2540] hover:bg-[#0057c0] text-[#63f9e8] text-xs font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">security</span>
                KGS 공인안전
              </button>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ko' ? '솔루션 탐색' : 'Solutions'}
            </h4>
            <ul className="space-y-2 text-sm text-[#b0c8eb]">
              <li>
                <button
                  onClick={() => handleTabClick('product-catalog')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '특수가스 & 혼합가스' : 'Specialty & Mixed Gases'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('product-catalog')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '의료용 & 초고순도 가스' : 'Medical & UHP Gases'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('engineering-services')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '초저온 배관 엔지니어링' : 'Cryogenic Engineering'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('production-facilities')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '전국 17개 공급 네트워크' : '17 Logistics Hubs'}
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ko' ? '고객지원 & 자료실' : 'Support & Archive'}
            </h4>
            <ul className="space-y-2 text-sm text-[#b0c8eb]">
              <li>
                <button
                  onClick={() => handleTabClick('msds-archive')}
                  className="hover:text-[#63f9e8] transition-colors text-left flex items-center gap-1"
                >
                  {lang === 'ko' ? 'MSDS 물질안전보건자료' : 'MSDS Data Sheets'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('directions')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '오시는 길 (본사/공장)' : 'Directions / Map'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('customer-support')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '온라인 견적 및 기술 문의' : 'Online RFQ Quote'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCertModal}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '품질인증서 조회' : 'Certificates'}
                </button>
              </li>
            </ul>
          </div>

          {/* Sustainability & Talent */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ko' ? '지속가능 & 인재' : 'ESG & Careers'}
            </h4>
            <ul className="space-y-2 text-sm text-[#b0c8eb]">
              <li>
                <button
                  onClick={() => handleTabClick('esg-management')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? 'ESG 경영 방침' : 'ESG Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('esg-management')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '윤리경영 & 제보센터' : 'Ethics & Compliance'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('company-overview')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? '인재채용 공고' : 'Careers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('company-overview')}
                  className="hover:text-[#63f9e8] transition-colors text-left"
                >
                  {lang === 'ko' ? 'CEO 인사말 & 연혁' : 'CEO Greeting & History'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate Legal Info */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#768dad]">
          <div className="space-y-1 leading-relaxed">
            <p className="text-white font-semibold text-sm">(주)MS가스 (MS GAS Co., Ltd.)</p>
            <p>
              대표이사: 전원태 · 전청민 &nbsp;|&nbsp; 사업자등록번호: 605-81-12490 &nbsp;|&nbsp; 본사: 부산광역시 사상구 학감대로 161 (감전동)
            </p>
            <p>기술연구소 및 주요 물류센터: 경기 화성 / 충남 서산 / 울산 / 여수 / 군산 거점 플랜트</p>
            <p className="text-[#64748b] pt-1">Copyright © 2025 (주)MS가스 MS GAS Co., Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => alert('개인정보처리방침 규정을 준수합니다.')} className="hover:text-white transition-colors">
              {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <span className="text-[#314865]">|</span>
            <button onClick={() => alert('이용약관 규정을 준수합니다.')} className="hover:text-white transition-colors">
              {lang === 'ko' ? '이용약관' : 'Terms of Service'}
            </button>
            <span className="text-[#314865]">|</span>
            <button onClick={() => handleTabClick('esg-management')} className="hover:text-white transition-colors">
              {lang === 'ko' ? '안전보건방침' : 'Safety Policy'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
