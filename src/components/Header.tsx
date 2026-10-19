import React, { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  lang: 'ko' | 'en';
  onToggleLang: (lang: 'ko' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenQuote,
  onOpenSearch,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'company-overview', label: lang === 'ko' ? '회사소개' : 'About Us' },
    { key: 'product-catalog', label: lang === 'ko' ? '제품소개' : 'Products' },
    { key: 'engineering-services', label: lang === 'ko' ? '서비스' : 'Services' },
    { key: 'production-facilities', label: lang === 'ko' ? '생산설비' : 'Facilities & Network' },
    { key: 'esg-management', label: lang === 'ko' ? 'ESG 경영' : 'ESG' },
    { key: 'customer-support', label: lang === 'ko' ? '고객지원' : 'Support & MSDS' },
  ];

  const handleNavClick = (tabKey: string) => {
    onSelectTab(tabKey as TabType);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(10,37,64,0.06)] border-b border-[#e5eeff]/70 transition-all">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group transition-transform focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0a2540] flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-[#006ff0] transition-colors">
              <span className="material-symbols-outlined text-[#d8e2ff] text-[24px]">cyclone</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold text-[#000f22] tracking-tight">MS GAS</span>
                <span className="text-[11px] font-bold text-[#0057c0] uppercase tracking-wider">(주)MS가스</span>
              </div>
              <span className="hidden lg:block text-[11px] text-[#43474d] font-medium tracking-tight">
                {lang === 'ko' ? '전 공정을 아우르는 가스 토탈 솔루션' : 'Total Industrial Gas Solutions'}
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#edf2f7] text-[#000f22] shadow-sm font-bold'
                    : 'text-[#43474d] hover:bg-[#edf2f7]/80 hover:text-[#0b1c30]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#43474d] hover:bg-[#edf2f7] hover:text-[#0b1c30] transition-colors"
            title={lang === 'ko' ? '통합 검색' : 'Search'}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-[#e5eeff] rounded-lg p-1 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => onToggleLang('ko')}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === 'ko' ? 'bg-white text-[#000f22] shadow-sm' : 'text-[#43474d] hover:text-[#0b1c30]'
              }`}
            >
              KOR
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === 'en' ? 'bg-white text-[#000f22] shadow-sm' : 'text-[#43474d] hover:text-[#0b1c30]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Inquiry / RFQ CTA */}
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-[#000f22] text-white text-sm font-semibold hover:bg-[#0057c0] transition-colors shadow-sm gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>{lang === 'ko' ? '문의하기' : 'Inquiry'}</span>
          </button>

          {/* User Portal Icon */}
          <button
            type="button"
            onClick={() => handleNavClick('customer-support')}
            className="w-8 h-8 rounded-full bg-[#000f22] flex items-center justify-center text-white hover:bg-[#0057c0] transition-colors"
            title={lang === 'ko' ? '고객 포털' : 'Customer Portal'}
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#43474d] hover:bg-[#edf2f7]"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#e5eeff] px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
                currentTab === item.key ? 'bg-[#0a2540] text-white' : 'text-[#43474d] hover:bg-[#edf2f7]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#e5eeff] flex items-center justify-between">
            <span className="text-xs text-[#64748b]">{lang === 'ko' ? '언어 선택' : 'Select Language'}</span>
            <div className="flex gap-2">
              <button
                onClick={() => onToggleLang('ko')}
                className={`px-3 py-1 rounded text-xs font-bold ${lang === 'ko' ? 'bg-[#0057c0] text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                한국어
              </button>
              <button
                onClick={() => onToggleLang('en')}
                className={`px-3 py-1 rounded text-xs font-bold ${lang === 'en' ? 'bg-[#0057c0] text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
