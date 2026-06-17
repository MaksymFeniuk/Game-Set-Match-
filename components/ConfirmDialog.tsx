'use client';

interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmDialog({ title, message, confirmLabel, onConfirm, onClose }: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-[var(--color-dark-card)] border border-[#1f2937] rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)] p-6">
        <h2 className="text-xl font-black text-white font-[var(--font-urbanist)] tracking-wide">{title}</h2>
        <p className="text-sm font-semibold text-slate-400 mt-3 leading-relaxed">{message}</p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 text-[11px] font-black tracking-widest text-slate-300 border border-[#1f2937] bg-[#090e17] py-3 rounded-lg hover:text-white hover:border-slate-600 transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 text-[11px] font-black tracking-widest text-red-400 border border-red-500/30 bg-red-500/10 py-3 rounded-lg hover:bg-red-500/20 hover:border-red-500/40 transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
