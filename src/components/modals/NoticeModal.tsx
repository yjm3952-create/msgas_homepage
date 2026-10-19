import React from 'react';
import { NoticeItem } from '../../types';

interface NoticeModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose, lang }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d3e4fe] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0a2540] text-white p-6 flex items-center justify-between border-b border-[#000f22]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#d8e2ff] text-[#001a43]">
                {notice.badge}
              </span>
              <span className="text-xs text-[#b0c8eb]">{notice.date}</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white line-clamp-2">
              {notice.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#64748b] font-medium">발주/주관 부서:</span>
              <span className="font-bold text-[#000f22]">{notice.agency || '(주)MS가스'}</span>
            </div>
            {notice.deadline && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#64748b] font-medium">접수 마감 기한:</span>
                <span className="font-bold text-[#ba1a1a]">{notice.deadline}</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#000f22]">요약 개요</h4>
            <p className="text-sm text-[#43474d] leading-relaxed bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff]">
              {notice.summary}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#000f22]">세부 공고 및 추진 내용</h4>
            <div className="text-sm text-[#43474d] leading-relaxed whitespace-pre-line bg-[#ffffff] p-4 rounded-xl border border-[#c4c6ce]/60 font-sans">
              {notice.content}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9ff] p-4 border-t border-[#e5eeff] flex items-center justify-between">
          <div className="text-xs text-[#64748b]">
            (주)MS가스 공시 및 입찰 관리 규정 준수
          </div>
          <div className="flex items-center gap-2">
            {notice.externalLink && (
              <button
                onClick={() => alert('제안요청서(RFP) 및 입찰 참가신청 서식이 다운로드되었습니다.')}
                className="px-4 py-2 rounded-lg bg-[#0057c0] text-white text-xs font-bold hover:bg-[#000f22] flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>RFP 요강 다운로드</span>
              </button>
            )}
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
