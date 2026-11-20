import { useEffect } from 'react';
import {
  CERTIFICATIONS,
  EXPERIENCE,
  HONORS,
  PORTFOLIO_OWNER,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (message: string) => void;
}

export function ResumeModal({ isOpen, onClose, onNotify }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
      onNotify(`Copied ${PORTFOLIO_OWNER.email}`);
    } catch {
      onNotify(PORTFOLIO_OWNER.email);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[840px] max-h-[90vh] overflow-y-auto rounded-3xl frosted-glass-chrome specular-inner text-neutral-900 dark:text-[#f0f0f2] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top utility bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 h-16 bg-white/85 dark:bg-[#0c0d10]/85 backdrop-blur-xl border-b border-black/5 dark:border-white/10 print:hidden">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Technical CV · {PORTFOLIO_OWNER.name}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full frosted-glass-pill text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:opacity-85 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">
                content_copy
              </span>
              <span className="hidden sm:inline">Copy Email</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">
                print
              </span>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close résumé"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full frosted-glass-pill text-neutral-800 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <h2
                id="resume-modal-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
              >
                {PORTFOLIO_OWNER.name}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                {PORTFOLIO_OWNER.fullRole} · {PORTFOLIO_OWNER.specialty}
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 sm:text-right space-y-1">
              <p>{PORTFOLIO_OWNER.email}</p>
              <p>
                {PORTFOLIO_OWNER.phoneDisplay} · {PORTFOLIO_OWNER.location}
              </p>
              <p>
                <a
                  href={PORTFOLIO_OWNER.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white underline underline-offset-4 transition-colors"
                >
                  linkedin.com/in/arjun-jatav-19b16b22b
                </a>
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
              Work Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((item) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="p-5 rounded-2xl frosted-glass-pill space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300">
                        {item.company}, {item.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed pt-1">
                    {item.highlights.map((bullet) => (
                      <li key={bullet}>— {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl frosted-glass-pill space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                Education & Honors
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                {HONORS.map((item) => (
                  <li key={item.id}>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </span>{' '}
                    ({item.tag}) — {item.subtitle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl frosted-glass-pill space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                Certifications & Core Skills
              </h3>
              <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title}>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {cert.title}
                    </span>{' '}
                    · {cert.organization} ({cert.year})
                  </li>
                ))}
              </ul>
              <p className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 pt-2 border-t border-black/5 dark:border-white/10 leading-relaxed">
                {PORTFOLIO_OWNER.coreSkills.join(' · ')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
