export type FrameworkFilter = 'all' | 'rn' | 'flutter';

export interface MobileProject {
  id: string;
  title: string;
  subtitle: string;
  frameworkKey: 'rn' | 'flutter';
  frameworkLabel: string;
  secondaryBadge: string;
  statusMetric: string;
  pulseStatus?: boolean;
  platforms: string;
  summary: string;
  featureChips: string[];
  footerIcon: string;
  footerMetric: string;
  playStoreUrl: string;
  appStoreUrl: string;
  screenshots: string[];
  aspectMode?: 'wide' | 'portrait';
  imageAlt: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface HonorItem {
  id: string;
  icon: string;
  title: string;
  tag: string;
  subtitle: string;
  details: string;
}

export interface ArchitectureBlock {
  label: string;
  value: string;
}

export interface CertificationItem {
  title: string;
  organization: string;
  year: string;
}

export const PORTFOLIO_OWNER = {
  name: 'Arjun Jatav',
  shortRole: 'Mobile Application Developer',
  fullRole: 'Mobile Application Developer',
  specialty: 'React Native & Flutter',
  location: 'Jaipur, India',
  email: 'arjun1999jatav@gmail.com',
  phoneDisplay: '+91 90578 37784',
  whatsappUrl:
    'https://wa.me/919057837784?text=Hi%20Arjun,%20saw%20your%20mobile%20portfolio%20and%20would%20love%20to%20connect!',
  linkedinUrl: 'https://www.linkedin.com/in/arjun-jatav-19b16b22b/',
  githubUrl: 'https://github.com/arjunjatav',
  avatarUrl: '/src/assets/images/arjun/Profile.jpeg',
  aboutLead:
    'Building innovative, user-focused, and scalable mobile apps with React Native & Flutter. B.Tech Computer Science graduate (2018–2022) specializing in TypeScript, Dart, Firebase, native Kotlin/Swift modules, and clean cross-platform architecture.',
  coreSkills: [
    'React Native',
    'Flutter',
    'TypeScript / JS',
    'Dart',
    'Firebase',
    'REST APIs',
    'Redux & Context API',
    'Kotlin & Swift',
    'Git',
    'UI/UX Design',
  ],
};

export const HERO_METRICS = [
  {
    value: '2M+',
    label: 'Combined Downloads',
    icon: 'download',
  },
  {
    value: '1.2M+',
    label: 'User Base',
    icon: 'group',
  },
  {
    value: '8+',
    label: 'Live iOS & Android Apps',
    icon: 'apps',
  },
  {
    value: '-30%',
    label: 'Post-Release Bugs',
    icon: 'verified_user',
  },
];

export const PROJECTS: MobileProject[] = [
  {
    id: 'tokee',
    title: 'TOKEE',
    subtitle: 'Video Chat & Messaging · Deucetek LLC',
    frameworkKey: 'rn',
    frameworkLabel: 'React Native',
    secondaryBadge: 'iOS & Android',
    statusMetric: '2M+ Downloads',
    pulseStatus: true,
    platforms: 'Google Play & App Store',
    summary:
      'Cross-platform messaging and video chat platform (listed as Video Chat — Tokee on the App Store) for stories, chat, and live calls—surpassing 2M+ cumulative downloads across iOS and Android.',
    featureChips: ['2M+ Downloads', 'iOS & Android', 'Stories & Calls'],
    footerIcon: 'speed',
    footerMetric: '2M+ Combined',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.deucetek.tokee&hl=en',
    appStoreUrl: 'https://apps.apple.com/us/app/video-chat-tokee/id1641356322',
    screenshots: ['/src/assets/images/arjun/tokee.webp'],
    aspectMode: 'portrait',
    imageAlt: 'TOKEE React Native messaging and video chat app preview',
    highlights: [
      'Surpassed 2M+ cumulative downloads across the Apple App Store (Video Chat — Tokee) and Google Play Store (1M+ on Android alone), serving an estimated ~1.2M user base.',
      'Real-time messaging, stories publishing, live voice/video calling, and in-app subscriptions, custom themes, and virtual items across Android and iOS.',
      'Native Kotlin and Swift integrations for camera pipelines, Firebase push notifications, and centralized Redux state.',
    ],
    stack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Kotlin / Swift'],
  },
  {
    id: 'equifinds',
    title: 'EquiFinds',
    subtitle: 'Western Multi-Vendor Marketplace',
    frameworkKey: 'rn',
    frameworkLabel: 'React Native v0.85',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'Trusted western marketplace built with buyer and seller protection—shop and sell western tack, saddles, apparel, and horse gear with escrow-protected payouts and tracked shipping.',
    featureChips: ['Stripe Connect', 'Shippo Shipping', 'Socket.IO Chat'],
    footerIcon: 'storefront',
    footerMetric: 'Buyer Protection',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.marketplace.equifind&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com/us/app/equifinds/id6753729689',
    screenshots: [
      '/src/assets/images/arjun/equifinds_1.webp',
      '/src/assets/images/arjun/equifinds_2.webp',
      '/src/assets/images/arjun/equifinds_3.webp',
      '/src/assets/images/arjun/equifinds_4.webp',
      '/src/assets/images/arjun/equifinds_5.webp',
      '/src/assets/images/arjun/equifinds_6.webp',
    ],
    aspectMode: 'portrait',
    imageAlt:
      'EquiFinds trusted western marketplace React Native mobile app screenshot',
    highlights: [
      'Core Architecture: Engineered a cross-platform iOS & Android western marketplace with React Native (v0.85), TypeScript, and React Navigation v7 backed by WooCommerce REST API.',
      'Fintech & Buyer Protection: Implemented Stripe Connect for split payments, vendor onboarding, escrow holding until orders arrive as described, wallet tracking, and automated payouts.',
      'Logistics & Shipping: Integrated Shippo API for real-time carrier rate calculations, address validation, automated label generation, and tracked shipping.',
      'Real-time Messaging: Built in-app buyer-seller chat powered by Socket.IO alongside push notifications via Firebase Cloud Messaging (FCM) and Notifee.',
      'Vendor Portal: Designed a seller dashboard with real-time sales analytics, multi-image tack & apparel listings, and return/order fulfillment workflows.',
    ],
    stack: [
      'React Native',
      'TypeScript',
      'Redux / Context API',
      'Stripe Connect',
      'Shippo API',
      'Socket.IO',
      'Firebase FCM',
      'Notifee',
      'Keychain',
      'WooCommerce REST API',
    ],
  },
  {
    id: 'klybourne',
    title: 'Klybourne',
    subtitle: 'Living Milestone & Career Platform · Klybourne Holdings',
    frameworkKey: 'rn',
    frameworkLabel: 'React Native',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play, App Store & Web',
    summary:
      'Next-generation platform built for quiet achievers to capture experiences, lessons, and milestones—combining a living multimedia career record, ATS-compliant PDF resumes, Candidate AI Guardrails, and recruiter AI chat.',
    featureChips: ['AI Guardrails', 'Apollo GraphQL', 'AWS S3 Media'],
    footerIcon: 'shield_person',
    footerMetric: 'Win in Silence',
    playStoreUrl: 'https://play.google.com/store/search?q=Klybourne&c=apps',
    appStoreUrl: 'https://apps.apple.com/us/app/klybourne/id6474556733',
    screenshots: [
      '/src/assets/images/arjun/klybourne_1.jpg',
      '/src/assets/images/arjun/klybourne_2.jpg',
      '/src/assets/images/arjun/klybourne_3.jpg',
      '/src/assets/images/arjun/klybourne_4.jpg',
      '/src/assets/images/arjun/klybourne_5.jpg',
      '/src/assets/images/arjun/klybourne_6.jpg',
      '/src/assets/images/arjun/klybourne_7.jpg',
    ],
    aspectMode: 'portrait',
    imageAlt:
      'Klybourne App Store screenshot showcasing milestone tracking and living career platform',
    highlights: [
      'Product Vision (Klybourne Holdings, LLC): Built for quiet achievers to reflect, capture daily progress, and turn verified milestones into a shareable living story on iOS, Android, and Web.',
      'Dynamic 4-Step Living Resume Builder: Engineered multimedia resume creation with intro videos, metric callouts, template selection, and high-resolution ATS-compliant PDF exports.',
      'Candidate AI Guardrails & Privacy Engine: Empowered users to enforce strict AI boundaries including salary concealment, personal contact masking, verification locks, and custom rules.',
      'Companion Web Viewer & Recruiter AI Chat: Built an interactive web living resume enabling hiring teams to query verified career milestones strictly scoped to candidate-approved data.',
      'Cross-Platform Architecture: Integrated Apollo GraphQL, AWS S3 media uploads, Node.js services, Firebase, and Redux Toolkit for real-time state sync and smooth performance.',
    ],
    stack: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'Apollo GraphQL',
      'AWS S3',
      'Node.js',
      'Firebase',
      'HTML5 / CSS3',
      'JavaScript',
    ],
  },
  {
    id: 'collabact',
    title: 'CollabAct',
    subtitle: 'Sales Partner Platform',
    frameworkKey: 'flutter',
    frameworkLabel: 'Flutter / Dart',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'A cross-platform partner network empowering users aged 18–50 to earn unlimited income by becoming independent sales partners across Android and iOS.',
    featureChips: ['Flutter UI', 'REST APIs', 'Partner Tracking'],
    footerIcon: 'sync_saved_locally',
    footerMetric: 'Cross-Platform',
    playStoreUrl:
      'https://play.google.com/store/search?q=CollabAct+Sales+Partner&c=apps',
    appStoreUrl:
      'https://apps.apple.com/in/app/collabact-sales-partner/id6503295893',
    screenshots: ['/src/assets/images/arjun/collab.webp'],
    aspectMode: 'portrait',
    imageAlt: 'CollabAct Sales Partner Flutter mobile application preview',
    highlights: [
      'Partner onboarding, lead tracking, and commission workflows built cleanly in Flutter & Dart.',
      'Smooth 60 FPS animations and responsive layouts across Android and iOS devices.',
      'Real-time REST API synchronization for earnings history and partner milestones.',
    ],
    stack: ['Flutter', 'Dart', 'REST APIs', 'State Management', 'Play & App Store'],
  },
  {
    id: 'wokii',
    title: 'WOKII',
    subtitle: 'Social Payments & Live Chat · Deucetek LLC',
    frameworkKey: 'rn',
    frameworkLabel: 'React Native',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'Receive and send money with WOKII—the money transfer app combining peer-to-peer payments with private messenger, live video chat, voice chat, and text messaging.',
    featureChips: ['Chat + P2P', 'Live Video Chat', 'Voice & Text'],
    footerIcon: 'lock',
    footerMetric: 'Secure Transfers',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.wokiiapp&hl=en_IN',
    appStoreUrl:
      'https://apps.apple.com/us/app/wokii-messenger-cash-wallet/id6450460363',
    screenshots: ['/src/assets/images/arjun/Wokii.webp'],
    aspectMode: 'portrait',
    imageAlt: 'WOKII money transfer and social messaging mobile app preview',
    highlights: [
      'Combines instant send-and-receive money flows directly inside private chat threads.',
      'Supports live video chat, voice calling, and real-time text messaging on Android & iOS.',
      'Firebase push notifications and deep linking for instant transfer alerts.',
    ],
    stack: ['React Native', 'JavaScript / TS', 'REST APIs', 'Firebase', 'Real-time Calls'],
  },
  {
    id: 'homework-helper',
    title: 'HomeWork Helper',
    subtitle: 'AI Mobile Study Solver',
    frameworkKey: 'flutter',
    frameworkLabel: 'Flutter / Dart',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'AI-powered mobile study helper and homework solver providing fast, structured, and accurate solutions to school questions across Android and iOS.',
    featureChips: ['AI Solutions', 'Scan & Solve', 'Step-by-Step'],
    footerIcon: 'photo_camera',
    footerMetric: 'Fast Answers',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.omyteq.homework',
    appStoreUrl: 'https://apps.apple.com/us/search?term=HomeWork+Helper',
    screenshots: [
      '/src/assets/images/arjun/HomeWork_HM1.webp',
      '/src/assets/images/arjun/HomeWork_HM2.webp',
      '/src/assets/images/arjun/HomeWork_HM3.webp',
      '/src/assets/images/arjun/HomeWork_HM4.webp',
      '/src/assets/images/arjun/HomeWork_HM5.webp',
    ],
    aspectMode: 'portrait',
    imageAlt: 'HomeWork Helper Flutter AI study assistant mobile interface',
    highlights: [
      'Fast scan-to-answer student workflow with clean step-by-step explanations.',
      'Built with Flutter & Dart for consistent rendering across Android and iOS.',
      'Live on Google Play & App Store with a clean, distraction-free student interface.',
    ],
    stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'UI/UX Design'],
  },
  {
    id: 'btroomer',
    title: 'BTROOMER Tenant',
    subtitle: 'Property & Rent Management',
    frameworkKey: 'flutter',
    frameworkLabel: 'Flutter / Dart',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'Comprehensive tenant companion for managing rent payments, due dates, and rent history while simplifying accommodation search and PG amenity discovery.',
    featureChips: ['Rent History', 'Due Alerts', 'PG Discovery'],
    footerIcon: 'receipt_long',
    footerMetric: 'Payment Tracking',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.zucolgroup.tenant',
    appStoreUrl:
      'https://apps.apple.com/in/app/btroomer-tenant/id1591557191',
    screenshots: ['/src/assets/images/arjun/btRoomerwebp.webp'],
    aspectMode: 'portrait',
    imageAlt: 'BTROOMER Tenant Flutter property and rent management app preview',
    highlights: [
      'Tracks monthly rent due dates, payment receipts, and transparent rent history.',
      'Simplifies searching verified accommodations and inspecting PG amenities.',
      'Live on both Google Play and Apple App Store with responsive Flutter layouts.',
    ],
    stack: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Play & App Store'],
  },
  {
    id: 'doctolink',
    title: 'Doctolink',
    subtitle: 'Clinical Appointment Booking',
    frameworkKey: 'rn',
    frameworkLabel: 'React Native',
    secondaryBadge: 'iOS & Android',
    statusMetric: 'Play & App Store',
    platforms: 'Google Play & App Store',
    summary:
      'Makes it easy and secure to find doctors and book appointments 24/7. Search specialists by name, location, availability, or specialty across trusted clinics in El Salvador.',
    featureChips: ['24/7 Booking', 'Clinic Directory', 'Specialist Search'],
    footerIcon: 'medical_services',
    footerMetric: 'Trusted Clinics',
    playStoreUrl: 'https://play.google.com/store/search?q=DoctolinkApp&c=apps',
    appStoreUrl: 'https://apps.apple.com/us/app/doctolink/id6741566643',
    screenshots: ['/src/assets/images/arjun/doctolink.png'],
    aspectMode: 'portrait',
    imageAlt: 'Doctolink healthcare appointment booking app preview',
    highlights: [
      'Filter verified specialists by name, location, real-time availability, or specialty.',
      'Built for secure 24/7 booking across a national directory of clinics in El Salvador.',
      'Published on both Google Play Store and Apple App Store with full platform parity.',
    ],
    stack: ['React Native', 'TypeScript', 'React Navigation', 'REST APIs', 'Play & App Store'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'May 2026 — Present',
    role: 'Sr. Mobile Application Developer',
    company: 'JPLoft',
    location: 'Jaipur',
    summary:
      'Leading end-to-end architecture and delivery of scalable React Native and Flutter applications for global clients, driving native performance optimization, clean state design, and production release quality.',
    highlights: [
      'Architecting modular React Native and Flutter applications with strict TypeScript/Dart typing, offline-ready caching, and clean separation of concerns.',
      'Leading technical discovery, sprint estimation, and architecture reviews alongside backend, UI/UX, and QA teams to keep multi-platform releases on schedule.',
      'Optimizing rendering pipelines, memory usage, and native Kotlin/Swift bridges to sustain smooth 60 FPS interactions across mid-range Android and iOS devices.',
      'Mentoring junior mobile engineers through structured PR reviews, reusable component standards, and streamlined Google Play & Apple App Store release pipelines.',
    ],
  },
  {
    period: 'June 2025 — May 2026',
    role: 'Mobile Application Developer',
    company: 'Dev Technosys Private Limited',
    location: 'Jaipur',
    summary:
      'Engineering cross-platform React Native applications, REST API performance improvements, Firebase deep linking, and reusable UI architecture.',
    highlights: [
      'Built cross-platform task-tracking and note-taking apps using React Native, React Navigation, and centralized Redux state.',
      'Implemented Context API state management reducing redundant API calls by 10% and improved RESTful data fetching by 15%.',
      'Cut app load times by 20% via code optimization and lazy loading, and integrated Firebase push notifications & deep linking.',
      'Collaborated with QA engineers to reduce post-release bugs by 30% and built reusable Tailwind CSS & Styled Components layouts.',
    ],
  },
  {
    period: 'Sept 2023 — Apr 2025',
    role: 'Mobile Application Developer',
    company: 'ebizneeds Business Solutions Pvt. Ltd',
    location: 'Jaipur',
    summary:
      'Developed, maintained, and published high-scale cross-platform React Native apps serving 10,00,000+ users on Google Play and Apple App Store.',
    highlights: [
      'Developed and maintained 3 cross-platform React Native apps serving 10,00,000+ users with real-time chat and calling.',
      'Reduced code complexity by 15% through modular Redux and Context API architecture.',
      'Integrated native Kotlin and Swift modules for camera pipelines and push notifications, ensuring App Store & Play Store compliance.',
      'Built a React Native task management app featuring dynamic light and dark themes powered by Context API.',
    ],
  },
];

export const HONORS: HonorItem[] = [
  {
    id: 'ebizneeds',
    icon: 'workspace_premium',
    title: 'Dashing Debut Award',
    tag: 'eBizneeds',
    subtitle: 'Teamwork in React Native app supporting 10,00,000+ users',
    details:
      'Earned the eBizneeds Dashing Debut Award for teamwork in developing a high-scale React Native application serving over 1M+ users.',
  },
  {
    id: 'bsnl',
    icon: 'hub',
    title: 'BSNL Skill Certificate',
    tag: 'Telecom / IT',
    subtitle: 'Practical IT/telecom engineering & collaborative systems',
    details:
      'Skill Development Certificate from BSNL emphasizing practical IT/telecom engineering skills and collaborative learning environments.',
  },
  {
    id: 'hptu',
    icon: 'school',
    title: 'B.Tech Computer Science',
    tag: '2018 – 2022',
    subtitle: 'Himachal Pradesh Technical University, Hamirpur (HP)',
    details:
      'Specialized in software engineering with completed projects in cross-platform mobile app development and cloud computing.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Software Developer (Internship)',
    organization: 'Mobzway Technologies, Jaipur',
    year: '2022',
  },
  {
    title: 'Web Design',
    organization: 'ThinkNEXT Technologies, Punjab',
    year: '2020',
  },
];

export const ARCHITECTURE_BLOCKS: ArchitectureBlock[] = [
  {
    label: 'Frameworks',
    value: 'React Native & Flutter',
  },
  {
    label: 'Languages',
    value: 'TypeScript, JS & Dart',
  },
  {
    label: 'State & APIs',
    value: 'Redux, Context & REST',
  },
  {
    label: 'Native & Cloud',
    value: 'Firebase, Kotlin & Swift',
  },
];
