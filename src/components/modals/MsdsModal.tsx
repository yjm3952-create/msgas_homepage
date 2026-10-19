import React, { useState } from 'react';
import { MsdsDocument } from '../../types';

interface MsdsModalProps {
  document: MsdsDocument | null;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const MsdsModal: React.FC<MsdsModalProps> = ({ document, onClose, lang }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!document) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#071728] text-white p-6 flex items-center justify-between border-b border-[#0a2540]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0057c0] flex items-center justify-center text-[#63f9e8]">
              <span className="material-symbols-outlined text-[24px]">description</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#63f9e8] uppercase tracking-wider">
                GHS Material Safety Data Sheet
              </span>
              <h3 className="text-xl font-bold tracking-tight">{document.productName}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Document Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#f8f9ff] border border-[#e5eeff]">
            <div>
              <span className="text-xs text-[#64748b] block font-medium">CAS No.</span>
              <span className="text-sm font-bold text-[#000f22]">{document.casNo}</span>
            </div>
            <div>
              <span className="text-xs text-[#64748b] block font-medium">UN 번호</span>
              <span className="text-sm font-bold text-[#0057c0]">{document.unNumber}</span>
            </div>
            <div>
              <span className="text-xs text-[#64748b] block font-medium">화학식</span>
              <span className="text-sm font-bold text-[#000f22] font-mono">{document.formula}</span>
            </div>
            <div>
              <span className="text-xs text-[#64748b] block font-medium">최종 개정일</span>
              <span className="text-sm font-bold text-[#000f22]">{document.updatedAt}</span>
            </div>
          </div>

          {/* GHS Pictograms Banner */}
          <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#0a2540] text-[#63f9e8] text-xs font-bold uppercase">
                GHS 유해성 분류
              </span>
              <span className="text-xs text-[#43474d] font-semibold">고압가스 안전관리법 및 산안법 기준</span>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-4">
            <div className="border border-[#e5eeff] rounded-xl p-4">
              <h4 className="text-sm font-bold text-[#000f22] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">health_and_safety</span>
                1. 유해·위험성 및 건강 영향 (Health Hazards)
              </h4>
              <p className="text-sm text-[#43474d] leading-relaxed bg-[#f8f9ff] p-3 rounded-lg border border-[#e5eeff]">
                {document.healthHazard}
              </p>
            </div>

            <div className="border border-[#e5eeff] rounded-xl p-4">
              <h4 className="text-sm font-bold text-[#000f22] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-amber-600">local_fire_department</span>
                2. 폭발 및 화재 유해성 (Fire & Explosion Hazards)
              </h4>
              <p className="text-sm text-[#43474d] leading-relaxed bg-[#f8f9ff] p-3 rounded-lg border border-[#e5eeff]">
                {document.fireHazard}
              </p>
            </div>

            <div className="border border-[#e5eeff] rounded-xl p-4">
              <h4 className="text-sm font-bold text-[#000f22] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#0057c0]">shield</span>
                3. 안전 취급 및 저장 방법 (Handling & Storage Precautions)
              </h4>
              <p className="text-sm text-[#43474d] leading-relaxed bg-[#f8f9ff] p-3 rounded-lg border border-[#e5eeff]">
                {document.handlingCare}
              </p>
            </div>

            <div className="border border-[#e5eeff] rounded-xl p-4">
              <h4 className="text-sm font-bold text-[#000f22] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-emerald-600">emergency</span>
                4. 비상 조치 요령 및 응급 처치 (Emergency Measures)
              </h4>
              <ul className="text-xs text-[#43474d] space-y-1 list-disc pl-5">
                <li>흡입 시: 즉시 신선한 공기가 있는 장소로 이동 후 호흡이 곤란할 경우 산소 호흡기 가동 및 의료진 긴급 호출</li>
                <li>액체 접촉 시: 동상 부위를 문지르지 말고 미온수(37~42℃)로 즉시 15분 이상 가온 조치</li>
                <li>누출 시: 접근 금지 구역 설정, 환기 설비 강제 가동 및 (주)MS가스 24시간 안전상황실(051-317-0021) 비상 연락</li>
              </ul>
            </div>
          </div>

          {/* Download feedback message */}
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold flex items-center gap-2 border border-emerald-200">
              <span className="material-symbols-outlined text-[18px]">download_done</span>
              <span>[{document.productName}] MSDS 정식 국문 PDF 원본이 다운로드되었습니다.</span>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-[#f8f9ff] p-4 border-t border-[#e5eeff] flex items-center justify-between">
          <div className="text-xs text-[#64748b]">
            발행처: (주)MS가스 기술연구소 안전품질본부 · 파일용량: {document.fileSize}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#c4c6ce] text-[#43474d] text-xs font-semibold hover:bg-[#edf2f7]"
            >
              닫기
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-5 py-2 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {downloading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              )}
              <span>MSDS 정식 PDF 다운로드</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
