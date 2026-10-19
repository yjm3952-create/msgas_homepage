import React, { useState } from 'react';
import { MSDS_DOCS, NOTICES, NATIONWIDE_HUBS } from '../../data/companyData';
import { MsdsDocument, NoticeItem } from '../../types';

interface CustomerSupportScreenProps {
  onSelectMsds: (doc: MsdsDocument) => void;
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenQuote: () => void;
  lang: 'ko' | 'en';
}

export const CustomerSupportScreen: React.FC<CustomerSupportScreenProps> = ({
  onSelectMsds,
  onSelectNotice,
  onOpenQuote,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'msds' | 'notices' | 'faq' | 'directions'>('msds');
  const [msdsSearch, setMsdsSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const filteredMsds = MSDS_DOCS.filter(
    (doc) =>
      doc.productName.toLowerCase().includes(msdsSearch.toLowerCase()) ||
      doc.formula.toLowerCase().includes(msdsSearch.toLowerCase()) ||
      doc.casNo.includes(msdsSearch) ||
      doc.category.toLowerCase().includes(msdsSearch.toLowerCase())
  );

  const faqs = [
    {
      q: '가스 주문 후 배송까지 소요되는 시간은 어떻게 되나요?',
      a: 'MS가스는 전국 17개소 직영 플랜트와 자체 벌크로리/배송 차량을 운영하여 정기 계약처의 경우 발주일 기준 익일 직배송을 원칙으로 하며, 긴급 요청 시 전국 당일 4시간 이내 비상 급송 체계를 지원합니다.'
    },
    {
      q: 'MSDS(물질안전보건자료) 및 가스 성적서는 어디서 발급받나요?',
      a: '본 페이지의 MSDS 자료실에서 전 품목 국문/영문 표준 물질안전보건자료를 PDF로 즉시 무료 다운로드하실 수 있으며, 로트별 정밀 분석 성적서는 출하 시 전자문서 및 현장 지류로 100% 동봉 교부됩니다.'
    },
    {
      q: '실린더 용기 재검사 및 안전점검 주기는 어떻게 관리되나요?',
      a: '고압가스 안전관리법에 따라 10년 미만 용기는 5년마다, 10년 이상 용기는 3년마다 전문 공인 검사기관에서 내압 및 기밀 검사를 전수 필하고 있으며, 스마트 바코드 태그를 부착하여 이력을 투명하게 관리합니다.'
    },
    {
      q: '신축 공장 초저온 저장탱크(LGC) 설치 및 배관 턴키 시공도 가능한가요?',
      a: '네, 가능합니다. (주)MS가스 기술설비팀에서 부지 선정, KGS 기술검토서 작성, 저장탱크 제작 및 설치, 고압 기화기 연계, 배관 시공, 완성검사 수검까지 원스톱 턴키로 수행합니다.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9ff] py-12 space-y-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="rounded-3xl bg-[#000f22] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider block">
              24/7 Rapid Customer Care &amp; Technical Archive
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              고객지원 및 자료실
            </h1>
            <p className="text-sm text-[#b0c8eb] leading-relaxed">
              MSDS 물질안전보건자료 원문 다운로드부터 입찰 공고, 사업소 위치 안내, 1:1 온라인 견적 상담까지 신속하고 안전하게 지원합니다.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#e5eeff] gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('msds')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'msds'
                ? 'bg-[#0057c0] text-white shadow-sm'
                : 'bg-white text-[#43474d] hover:bg-[#eff4ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">description</span>
            <span>MSDS 자료실</span>
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'notices'
                ? 'bg-[#0057c0] text-white shadow-sm'
                : 'bg-white text-[#43474d] hover:bg-[#eff4ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">campaign</span>
            <span>공지사항 &amp; 입찰공고</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#0057c0] text-white shadow-sm'
                : 'bg-white text-[#43474d] hover:bg-[#eff4ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">help</span>
            <span>자주 묻는 질문 (FAQ)</span>
          </button>

          <button
            onClick={() => setActiveTab('directions')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'directions'
                ? 'bg-[#0057c0] text-white shadow-sm'
                : 'bg-white text-[#43474d] hover:bg-[#eff4ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">pin_drop</span>
            <span>오시는 길 (전국 사업소)</span>
          </button>
        </div>

        {/* TAB 1: MSDS ARCHIVE */}
        {activeTab === 'msds' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#64748b] text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="품목명(산소, 질소, 암모니아), CAS 번호, 화학식 검색..."
                  value={msdsSearch}
                  onChange={(e) => setMsdsSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[#c4c6ce] rounded-xl text-xs sm:text-sm focus:border-[#0070f3] outline-none"
                />
              </div>
              <span className="text-xs text-[#64748b] self-end sm:self-center">
                산업안전보건법 제110조 및 GHS 분류 기준 준수
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5eeff] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f8f9ff] text-[#43474d] border-b border-[#e5eeff] font-bold">
                    <tr>
                      <th className="p-4">가스 제품명</th>
                      <th className="p-4">화학식</th>
                      <th className="p-4">CAS No.</th>
                      <th className="p-4">UN 번호</th>
                      <th className="p-4">최종 개정일</th>
                      <th className="p-4 text-right">MSDS 열람 &amp; 다운로드</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5eeff]">
                    {filteredMsds.map((doc) => (
                      <tr key={doc.id} className="hover:bg-[#eff4ff]/60 transition-colors">
                        <td className="p-4 font-bold text-[#000f22]">
                          <div>{doc.productName}</div>
                          <span className="text-[11px] text-[#64748b] font-normal">{doc.category}</span>
                        </td>
                        <td className="p-4 font-mono font-bold text-[#0057c0]">{doc.formula}</td>
                        <td className="p-4 font-mono text-[#43474d]">{doc.casNo}</td>
                        <td className="p-4 font-mono text-[#43474d]">{doc.unNumber}</td>
                        <td className="p-4 text-[#64748b]">{doc.updatedAt}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => onSelectMsds(doc)}
                            className="px-3 py-1.5 rounded-lg bg-[#0057c0] text-white font-bold hover:bg-[#000f22] transition-colors inline-flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[15px]">file_open</span>
                            <span>상세 열람</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NOTICES & TENDERS */}
        {activeTab === 'notices' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-[#e5eeff] shadow-sm divide-y divide-[#e5eeff] overflow-hidden">
              {NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onSelectNotice(notice)}
                  className="p-6 hover:bg-[#eff4ff]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#d8e2ff] text-[#001a43]">
                        {notice.badge}
                      </span>
                      <span className="text-xs text-[#64748b]">{notice.date}</span>
                      {notice.deadline && (
                        <span className="text-[11px] text-[#ba1a1a] font-semibold">
                          [마감: {notice.deadline}]
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#000f22] hover:text-[#0057c0] transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#0057c0] text-xs font-bold whitespace-nowrap self-end sm:self-center">
                    <span>열람하기</span>
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FAQ */}
        {activeTab === 'faq' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#e5eeff] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#f8f9ff] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#eff4ff] text-[#0057c0] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        Q
                      </span>
                      <span className="text-sm font-bold text-[#000f22]">{faq.q}</span>
                    </div>
                    <span className="material-symbols-outlined text-[#64748b]">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43474d] leading-relaxed border-t border-[#f8f9ff] bg-[#f8f9ff]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 4: DIRECTIONS & CONTACT */}
        {activeTab === 'directions' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NATIONWIDE_HUBS.slice(0, 3).map((hub) => (
                <div key={hub.id} className="bg-white p-6 rounded-2xl border border-[#e5eeff] shadow-sm space-y-4">
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded bg-[#eff4ff] text-[#0057c0] text-[10px] font-bold uppercase">
                      {hub.region}
                    </span>
                    <h4 className="text-base font-bold text-[#000f22]">{hub.name}</h4>
                  </div>
                  <div className="text-xs text-[#43474d] space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#0057c0] flex-shrink-0">pin_drop</span>
                      <span>{hub.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#0057c0] flex-shrink-0">call</span>
                      <span className="font-bold text-[#0057c0]">{hub.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#0057c0] flex-shrink-0">inventory_2</span>
                      <span>{hub.tankCapacity}</span>
                    </div>
                  </div>
                  <a
                    href={`https://map.naver.com/v5/search/${encodeURIComponent(hub.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-lg bg-[#edf2f7] hover:bg-[#0057c0] hover:text-white text-[#0057c0] text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>지도 앱에서 위치 찾기</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 24/7 Hotline & Emergency Banner */}
        <div className="p-8 rounded-3xl bg-[#0a2540] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">
              24-Hour Emergency Safety Hotline
            </span>
            <h3 className="text-2xl font-bold">가스 공급 비상 지원 및 안전 상황실</h3>
            <p className="text-xs text-[#b0c8eb] max-w-xl">
              갑작스러운 가스 압력 저하, 비상 충전 요청, 누출 의심 신고 등 365일 24시간 안전 관제 엔지니어가 비상 대기하고 있습니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:051-317-0021"
              className="px-6 py-3 rounded-xl bg-[#ba1a1a] hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow-md transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">emergency</span>
              <span>긴급 비상 핫라인: 051-317-0021</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-white text-[#000f22] hover:bg-[#d8e2ff] font-bold text-xs whitespace-nowrap transition-colors"
            >
              온라인 견적 문의
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
