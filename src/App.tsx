import { useEffect, useMemo, useState } from 'react';
import {
  ARCHITECTURE_BLOCKS,
  CERTIFICATIONS,
  EXPERIENCE,
  FrameworkFilter,
  HERO_METRICS,
  HONORS,
  PORTFOLIO_OWNER,
  PROJECTS,
} from './data/portfolioData';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('glass-mono-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [frameworkFilter, setFrameworkFilter] =
    useState<FrameworkFilter>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>('apps');
  const [selectedExpIdx, setSelectedExpIdx] = useState<number>(0);
  const activeExperience = EXPERIENCE[selectedExpIdx] ?? EXPERIENCE[0];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('glass-mono-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2400);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleThemeToggle = (mode: 'dark' | 'light') => {
    setTheme(mode);
    showToast(
      mode === 'dark' ? 'Dark Glass UI Activated' : 'Light Glass UI Activated'
    );
  };

  const filteredProjects = useMemo(() => {
    if (frameworkFilter === 'all') return PROJECTS;
    return PROJECTS.filter((app) => app.frameworkKey === frameworkFilter);
  }, [frameworkFilter]);

  const rnCount = useMemo(
    () => PROJECTS.filter((app) => app.frameworkKey === 'rn').length,
    []
  );
  const flutterCount = useMemo(
    () => PROJECTS.filter((app) => app.frameworkKey === 'flutter').length,
    []
  );

  const activeModalIndex = useMemo(() => {
    if (!selectedProjectId) return -1;
    return PROJECTS.findIndex((p) => p.id === selectedProjectId);
  }, [selectedProjectId]);

  const activeModalProject =
    activeModalIndex >= 0 ? PROJECTS[activeModalIndex] : null;

  const handlePrevProject = () => {
    if (activeModalIndex < 0) return;
    const prevIdx = (activeModalIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProjectId(PROJECTS[prevIdx].id);
  };

  const handleNextProject = () => {
    if (activeModalIndex < 0) return;
    const nextIdx = (activeModalIndex + 1) % PROJECTS.length;
    setSelectedProjectId(PROJECTS[nextIdx].id);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
      showToast(`Copied ${PORTFOLIO_OWNER.email}`);
    } catch {
      showToast(PORTFOLIO_OWNER.email);
    }
  };

  return (
    <div className="bg-[#ebecee] dark:bg-[#060709] text-neutral-900 dark:text-[#f0f0f2] font-sans antialiased flex flex-col min-h-screen relative overflow-x-clip transition-colors duration-500">
      {/* Multi-Layered Frosted Ambient Lighting Matrix (Zero-Blur-Pass GPU-Composited Orbs) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden [contain:strict]"
      >
        {/* Top-left luminous white core */}
        <div className="orb-1 ambient-orb-tl absolute -top-56 -left-56 w-[560px] md:w-[920px] h-[560px] md:h-[920px] rounded-full" />
        {/* Top-right crystalline moonlight orb */}
        <div className="orb-2 ambient-orb-tr absolute top-8 -right-56 w-[500px] md:w-[820px] h-[500px] md:h-[820px] rounded-full" />
        {/* Mid dynamic vitreous orb for refracted card backings */}
        <div className="orb-1 ambient-orb-mid absolute top-[35%] left-1/2 -translate-x-1/2 w-[520px] md:w-[1000px] h-[520px] md:h-[900px] rounded-full" />
        {/* Bottom obsidian silver sheen orb */}
        <div className="orb-2 ambient-orb-br absolute -bottom-56 right-0 w-[560px] md:w-[880px] h-[560px] md:h-[880px] rounded-full" />
        {/* Subtle tactile micro-mesh texture for glass dispersion feel */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px] opacity-90" />
      </div>

      {/* Floating Frosted Glass Capsule Dock / Header */}
      <header className="fixed top-0 inset-x-0 z-40 pt-3 md:pt-4 px-3 sm:px-4 md:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 h-14 md:h-16 px-3 sm:px-4 lg:px-6 rounded-2xl md:rounded-full frosted-glass-chrome specular-inner pointer-events-auto transition-all duration-300">
          {/* Brand / Identity */}
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <a className="flex items-center gap-2.5 group shrink-0" href="#top">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-0.5 bg-gradient-to-b from-white to-neutral-500 shadow-sm shadow-black/20 dark:shadow-white/10 shrink-0">
                <img
                  alt={`${PORTFOLIO_OWNER.name} Profile`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover object-top filter grayscale contrast-125"
                  src={PORTFOLIO_OWNER.avatarUrl}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-neutral-400 dark:ring-neutral-900" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-neutral-900 dark:text-white tracking-tight text-sm md:text-base leading-none group-hover:opacity-80 transition-opacity whitespace-nowrap">
                  {PORTFOLIO_OWNER.name}
                </span>
                <span className="text-[10px] md:text-[11px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-1 whitespace-nowrap">
                  {PORTFOLIO_OWNER.shortRole}
                </span>
              </div>
            </a>

            {/* Status Indicator Capsule: Shown at 2xl+ to accommodate full role title cleanly */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium frosted-glass-pill text-neutral-700 dark:text-neutral-200 whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="tracking-wide">AVAILABLE FOR CONTRACT</span>
            </div>
          </div>

          {/* Navigation Pills */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-0.5 lg:gap-1.5 p-1 rounded-full frosted-glass-pill shrink-0"
          >
            {[
              { id: 'apps', label: 'Apps', href: '#portfolio-apps' },
              { id: 'experience', label: 'Experience', href: '#honors-section' },
              {
                id: 'architecture',
                label: 'Architecture',
                href: '#architecture-section',
              },
              { id: 'contact', label: 'Contact', href: '#contact-section' },
            ].map((item) => {
              const isCurrent = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`px-2.5 lg:px-3.5 xl:px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? 'text-neutral-900 dark:text-white bg-black/5 dark:bg-white/15'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Interactive Glass Theme Switcher & Monochrome CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="flex items-center p-0.5 rounded-full frosted-glass-pill shrink-0"
              role="group"
              aria-label="Theme switcher"
            >
              <button
                type="button"
                aria-label="Activate Dark Glass"
                onClick={() => handleThemeToggle('dark')}
                className={`flex items-center gap-1 px-2 xl:px-2.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  theme === 'dark'
                    ? 'font-semibold bg-white/20 text-white shadow-xs'
                    : 'font-medium text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  dark_mode
                </span>
                <span className="hidden xl:inline">Dark</span>
              </button>
              <button
                type="button"
                aria-label="Activate Light Glass"
                onClick={() => handleThemeToggle('light')}
                className={`flex items-center gap-1 px-2 xl:px-2.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  theme === 'light'
                    ? 'font-semibold bg-neutral-900 text-white shadow-xs'
                    : 'font-medium text-neutral-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  light_mode
                </span>
                <span className="hidden xl:inline">Light</span>
              </button>
            </div>

            <a
              className="hidden sm:inline-flex md:hidden lg:inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md hover:shadow-lg active:scale-95 transition-all whitespace-nowrap shrink-0"
              href="#contact-section"
              onClick={() => setActiveNav('contact')}
            >
              <span>Let&apos;s Talk</span>
              <span className="material-symbols-outlined text-[15px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main
        id="top"
        className="flex-1 flex flex-col relative w-full pt-24 md:pt-28 pb-24 md:pb-16 px-4 md:px-6 lg:px-8 z-10"
      >
        <div className="flex flex-col w-full max-w-7xl mx-auto space-y-12 md:space-y-16">
          {/* Hero Section: Monochrome Vitreous Architecture */}
          <section className="flex flex-col pt-2 sm:pt-4 pb-2 space-y-6 sm:space-y-8">
            {/* Specialist Badge Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full frosted-glass-pill max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-ping shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
                Cross-Platform Specialist // React Native &amp; Flutter
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Hero Text & Quick Action Frosted CTAs */}
              <div className="space-y-6 lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12] [text-wrap:balance]">
                  Crafting High-Performance{' '}
                  <span className="bg-gradient-to-r from-neutral-950 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                    Mobile Experiences
                  </span>{' '}
                  That Scale.
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
                  Building innovative, user-focused, and scalable mobile apps
                  with{' '}
                  <strong className="text-neutral-950 dark:text-white font-semibold">
                    React Native &amp; Flutter
                  </strong>
                  . B.Tech Computer Science graduate (2018–2022) specializing in
                  TypeScript, Dart, Firebase, native Kotlin/Swift modules, and
                  seamless cross-platform performance across Android and iOS.
                </p>

                {/* Quick Actions: Tactile Frosted Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-md">
                  <a
                    className="flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-lg active:scale-[0.98] transition-all text-center whitespace-nowrap"
                    href="#portfolio-apps"
                    onClick={() => setActiveNav('apps')}
                  >
                    <span>Explore Apps</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_downward
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="flex-1 min-h-[48px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl frosted-glass text-neutral-900 dark:text-white font-bold text-sm hover:bg-white/90 dark:hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                    <span>Resume / CV</span>
                  </button>
                </div>
              </div>

              {/* Telemetry & Metrics Matrix: Frosted Glass Cards with Pure Specular Depth */}
              <div className="lg:col-span-5 w-full">
                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 md:gap-4">
                  {HERO_METRICS.map((metric) => (
                    <div
                      key={metric.label}
                      className="group flex flex-col p-4 sm:p-5 rounded-3xl frosted-glass glass-card-hover relative overflow-hidden"
                    >
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full card-ambient-glow group-hover:scale-125 transition-transform pointer-events-none" />
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-mono tabular-nums">
                          {metric.value}
                        </span>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center frosted-glass-pill text-neutral-900 dark:text-white shrink-0">
                          <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                            {metric.icon}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Segmented Framework Filter with Frosted Glass Tabs */}
          <section
            className="pt-4 space-y-6 scroll-mt-24 md:scroll-mt-28"
            id="portfolio-apps"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center frosted-glass-pill text-neutral-900 dark:text-white shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    layers
                  </span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                    Featured Production Apps
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    React Native &amp; Flutter apps shipped on Google Play &amp;
                    App Store
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="hidden xl:inline text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase whitespace-nowrap">
                  Tap cards to inspect screens
                </span>
                <div
                  className="flex p-1 rounded-2xl frosted-glass-pill w-full sm:w-auto"
                  role="tablist"
                  aria-label="Filter apps by framework"
                >
                  {[
                    { key: 'all' as const, label: `All (${PROJECTS.length})` },
                    { key: 'rn' as const, label: `React Native (${rnCount})` },
                    {
                      key: 'flutter' as const,
                      label: `Flutter (${flutterCount})`,
                    },
                  ].map((tab) => {
                    const active = frameworkFilter === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setFrameworkFilter(tab.key)}
                        className={`flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs transition-all cursor-pointer whitespace-nowrap ${
                          active
                            ? 'font-bold shadow-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                            : 'font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Production Apps Grid Showcase (Tactile Monochrome Frosted Glass Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((app) => (
                <article
                  key={app.id}
                  className="group flex flex-col rounded-3xl frosted-glass glass-card-hover overflow-hidden"
                >
                  {/* Visual Preview Header (Click to open full-color screenshot lightbox) */}
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(app.id)}
                    aria-label={`Inspect ${app.title} screenshots`}
                    className="relative w-full h-52 bg-neutral-900 overflow-hidden text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                  >
                    <img
                      alt={app.imageAlt}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover:grayscale-0"
                      src={app.screenshots[0]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/35 to-transparent flex items-end justify-between p-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="px-2.5 py-1 rounded-full frosted-glass-pill text-neutral-900 dark:text-white font-mono text-[10px] uppercase font-bold tracking-wider whitespace-nowrap">
                          {app.frameworkLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded-full frosted-glass-pill text-neutral-700 dark:text-neutral-300 font-mono text-[10px] uppercase font-medium whitespace-nowrap">
                          {app.secondaryBadge}
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-full frosted-glass-pill flex items-center justify-center text-neutral-900 dark:text-white opacity-85 group-hover:opacity-100 transition-opacity shrink-0">
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_full
                        </span>
                      </span>
                    </div>
                  </button>

                  {/* Card Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <button
                            type="button"
                            onClick={() => setSelectedProjectId(app.id)}
                            className="text-left text-xl font-bold text-neutral-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
                          >
                            {app.title}
                          </button>
                          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                            {app.subtitle}
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-900 dark:text-white font-bold px-2.5 py-1 rounded-full frosted-glass-pill shrink-0 whitespace-nowrap">
                          {app.pulseStatus && (
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-ping" />
                          )}
                          {app.statusMetric}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {app.summary}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {app.featureChips.map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-1 rounded-lg frosted-glass-pill text-neutral-800 dark:text-neutral-200 font-mono text-[11px]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap items-center justify-between border-t border-black/5 dark:border-white/10 gap-2">
                        <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-xs font-mono min-w-0">
                          <span className="material-symbols-outlined text-[16px] shrink-0">
                            {app.footerIcon}
                          </span>
                          <span className="truncate">{app.footerMetric}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                          <a
                            href={app.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${app.title} on Google Play`}
                            onClick={() =>
                              showToast(`Opening ${app.title} on Google Play`)
                            }
                            className="px-2.5 py-1.5 rounded-xl frosted-glass-pill text-[11px] font-bold text-neutral-900 dark:text-white hover:opacity-85 active:scale-95 transition-all inline-flex items-center gap-1 whitespace-nowrap"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              android
                            </span>
                            <span>Play</span>
                          </a>
                          <a
                            href={app.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${app.title} on Apple App Store`}
                            onClick={() =>
                              showToast(`Opening ${app.title} on App Store`)
                            }
                            className="px-2.5 py-1.5 rounded-xl font-bold text-[11px] bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 inline-flex items-center gap-1 shadow-sm active:scale-95 transition-all whitespace-nowrap"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              phone_iphone
                            </span>
                            <span>iOS</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Experience + Honors & Credentials (Responsive Unified Frosted Glass Container) */}
          <section
            className="flex flex-col space-y-5 pt-4 scroll-mt-24 md:scroll-mt-28"
            id="honors-section"
          >
            {/* Unified Responsive Work Experience Container */}
            <div className="p-4 sm:p-6 md:p-8 rounded-3xl frosted-glass specular-inner space-y-5 sm:space-y-6">
              {/* Container Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center frosted-glass-pill text-neutral-900 dark:text-white shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      work_history
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                      Experience &amp; Credentials
                    </h2>
                    <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                      Career timeline across React Native &amp; Flutter engineering
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full frosted-glass-pill text-[10px] sm:text-[11px] font-mono text-neutral-700 dark:text-neutral-200 uppercase tracking-wider font-semibold shrink-0 whitespace-nowrap">
                  {EXPERIENCE.length} Roles · Verified
                </span>
              </div>

              {/* Responsive Split Layout: Horizontal Tabs on Mobile (< md), Vertical Selector + Detail Panel on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                {/* Mobile Horizontal Pill Selector (< md) */}
                <div
                  className="flex md:hidden gap-2 overflow-x-auto pb-1 -mx-1 px-1"
                  role="tablist"
                  aria-label="Work experience roles"
                >
                  {EXPERIENCE.map((job, idx) => {
                    const isSelected = idx === selectedExpIdx;
                    const shortCompany = job.company.split(' ')[0];
                    const tabLabel =
                      shortCompany === 'Dev'
                        ? 'Dev Technosys'
                        : shortCompany;
                    return (
                      <button
                        key={`${job.company}-mobile`}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedExpIdx(idx)}
                        className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                            : 'frosted-glass-pill text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            idx === 0
                              ? isSelected
                                ? 'bg-white dark:bg-neutral-950 animate-pulse'
                                : 'bg-neutral-900 dark:bg-white animate-pulse'
                              : isSelected
                                ? 'bg-white/60 dark:bg-neutral-950/60'
                                : 'bg-neutral-400 dark:bg-neutral-500'
                          }`}
                        />
                        <span>{tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tablet & Desktop Vertical Company Rail (md+) */}
                <div
                  className="hidden md:flex md:col-span-4 flex-col gap-2.5"
                  role="tablist"
                  aria-label="Work experience roles"
                >
                  {EXPERIENCE.map((job, idx) => {
                    const isSelected = idx === selectedExpIdx;
                    const isCurrent = idx === 0;
                    return (
                      <button
                        key={`${job.company}-${job.period}`}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedExpIdx(idx)}
                        className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex flex-col gap-1.5 min-w-0 ${
                          isSelected
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-md'
                            : 'frosted-glass-pill text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 min-w-0">
                          <span
                            className={`text-[10px] font-mono tabular-nums uppercase tracking-wider truncate ${
                              isSelected
                                ? 'text-white/75 dark:text-neutral-600'
                                : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                          >
                            {job.period}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isCurrent
                                ? isSelected
                                  ? 'bg-white dark:bg-neutral-950 animate-pulse'
                                  : 'bg-neutral-900 dark:bg-white animate-pulse'
                                : isSelected
                                  ? 'bg-white/40 dark:bg-neutral-950/40'
                                  : 'bg-neutral-400/60 dark:bg-neutral-500/60'
                            }`}
                          />
                        </div>
                        <span className="text-sm font-bold tracking-tight leading-snug">
                          {job.company}
                        </span>
                        <span
                          className={`text-[11px] font-mono leading-snug ${
                            isSelected
                              ? 'text-white/80 dark:text-neutral-700'
                              : 'text-neutral-500 dark:text-neutral-400'
                          }`}
                        >
                          {job.role}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Role Detail Stage */}
                <div
                  role="tabpanel"
                  className="md:col-span-8 rounded-2xl p-4 sm:p-6 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between gap-5 min-w-0"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-snug">
                          {activeExperience.company}
                        </h3>
                        <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                          {activeExperience.role} · {activeExperience.location}
                        </p>
                      </div>
                      <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full frosted-glass-pill text-[11px] font-mono tabular-nums text-neutral-800 dark:text-neutral-200 whitespace-nowrap shrink-0">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            selectedExpIdx === 0
                              ? 'bg-neutral-900 dark:bg-white animate-pulse'
                              : 'bg-neutral-400 dark:bg-neutral-500'
                          }`}
                        />
                        <span>{activeExperience.period}</span>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                      {activeExperience.summary}
                    </p>

                    <ul className="space-y-2.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {activeExperience.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-[15px] text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0">
                            chevron_right
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Role Stepper Footer */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/5 dark:border-white/10">
                    <span className="text-[11px] font-mono tabular-nums text-neutral-500 dark:text-neutral-400">
                      Role {String(selectedExpIdx + 1).padStart(2, '0')} /{' '}
                      {String(EXPERIENCE.length).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        aria-label="Previous experience role"
                        onClick={() =>
                          setSelectedExpIdx(
                            (prev) =>
                              (prev - 1 + EXPERIENCE.length) % EXPERIENCE.length
                          )
                        }
                        className="w-8 h-8 rounded-full frosted-glass-pill flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/15 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_back
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-label="Next experience role"
                        onClick={() =>
                          setSelectedExpIdx(
                            (prev) => (prev + 1) % EXPERIENCE.length
                          )
                        }
                        className="w-8 h-8 rounded-full frosted-glass-pill flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/15 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Honors & Education Cards (1 col mobile, 2 col tablet, 3 col desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              {HONORS.map((honor) => (
                <div
                  key={honor.id}
                  className="flex items-start gap-3.5 p-4 rounded-2xl frosted-glass glass-card-hover"
                >
                  <div className="w-11 h-11 rounded-xl frosted-glass-pill flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
                    <span className="material-symbols-outlined text-[22px]">
                      {honor.icon}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
                      <span className="text-sm font-bold text-neutral-900 dark:text-white">
                        {honor.title}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase shrink-0">
                        {honor.tag}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug mt-1">
                      {honor.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl frosted-glass"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-[18px] text-neutral-700 dark:text-neutral-300 shrink-0">
                      verified
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white leading-snug">
                        {cert.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-neutral-500 dark:text-neutral-400 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Core Architecture & Engines: Frosted Glass Deep Specular Bevels */}
          <section
            className="p-5 sm:p-6 md:p-8 rounded-3xl frosted-glass space-y-6 scroll-mt-24 md:scroll-mt-28"
            id="architecture-section"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                  Core Architecture &amp; Skills
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                  Production cross-platform tooling across Android &amp; iOS
                </p>
              </div>
              <span className="self-start sm:self-auto text-[11px] font-mono px-3 py-1 rounded-full frosted-glass-pill text-neutral-800 dark:text-neutral-200 font-semibold uppercase">
                Tooling Stack
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {ARCHITECTURE_BLOCKS.map((block) => (
                <div
                  key={block.label}
                  className="p-4 rounded-2xl frosted-glass-pill flex flex-col hover:border-neutral-400/50 dark:hover:border-white/40 transition-all"
                >
                  <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {block.label}
                  </span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white font-mono mt-1">
                    {block.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Complete 10-Skill Matrix from arjunjatav.github.io */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5 dark:border-white/10">
              {PORTFOLIO_OWNER.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl frosted-glass-pill text-xs font-mono text-neutral-800 dark:text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Vitreous Frosted Banner: Pure Monochrome Inverted Glass Glow */}
          <section
            className="relative p-6 sm:p-8 md:p-10 rounded-3xl frosted-glass text-neutral-900 dark:text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 overflow-hidden specular-inner scroll-mt-24 md:scroll-mt-28"
            id="contact-section"
          >
            {/* Monochromatic internal glass light dispersion */}
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full card-ambient-glow pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full card-ambient-glow pointer-events-none opacity-75" />

            <div className="space-y-3 relative z-10 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-neutral-800 dark:text-neutral-200 font-semibold">
                  Available For Impact Projects · {PORTFOLIO_OWNER.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Need a Flagship Mobile App Built?
              </h3>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Let&apos;s collaborate to build innovative, scalable Android &amp;
                iOS applications with React Native or Flutter. Reach out via
                WhatsApp, LinkedIn, or email for project inquiries.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors underline underline-offset-4 cursor-pointer break-all"
                >
                  {PORTFOLIO_OWNER.email}
                </button>
                <span aria-hidden="true">•</span>
                <span>{PORTFOLIO_OWNER.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 lg:pt-0 relative z-10 shrink-0">
              <a
                className="w-full sm:w-auto min-h-[50px] flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-xl active:scale-[0.98] transition-all whitespace-nowrap"
                href={PORTFOLIO_OWNER.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                <span>WhatsApp Quick Chat</span>
              </a>
              <a
                aria-label="LinkedIn Profile"
                className="flex-1 sm:flex-initial min-h-[50px] px-4 flex items-center justify-center gap-1.5 rounded-2xl frosted-glass hover:bg-white/90 dark:hover:bg-white/20 text-neutral-900 dark:text-white text-xs font-bold transition-all active:scale-95 whitespace-nowrap"
                href={PORTFOLIO_OWNER.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">
                  person
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                aria-label="Send email"
                className="min-h-[50px] min-w-[50px] flex items-center justify-center rounded-2xl frosted-glass hover:bg-white/90 dark:hover:bg-white/20 text-neutral-900 dark:text-white transition-all active:scale-95"
                href={`mailto:${PORTFOLIO_OWNER.email}`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  mail
                </span>
              </a>
            </div>
          </section>

          {/* Desktop Footer */}
          <footer className="hidden md:flex flex-col sm:flex-row items-center justify-between pt-8 pb-4 border-t border-black/5 dark:border-white/10 text-neutral-500 dark:text-neutral-400 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-800 dark:text-white">
                {PORTFOLIO_OWNER.name}
              </span>
              <span>•</span>
              <span>{PORTFOLIO_OWNER.fullRole}</span>
            </div>
            <div className="flex items-center gap-6 mt-3 sm:mt-0">
              <a
                className="hover:text-black dark:hover:text-white transition-colors"
                href="#portfolio-apps"
              >
                Apps
              </a>
              <a
                className="hover:text-black dark:hover:text-white transition-colors"
                href="#honors-section"
              >
                Experience
              </a>
              <a
                className="hover:text-black dark:hover:text-white transition-colors"
                href="#architecture-section"
              >
                Architecture
              </a>
              <a
                className="hover:text-black dark:hover:text-white transition-colors"
                href={PORTFOLIO_OWNER.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-black dark:hover:text-white transition-colors"
                href={`mailto:${PORTFOLIO_OWNER.email}`}
              >
                Contact
              </a>
              <span className="text-neutral-400 dark:text-neutral-600">
                © 2025 {PORTFOLIO_OWNER.name}
              </span>
            </div>
          </footer>
        </div>
      </main>

      {/* Mobile Bottom Navigation Glass Bar */}
      <nav
        aria-label="Mobile bottom navigation"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 pb-safe frosted-glass-chrome border-t border-white/60 dark:border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.2)]"
      >
        <div className="flex justify-around items-center h-16 px-2 max-w-lg mx-auto">
          {[
            {
              id: 'apps',
              label: 'Apps',
              icon: 'phone_iphone',
              href: '#portfolio-apps',
            },
            {
              id: 'experience',
              label: 'Exp',
              icon: 'work_outline',
              href: '#honors-section',
            },
            {
              id: 'architecture',
              label: 'Stack',
              icon: 'terminal',
              href: '#architecture-section',
            },
            {
              id: 'contact',
              label: 'Contact',
              icon: 'alternate_email',
              href: '#contact-section',
            },
          ].map((item) => {
            const active = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
                  active
                    ? 'text-neutral-950 dark:text-white font-bold'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span className="text-[10px] font-mono">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Monochrome Glass Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl frosted-glass-chrome text-neutral-900 dark:text-white font-mono text-xs shadow-2xl flex items-center gap-2 pointer-events-none whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[16px]">lens</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Fullscreen App Screenshot Lightbox Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setSelectedProjectId(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        currentIndex={activeModalIndex}
        totalCount={PROJECTS.length}
      />

      {/* Technical CV / Résumé Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onNotify={showToast}
      />
    </div>
  );
}
