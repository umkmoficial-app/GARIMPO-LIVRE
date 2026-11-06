import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  description: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border-2 border-black rounded-2xl p-4 shadow-[0_6px_0_#111111] flex items-start justify-between gap-3 animate-slide-up"
        >
          <div className="flex items-start gap-3">
            {toast.type === 'success' && (
              <div className="p-1.5 bg-[#00A650] text-white rounded-lg shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            )}
            {toast.type === 'warning' && (
              <div className="p-1.5 bg-[#FF0000] text-white rounded-lg shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 stroke-[2.5]" />
              </div>
            )}
            {toast.type === 'info' && (
              <div className="p-1.5 bg-[#1A73E8] text-white rounded-lg shrink-0 mt-0.5">
                <Info className="w-5 h-5 stroke-[2.5]" />
              </div>
            )}

            <div>
              <h5 className="font-black text-sm text-black leading-tight">
                {toast.title}
              </h5>
              <p className="text-xs text-neutral-600 font-semibold mt-0.5 leading-snug">
                {toast.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-neutral-400 hover:text-black p-1 rounded-md"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
