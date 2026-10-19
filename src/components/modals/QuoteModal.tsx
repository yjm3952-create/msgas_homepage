import React, { useState } from 'react';
import { QuoteRequest } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGas?: string;
  lang: 'ko' | 'en';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultGas,
  lang,
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    gasType: defaultGas || '산업용 고순도 질소 (N₂ 99.999%)',
    category: 'industrial',
    requiredPurity: '99.999% (5N)',
    estimatedVolume: '10 본 / 월 (실린더)',
    containerType: '실린더 번들 (Cylinder Bundle)',
    deliveryRegion: '수도권 / 경기 (화성 허브 관할)',
    targetDate: '2025-04-01',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0057c0] flex items-center justify-center text-[#63f9e8]">
              <span className="material-symbols-outlined text-[24px]">calculate</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">
                Fast Online RFQ Service
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                {lang === 'ko' ? 'MS가스 온라인 견적 및 공급 상담' : 'MS GAS Online Quote Request'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="text-2xl font-bold text-[#000f22]">
                {lang === 'ko' ? '견적 문의가 정상 접수되었습니다' : 'Quote Request Successfully Submitted'}
              </h4>
              <p className="text-sm text-[#43474d] max-w-md mx-auto leading-relaxed">
                {lang === 'ko'
                  ? `[${formData.companyName || '고객사'}]님의 담당 배정 엔지니어가 1시간 이내(영업일 기준) 유선 및 메일로 상세 견적서와 납품 가능 일정을 송부드립니다.`
                  : 'Our regional engineering team will review your specifications and send a formal quotation within 1 business hour.'}
              </p>
              <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-xs text-left text-[#0a2540] space-y-1.5 max-w-md mx-auto">
                <div className="font-bold flex justify-between">
                  <span>접수 번호:</span>
                  <span className="font-mono text-[#0057c0]">MSG-2025-RFQ-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>가스 품목:</span>
                  <span className="font-medium">{formData.gasType}</span>
                </div>
                <div className="flex justify-between">
                  <span>공급 방식:</span>
                  <span className="font-medium">{formData.containerType}</span>
                </div>
                <div className="flex justify-between">
                  <span>납품 권역:</span>
                  <span className="font-medium">{formData.deliveryRegion}</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#0057c0] text-white font-bold text-sm hover:bg-[#000f22] transition-colors"
                >
                  {lang === 'ko' ? '확인 및 닫기' : 'Done & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '기업/기관명 *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="(주)한국반도체"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '담당자 성함 / 직급 *' : 'Contact Person *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동 책임연구원"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '연락처 (휴대전화/직통) *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '이메일 (견적서 수신) *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '가스 품목 선택 *' : 'Gas Product *'}
                  </label>
                  <select
                    value={formData.gasType}
                    onChange={(e) => setFormData({ ...formData, gasType: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm bg-white focus:border-[#0070f3] outline-none"
                  >
                    <option value="산업용 고순도 질소 (N₂ 99.999%)">산업용 고순도 질소 (N₂ 99.999%)</option>
                    <option value="산업용 고순도 산소 (O₂ 99.99%)">산업용 고순도 산소 (O₂ 99.99%)</option>
                    <option value="순수 아르곤 (Ar 99.999%)">순수 아르곤 (Ar 99.999%)</option>
                    <option value="액화 탄산가스 (CO₂ 99.9%)">액화 탄산가스 (CO₂ 99.9%)</option>
                    <option value="수소 (H₂ 99.999% / 튜브트레일러)">수소 (H₂ 99.999% / 튜브트레일러)</option>
                    <option value="친환경 연료가스 프라멕스(Pramax)">친환경 연료가스 프라멕스(Pramax)</option>
                    <option value="반도체 특수가스 삼불화질소 (NF₃ 6N)">반도체 특수가스 삼불화질소 (NF₃ 6N)</option>
                    <option value="반도체 특수가스 모노실란 (SiH₄)">반도체 특수가스 모노실란 (SiH₄)</option>
                    <option value="의료용 의약품 산소 (GMP 인증)">의료용 의약품 산소 (GMP 인증)</option>
                    <option value="표준 교정 가스 (ppm/ppb 성적서 포함)">표준 교정 가스 (ppm/ppb 성적서 포함)</option>
                    <option value="초저온 가스설비 및 배관 턴키 시공">초저온 가스설비 및 배관 턴키 시공</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '요구 순도 등급 *' : 'Purity Grade *'}
                  </label>
                  <select
                    value={formData.requiredPurity}
                    onChange={(e) => setFormData({ ...formData, requiredPurity: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm bg-white focus:border-[#0070f3] outline-none"
                  >
                    <option value="순도 99.999% (5N 급)">순도 99.999% (5N 급)</option>
                    <option value="초고순도 UHP 99.9999% (6N 전자급)">초고순도 UHP 99.9999% (6N 전자급)</option>
                    <option value="초극미량 99.99999% (7N 반도체급)">초극미량 99.99999% (7N 반도체급)</option>
                    <option value="식약처 의약품 GMP 등급">식약처 의약품 GMP 등급</option>
                    <option value="KOLAS 공인 교정표준 등급">KOLAS 공인 교정표준 등급</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '공급 방식 (용기 형태) *' : 'Delivery Method *'}
                  </label>
                  <select
                    value={formData.containerType}
                    onChange={(e) => setFormData({ ...formData, containerType: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm bg-white focus:border-[#0070f3] outline-none"
                  >
                    <option value="고압 실린더 (단본)">고압 실린더 (단본)</option>
                    <option value="실린더 번들 (12~16본 패키지)">실린더 번들 (12~16본 패키지)</option>
                    <option value="초저온 액화용기 (LGC 160~240L)">초저온 액화용기 (LGC 160~240L)</option>
                    <option value="대용량 벌크로리 (5t ~ 20t)">대용량 벌크로리 (5t ~ 20t)</option>
                    <option value="ISO 탱크컨테이너 해상·육상">ISO 탱크컨테이너 해상·육상</option>
                    <option value="현장 배관 직결 파이프라인">현장 배관 직결 파이프라인</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '희망 납품 권역 *' : 'Delivery Region *'}
                  </label>
                  <select
                    value={formData.deliveryRegion}
                    onChange={(e) => setFormData({ ...formData, deliveryRegion: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm bg-white focus:border-[#0070f3] outline-none"
                  >
                    <option value="부산 / 경남 권역 (부산본사 플랜트)">부산 / 경남 권역 (부산본사 플랜트)</option>
                    <option value="수도권 / 경기 (화성 하이테크 플랜트)">수도권 / 경기 (화성 하이테크 플랜트)</option>
                    <option value="충청 / 서산 (대산 석유화학 거점)">충청 / 서산 (대산 석유화학 거점)</option>
                    <option value="호남 / 군산 (새만금·전북 플랜트)">호남 / 군산 (새만금·전북 플랜트)</option>
                    <option value="호남 / 여수 (화학산단 물류기지)">호남 / 여수 (화학산단 물류기지)</option>
                    <option value="영남 / 울산 (미래에너지 R&D 플랜트)">영남 / 울산 (미래에너지 R&D 플랜트)</option>
                    <option value="경북 / 구미·대구 (전자소재 허브)">경북 / 구미·대구 (전자소재 허브)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#000f22] mb-1">
                    {lang === 'ko' ? '예상 필요 수량/유량 *' : 'Estimated Volume *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 월 200 Nm³ / 50본"
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000f22] mb-1">
                  {lang === 'ko' ? '추가 요청사항 및 현장 엔지니어링 조건' : 'Additional Requirements'}
                </label>
                <textarea
                  rows={3}
                  placeholder="예: 압력조정기(Regulator) 및 초저온 배관 시공 포함 여부, 순도 분석 성적서 첨부 필수 등"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-[#c4c6ce] rounded-lg text-sm focus:border-[#0070f3] outline-none"
                />
              </div>

              {/* Security and SLA notice */}
              <div className="p-3 bg-[#f8f9ff] rounded-xl border border-[#e5eeff] flex items-center justify-between text-xs text-[#64748b]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#0057c0]">verified_user</span>
                  <span>KGS 인증 규격 기준 견적 산출 · 1시간 내 신속 피드백</span>
                </div>
                <span className="font-semibold text-[#000f22]">전국 17개소 직배송</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-[#c4c6ce] text-[#43474d] text-sm font-semibold hover:bg-[#edf2f7] transition-colors"
                >
                  {lang === 'ko' ? '취소' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-lg bg-[#0057c0] text-white text-sm font-bold hover:bg-[#000f22] transition-colors flex items-center gap-2 shadow-md"
                >
                  {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>}
                  <span>{lang === 'ko' ? '견적 신청 완료' : 'Submit Quote Request'}</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
