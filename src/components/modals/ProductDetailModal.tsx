import React from 'react';
import { GasProduct } from '../../types';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  onRequestQuote: (gasName: string) => void;
  onViewMsds: (msdsId?: string) => void;
  lang: 'ko' | 'en';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
  onViewMsds,
  lang,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[90vh] flex flex-col">
        {/* Header with Hero Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-[#071728] overflow-hidden flex-shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/60 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded bg-[#0057c0] text-white text-[11px] font-bold uppercase tracking-wider">
              {product.code}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5 flex items-baseline gap-2">
              <span>{product.name}</span>
              <span className="text-sm font-mono text-[#63f9e8]">{product.chemicalFormula}</span>
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-[#43474d] leading-relaxed">
            {product.description}
          </p>

          {/* Key Specs Card */}
          <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] space-y-3">
            <h4 className="text-xs font-bold text-[#0057c0] uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              기술 사양 및 보증 기준 (Technical Specifications)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-[#e5eeff]">
                <span className="text-[#64748b] block font-medium">보증 순도 (Purity)</span>
                <span className="font-bold text-[#000f22] text-sm">{product.purity}</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#e5eeff]">
                <span className="text-[#64748b] block font-medium">등급 규격 (Grade)</span>
                <span className="font-bold text-[#000f22] text-sm">{product.grade}</span>
              </div>
              {product.specs.cylinderPressure && (
                <div className="p-2.5 bg-white rounded-lg border border-[#e5eeff]">
                  <span className="text-[#64748b] block font-medium">충전 압력 (Pressure)</span>
                  <span className="font-bold text-[#000f22]">{product.specs.cylinderPressure}</span>
                </div>
              )}
              {product.specs.boilingPoint && (
                <div className="p-2.5 bg-white rounded-lg border border-[#e5eeff]">
                  <span className="text-[#64748b] block font-medium">비점 / 끓는점 (Boiling Point)</span>
                  <span className="font-bold text-[#000f22]">{product.specs.boilingPoint}</span>
                </div>
              )}
              {product.specs.impurities && (
                <div className="p-2.5 bg-white rounded-lg border border-[#e5eeff] sm:col-span-2">
                  <span className="text-[#64748b] block font-medium">불순물 제한 기준 (Impurities Spec)</span>
                  <span className="font-medium text-[#0057c0] font-mono">{product.specs.impurities}</span>
                </div>
              )}
            </div>
          </div>

          {/* Delivery & Packaging */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#000f22] uppercase tracking-wider">
              공급 형태 및 용기 사양
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.deliveryMethods.map((method, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#edf2f7] text-[#0b1c30] text-xs font-semibold flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#0057c0]">check_circle</span>
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#000f22] uppercase tracking-wider">
              주요 적용 산업 및 공정
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#43474d]">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#f8f9ff] border border-[#e5eeff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0057c0]"></span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hazard & Precautions */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-600 flex-shrink-0">warning</span>
            <div>
              <span className="font-bold block">안전 관리 및 취급 유의:</span>
              <span>{product.hazards.join(' · ')}</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-[#f8f9ff] p-4 border-t border-[#e5eeff] flex items-center justify-between">
          <div>
            <button
              onClick={() => {
                onClose();
                onViewMsds(product.msdsId);
              }}
              className="text-xs text-[#0057c0] font-bold hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">description</span>
              <span>MSDS 물질안전보건자료 보기</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#c4c6ce] text-[#43474d] text-xs font-semibold hover:bg-[#edf2f7]"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="px-5 py-2 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>납품 및 규격 견적 상담</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
