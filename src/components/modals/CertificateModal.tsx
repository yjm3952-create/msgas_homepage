import React, { useState } from 'react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeCert, setActiveCert] = useState<'iso9001' | 'iso14001' | 'kgs' | 'gmp'>('iso9001');

  if (!isOpen) return null;

  const certificates = [
    {
      id: 'iso9001',
      title: 'ISO 9001:2015 품질경영시스템 인증',
      code: 'QA-KR-2015-8841',
      issuer: '한국표준협회(KSA) / IAF',
      scope: '고압가스, 초저온 액화가스 및 정밀 혼합가스의 제조, 저장, 충전 및 수송 유통',
      validUntil: '2027.08.31',
      description: '원료 입고부터 분석, 실린더 충전, 탱크로리 출하까지 전 공정 품질 무결점 추적 체계 공인 획득.'
    },
    {
      id: 'iso14001',
      title: 'ISO 14001:2015 환경경영시스템 인증',
      code: 'EA-KR-2018-3190',
      issuer: '한국경영인증원 / KAB',
      scope: '친환경 암모니아 벙커링, 온실가스 저감형 가스 회수 및 유통 인프라 운영',
      validUntil: '2026.11.15',
      description: '배출 탄소 최소화 및 유해가스 회수·정화 스크러버 시스템을 통한 국제 환경 표준 준수.'
    },
    {
      id: 'kgs',
      title: '한국가스안전공사(KGS) 안전관리 최우수 사업장',
      code: 'KGS-SAFE-2024-009',
      issuer: '한국가스안전공사(KGS)',
      scope: '초저온 저장탱크, 고압기화기 및 전국 17개소 가스충전 플랜트 안전설비',
      validUntil: '2026.06.30',
      description: '24시간 무중단 초저온 압력/잔량 원격 모니터링 시스템 구축 및 20년 무사고 무재해 인증.'
    },
    {
      id: 'gmp',
      title: '식품의약품안전처 의약품 제조 및 품질관리기준(KGMP)',
      code: 'MFDS-GMP-2023-M01',
      issuer: '식품의약품안전처 (MFDS)',
      scope: '의료용 고순도 산소(Medical Oxygen) 제조 및 의료기관 비상 공급망',
      validUntil: '2026.12.31',
      description: '종합병원 중환자실 및 응급실 직공급 의료용 가스 무균/고순도 약전 기준 100% 충족.'
    }
  ];

  const current = certificates.find((c) => c.id === activeCert)!;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#000f22] text-white p-6 flex items-center justify-between border-b border-[#0a2540]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#63f9e8] text-[#001210] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">
                Certified Quality & Safety Standards
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                {lang === 'ko' ? '품질·환경·안전 공인 인증서' : 'Official Quality & Safety Certifications'}
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

        {/* Tab pills */}
        <div className="flex border-b border-[#e5eeff] bg-[#f8f9ff] px-6 pt-3 gap-2 overflow-x-auto">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActiveCert(cert.id as any)}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-lg transition-colors whitespace-nowrap ${
                activeCert === cert.id
                  ? 'bg-white text-[#0057c0] border-t-2 border-[#0057c0] shadow-sm'
                  : 'text-[#64748b] hover:text-[#000f22]'
              }`}
            >
              {cert.id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Certificate Display */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="p-6 rounded-2xl border-2 border-dashed border-[#0057c0]/30 bg-[#eff4ff]/50 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-[#0a2540] text-[#63f9e8] text-xs font-bold">
                  공식 공인 인증
                </span>
                <h4 className="text-lg font-bold text-[#000f22] mt-2">{current.title}</h4>
                <p className="text-xs font-mono text-[#0057c0] mt-0.5">인증번호: {current.code}</p>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-[#0057c0] flex items-center justify-center text-[#0057c0] flex-shrink-0">
                <span className="material-symbols-outlined text-[30px]">workspace_premium</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-white p-4 rounded-xl border border-[#d3e4fe]">
              <div>
                <span className="text-[#64748b] block font-medium">인증 및 심사 기관</span>
                <span className="font-bold text-[#000f22]">{current.issuer}</span>
              </div>
              <div>
                <span className="text-[#64748b] block font-medium">인증 유효 기간</span>
                <span className="font-bold text-emerald-700">{current.validUntil}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-[#e5eeff]">
                <span className="text-[#64748b] block font-medium">인증 적용 범위 (Scope)</span>
                <span className="font-medium text-[#000f22]">{current.scope}</span>
              </div>
            </div>

            <p className="text-xs text-[#43474d] leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9ff] p-4 border-t border-[#e5eeff] flex items-center justify-between">
          <span className="text-xs text-[#64748b]">원본 대조필 (주)MS가스 기술품질본부</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert(`[${current.title}] 공식 인증서 사본이 PDF로 다운로드되었습니다.`)}
              className="px-4 py-2 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              <span>인증서 PDF 사본 다운로드</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#c4c6ce] text-[#43474d] text-xs font-semibold hover:bg-[#edf2f7]"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
