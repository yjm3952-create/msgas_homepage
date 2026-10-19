import React, { useState } from 'react';
import { GAS_PRODUCTS } from '../../data/companyData';
import { GasCategory, GasProduct } from '../../types';

interface ProductCatalogScreenProps {
  onOpenProductDetail: (product: GasProduct) => void;
  onOpenQuote: (defaultGas?: string) => void;
  lang: 'ko' | 'en';
}

export const ProductCatalogScreen: React.FC<ProductCatalogScreenProps> = ({
  onOpenProductDetail,
  onOpenQuote,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GasCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: '전체 보기 (All)' },
    { key: 'industrial', label: '산업용 가스 (Industrial)' },
    { key: 'fuel', label: '연료용 가스 (Fuel)' },
    { key: 'specialty', label: '반도체·전자 특수 (Specialty)' },
    { key: 'medical', label: '의료용 가스 (Medical)' },
    { key: 'calibration', label: '표준가스 (Standard)' },
    { key: 'infrastructure', label: '설비 및 초저온장비 (Plant)' },
  ];

  const filteredProducts = GAS_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="rounded-3xl bg-[#000f22] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider block">
              Comprehensive Gas Portfolio &amp; Engineering
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              첨단 산업을 선도하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8e2ff] via-[#63f9e8] to-white">
                고순도 가스 전 제품 라인업
              </span>
            </h1>
            <p className="text-sm text-[#b0c8eb] leading-relaxed">
              기초 산업용 가스(산소·질소·아르곤·탄산)부터 7N급 초미세 반도체 특수가스, KGMP 인증 의료용 의약품 가스 및 맞춤형 정밀 조액 표준가스까지 최고 품질로 공급합니다.
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#64748b] text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="가스명, 화학식(O₂, N₂, NF₃), 용도 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#c4c6ce] rounded-xl text-xs sm:text-sm focus:border-[#0070f3] outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#64748b] hover:text-[#000f22]"
                >
                  초기화
                </button>
              )}
            </div>

            <div className="text-xs text-[#64748b] font-medium self-end sm:self-center">
              총 <span className="font-bold text-[#0057c0]">{filteredProducts.length}</span>개 품목 표시
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key as GasCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#0057c0] text-white shadow-sm'
                    : 'bg-[#edf2f7] text-[#43474d] hover:bg-[#d8e2ff] hover:text-[#000f22]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 border border-[#e5eeff] hover:border-[#0057c0]/40"
            >
              <div className="space-y-4">
                <div
                  onClick={() => onOpenProductDetail(product)}
                  className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e5eeff] cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.name}
                    src={product.imageUrl}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a2540]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    {product.code}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-[#000f22]/70 backdrop-blur-md text-[#63f9e8] text-xs font-mono font-bold">
                    {product.chemicalFormula}
                  </div>
                </div>

                <div>
                  <h3
                    onClick={() => onOpenProductDetail(product)}
                    className="text-xl font-bold text-[#0b1c30] group-hover:text-[#0057c0] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#0057c0] text-xs font-bold">
                    {product.purity}
                  </span>
                  {product.deliveryMethods.slice(0, 2).map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#43474d] text-xs font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenProductDetail(product)}
                  className="text-xs text-[#0057c0] font-bold hover:underline flex items-center gap-1"
                >
                  <span>기술스펙 상세</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_full</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuote(product.name)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#000f22] hover:bg-[#0057c0] text-white text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <span>견적 요청</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Gas Blend Consultation Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a2540] to-[#0057c0] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">
              Specialized Gas Mixture &amp; Custom Blend
            </span>
            <h3 className="text-2xl font-bold">원하시는 가스 혼합비나 특수 규격이 필요하신가요?</h3>
            <p className="text-xs text-[#d8e2ff] max-w-xl">
              (주)MS가스 기술연구소는 국가공인 중량법 표준제조 시스템으로 1 ppm 단위의 극미량 다성분 혼합 가스 조액 및 맞춤형 특수가스 정제를 지원합니다.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('맞춤형 정밀 혼합가스 (Custom Blend)')}
            className="px-6 py-3 rounded-xl bg-white text-[#000f22] font-bold text-xs hover:bg-[#d8e2ff] transition-colors whitespace-nowrap shadow-md"
          >
            특수 조액 상담 신청
          </button>
        </div>
      </div>
    </div>
  );
};
