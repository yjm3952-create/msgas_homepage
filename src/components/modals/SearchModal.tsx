import React, { useState } from 'react';
import { GAS_PRODUCTS, MSDS_DOCS, NOTICES, NATIONWIDE_HUBS } from '../../data/companyData';
import { GasProduct, MsdsDocument, NoticeItem } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: GasProduct) => void;
  onSelectMsds: (msds: MsdsDocument) => void;
  onSelectNotice: (notice: NoticeItem) => void;
  lang: 'ko' | 'en';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectMsds,
  onSelectNotice,
  lang,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  const filteredProducts = cleanQ
    ? GAS_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQ) ||
          p.chemicalFormula.toLowerCase().includes(cleanQ) ||
          p.subtitle.toLowerCase().includes(cleanQ) ||
          p.categoryLabel.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredMsds = cleanQ
    ? MSDS_DOCS.filter(
        (m) =>
          m.productName.toLowerCase().includes(cleanQ) ||
          m.formula.toLowerCase().includes(cleanQ) ||
          m.casNo.toLowerCase().includes(cleanQ) ||
          m.unNumber.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredNotices = cleanQ
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(cleanQ) ||
          n.summary.toLowerCase().includes(cleanQ) ||
          n.badge.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredHubs = cleanQ
    ? NATIONWIDE_HUBS.filter(
        (h) =>
          h.name.toLowerCase().includes(cleanQ) ||
          h.address.toLowerCase().includes(cleanQ) ||
          h.region.toLowerCase().includes(cleanQ)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[80vh] flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 bg-[#f8f9ff] border-b border-[#e5eeff] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#0057c0] text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            placeholder={
              lang === 'ko'
                ? '가스 품목명(산소, 질소, NF3), CAS번호, 거점 플랜트, 입찰 공고 검색...'
                : 'Search gas products, CAS No., hubs, tenders...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#000f22] placeholder-[#64748b] font-medium outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#64748b] hover:text-[#000f22] px-2 py-1 rounded bg-[#e5eeff]"
            >
              지우기
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] hover:bg-[#edf2f7]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search Results */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!query ? (
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block">
                추천 검색어
              </span>
              <div className="flex flex-wrap gap-2">
                {['초고순도 질소', '산업용 산소', '삼불화질소 NF3', '모노실란 SiH4', '암모니아 벙커링', '화성 플랜트', 'MSDS 다운로드'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-[#eff4ff] text-xs font-semibold text-[#0057c0] hover:bg-[#d8e2ff] transition-colors"
                  >
                    #{term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.length === 0 &&
                filteredMsds.length === 0 &&
                filteredNotices.length === 0 &&
                filteredHubs.length === 0 && (
                  <div className="text-center py-8 text-[#64748b] text-sm">
                    <span className="material-symbols-outlined text-[40px] text-gray-300 block mb-2">
                      search_off
                    </span>
                    '{query}'에 대한 검색 결과가 없습니다.
                  </div>
                )}

              {/* Products match */}
              {filteredProducts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider block">
                    가스 제품 ({filteredProducts.length})
                  </span>
                  <div className="divide-y divide-[#e5eeff] border border-[#e5eeff] rounded-xl overflow-hidden">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="w-full text-left p-3 hover:bg-[#eff4ff] transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#000f22]">{p.name}</div>
                          <div className="text-xs text-[#64748b] font-mono">{p.chemicalFormula} · {p.purity}</div>
                        </div>
                        <span className="material-symbols-outlined text-[#0057c0] text-[18px]">arrow_forward</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MSDS match */}
              {filteredMsds.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider block">
                    MSDS 안전자료 ({filteredMsds.length})
                  </span>
                  <div className="divide-y divide-[#e5eeff] border border-[#e5eeff] rounded-xl overflow-hidden">
                    {filteredMsds.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectMsds(m);
                          onClose();
                        }}
                        className="w-full text-left p-3 hover:bg-[#eff4ff] transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#000f22]">{m.productName}</div>
                          <div className="text-xs text-[#64748b]">CAS: {m.casNo} · UN: {m.unNumber}</div>
                        </div>
                        <span className="material-symbols-outlined text-[#0057c0] text-[18px]">file_open</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notices match */}
              {filteredNotices.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider block">
                    공지 및 입찰 ({filteredNotices.length})
                  </span>
                  <div className="divide-y divide-[#e5eeff] border border-[#e5eeff] rounded-xl overflow-hidden">
                    {filteredNotices.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onSelectNotice(n);
                          onClose();
                        }}
                        className="w-full text-left p-3 hover:bg-[#eff4ff] transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs text-[#0057c0] font-bold">{n.badge} · {n.date}</div>
                          <div className="text-sm font-medium text-[#000f22] line-clamp-1">{n.title}</div>
                        </div>
                        <span className="material-symbols-outlined text-[#0057c0] text-[18px]">arrow_forward</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hubs match */}
              {filteredHubs.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0057c0] uppercase tracking-wider block">
                    전국 사업소 및 플랜트 ({filteredHubs.length})
                  </span>
                  <div className="divide-y divide-[#e5eeff] border border-[#e5eeff] rounded-xl overflow-hidden">
                    {filteredHubs.map((h) => (
                      <div key={h.id} className="p-3 bg-white">
                        <div className="text-sm font-bold text-[#000f22]">{h.name}</div>
                        <div className="text-xs text-[#64748b]">{h.address} · Tel: {h.phone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
