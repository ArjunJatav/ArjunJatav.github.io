import { useEffect, useState } from 'react';
import { MobileProject } from '../data/portfolioData';
import { MediaFrame } from './MediaFrame';

interface CaseStudyModalProps {
  project: MobileProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export function CaseStudyModal({
  project,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: CaseStudyModalProps) {
  const [shotIndex, setShotIndex] = useState(0);

  useEffect(() => {
    setShotIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const hasMultipleShots = project.screenshots.length > 1;
  const activeShot = project.screenshots[shotIndex] ?? project.screenshots[0];

  const handlePrevShot = () => {
    setShotIndex(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length
    );
  };

  const handleNextShot = () => {
    setShotIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[960px] max-h-[90vh] overflow-y-auto rounded-3xl frosted-glass-chrome specular-inner text-neutral-900 dark:text-[#f0f0f2] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-7 h-16 bg-white/85 dark:bg-[#0c0d10]/85 backdrop-blur-xl border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-neutral-600 dark:text-neutral-400 min-w-0">
            <span className="truncate font-semibold text-neutral-900 dark:text-white">
              {project.title}
            </span>
            <span aria-hidden="true">/</span>
            <span className="whitespace-nowrap shrink-0">
              {String(currentIndex + 1).padStart(2, '0')} of{' '}
              {String(totalCount).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous app"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full frosted-glass-pill text-neutral-700 dark:text-neutral-200 hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next app"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full frosted-glass-pill text-neutral-700 dark:text-neutral-200 hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-7">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full frosted-glass-pill text-neutral-900 dark:text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                  {project.frameworkLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full frosted-glass-pill text-neutral-600 dark:text-neutral-300 font-mono text-[10px] uppercase">
                  {project.platforms}
                </span>
              </div>
              <h2
                id="case-study-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
              >
                {project.title} — {project.subtitle}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-2xl frosted-glass-pill font-bold text-xs text-neutral-900 dark:text-white hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
              >
                <span className="material-symbols-outlined text-[16px]">
                  android
                </span>
                <span>Google Play</span>
              </a>
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-2xl font-bold text-xs bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-lg transition-all whitespace-nowrap shrink-0"
              >
                <span className="material-symbols-outlined text-[16px]">
                  phone_iphone
                </span>
                <span>App Store</span>
              </a>
            </div>
          </div>

          {/* Screenshot Viewer Stage */}
          <div className="rounded-2xl p-5 sm:p-7 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 flex flex-col items-center gap-5">
            <div className="relative w-full flex items-center justify-center">
              {hasMultipleShots && (
                <button
                  type="button"
                  onClick={handlePrevShot}
                  aria-label="Previous screenshot"
                  className="absolute left-0 sm:left-3 z-10 w-10 h-10 rounded-full frosted-glass-pill flex items-center justify-center text-neutral-900 dark:text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
              )}

              <div
                className={`w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 bg-neutral-950 shadow-2xl ${
                  project.aspectMode === 'wide'
                    ? 'max-w-[580px]'
                    : 'max-w-[300px] sm:max-w-[340px]'
                }`}
              >
                <MediaFrame
                  src={activeShot}
                  alt={`${project.imageAlt} — screen ${shotIndex + 1}`}
                  title={project.title}
                  className={`w-full bg-neutral-950 ${
                    project.aspectMode === 'wide'
                      ? 'aspect-[4/3]'
                      : 'aspect-[9/16] max-h-[460px]'
                  }`}
                  imgClassName={
                    project.aspectMode === 'wide'
                      ? 'object-cover bg-neutral-950'
                      : 'object-contain bg-neutral-950'
                  }
                />
              </div>

              {hasMultipleShots && (
                <button
                  type="button"
                  onClick={handleNextShot}
                  aria-label="Next screenshot"
                  className="absolute right-0 sm:right-3 z-10 w-10 h-10 rounded-full frosted-glass-pill flex items-center justify-center text-neutral-900 dark:text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              )}
            </div>

            {hasMultipleShots && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {project.screenshots.map((shot, idx) => (
                  <button
                    key={shot}
                    type="button"
                    onClick={() => setShotIndex(idx)}
                    aria-label={`Screenshot ${idx + 1}`}
                    className={`h-8 px-3 rounded-xl text-xs font-mono tabular-nums transition-all cursor-pointer ${
                      idx === shotIndex
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold'
                        : 'frosted-glass-pill text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Engineering Highlights & Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                Engineering Highlights
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="font-mono text-neutral-400 dark:text-neutral-500">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                Stack & Capabilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg frosted-glass-pill text-neutral-800 dark:text-neutral-200 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
