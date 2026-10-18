import { assetPath } from "@/lib/asset-path";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type ServicePillarName = "BUILD" | "AUTOMATE" | "SECURE" | "SCALE";

export interface Service {
  id: string;
  title: string;
  pillar: ServicePillarName;
  icon: string;
  description: string;
}

export interface ServicePillar {
  number: string;
  title: ServicePillarName;
  description: string;
  theme: "light" | "moss" | "forest" | "deep-forest";
  artwork: string;
  pageArtwork: string;
  texture: string | null;
  ctaLabel: string;
  services: readonly Service[];
}

export const servicePillars = [
  {
    number: "01",
    title: "BUILD",
    description: "Digital products and business systems designed around real operational needs.",
    theme: "light",
    artwork: assetPath("/assets/services-section-decorative-assets/build-gear.svg"),
    pageArtwork: assetPath("/assets/services-page-codex-handoff/assets/build-gear.svg"),
    texture: null,
    ctaLabel: "BUILD BETTER",
    services: [
      { id: "website-design", title: "Website Design", pillar: "BUILD", icon: assetPath("/assets/icons/website-design-development.svg"), description: "Strategic, responsive digital experiences shaped around your brand, your audience and the actions you want visitors to take." },
      { id: "web-development", title: "Web Development", pillar: "BUILD", icon: assetPath("/assets/icons/web-development.svg"), description: "Fast, accessible websites built to support your content, business requirements and future integrations." },
      { id: "custom-software-development", title: "Custom Software Development", pillar: "BUILD", icon: assetPath("/assets/icons/software-engineering.svg"), description: "Purpose-built software designed around your workflows, integrations and operational requirements." },
      { id: "systems-built-from-scratch", title: "Systems Built From Scratch", pillar: "BUILD", icon: assetPath("/assets/icons/system-architecture.svg"), description: "Complete business systems engineered from the ground up, from data models and architecture to deployment and everyday use." },
      { id: "ux-ui-design", title: "UX/UI Design", pillar: "BUILD", icon: assetPath("/assets/icons/design.svg"), description: "Research-informed user journeys and interfaces that make complex tasks clearer, more consistent and easier to complete." },
      { id: "e-commerce", title: "E-commerce", pillar: "BUILD", icon: assetPath("/assets/icons/e-commerce.svg"), description: "Online stores with practical product, payment and order-management journeys, connected to the way your business operates." },
      { id: "web-applications", title: "Web Applications", pillar: "BUILD", icon: assetPath("/assets/icons/web-application.svg"), description: "Browser-based applications that turn business requirements into secure, responsive tools for customers and teams." },
      { id: "business-portals", title: "Business Portals", pillar: "BUILD", icon: assetPath("/assets/icons/business-portal.svg"), description: "Centralised workspaces for customers, partners or staff, with role-based access to the information and tasks they need." },
      { id: "apis-integrations", title: "APIs & Integrations", pillar: "BUILD", icon: assetPath("/assets/icons/api-integration.svg"), description: "Well-defined APIs and reliable connections that let your applications exchange information and work together." },
      { id: "database-backed-systems", title: "Database-backed Systems", pillar: "BUILD", icon: assetPath("/assets/icons/database.svg"), description: "Structured data platforms with dependable storage, validation and retrieval to support your business applications." },
    ],
  },
  {
    number: "02",
    title: "AUTOMATE",
    description: "Streamline delivery, infrastructure and business processes through automation.",
    theme: "moss",
    artwork: assetPath("/assets/services-section-decorative-assets/automate-flow.svg"),
    pageArtwork: assetPath("/assets/services-page-codex-handoff/assets/automate-flow.svg"),
    texture: assetPath("/assets/services-section-decorative-assets/forest-terrain-texture.svg"),
    ctaLabel: "AUTOMATE OPERATIONS",
    services: [
      { id: "devops", title: "DevOps", pillar: "AUTOMATE", icon: assetPath("/assets/icons/devops.svg"), description: "Build, test and deployment practices that improve delivery consistency and connect software development with reliable operations." },
      { id: "ci-cd", title: "CI/CD", pillar: "AUTOMATE", icon: assetPath("/assets/icons/ci-cd.svg"), description: "Automated integration, testing and release pipelines that help teams deliver changes with repeatable checks and less manual work." },
      { id: "cloud-infrastructure", title: "Cloud Infrastructure", pillar: "AUTOMATE", icon: assetPath("/assets/icons/cloud-devops.svg"), description: "Cloud environments designed around your workloads, with considered networking, access, resilience and operating costs." },
      { id: "infrastructure-automation", title: "Infrastructure Automation", pillar: "AUTOMATE", icon: assetPath("/assets/icons/infrastructure-automation.svg"), description: "Repeatable infrastructure provisioning and configuration that reduces manual setup and keeps environments consistent." },
      { id: "workflow-automation", title: "Workflow Automation", pillar: "AUTOMATE", icon: assetPath("/assets/icons/workflow-automation.svg"), description: "Connected triggers, approvals and actions that move everyday work between people and systems with fewer manual hand-offs." },
      { id: "business-process-automation", title: "Business Process Automation", pillar: "AUTOMATE", icon: assetPath("/assets/icons/business-process-automation.svg"), description: "Automation of repetitive business processes to reduce rekeying, improve consistency and give teams clearer operational visibility." },
      { id: "systems-integration", title: "Systems Integration", pillar: "AUTOMATE", icon: assetPath("/assets/icons/systems-integration.svg"), description: "Connections between existing platforms that align data and processes without forcing your team to work in separate silos." },
      { id: "data-pipelines", title: "Data Pipelines", pillar: "AUTOMATE", icon: assetPath("/assets/icons/data-pipeline.svg"), description: "Reliable flows that collect, transform and deliver data between sources, applications and reporting tools." },
      { id: "monitoring-observability", title: "Monitoring & Observability", pillar: "AUTOMATE", icon: assetPath("/assets/icons/observability.svg"), description: "Metrics, logs and alerts that make system behaviour visible and help teams investigate problems and respond sooner." },
    ],
  },
  {
    number: "03",
    title: "SECURE",
    description: "Build security into applications, infrastructure and everyday operations.",
    theme: "forest",
    artwork: assetPath("/assets/services-section-decorative-assets/secure-shield.svg"),
    pageArtwork: assetPath("/assets/services-page-codex-handoff/assets/secure-shield.svg"),
    texture: assetPath("/assets/services-section-decorative-assets/forest-terrain-texture.svg"),
    ctaLabel: "STRENGTHEN SECURITY",
    services: [
      { id: "cybersecurity", title: "Cybersecurity", pillar: "SECURE", icon: assetPath("/assets/icons/cybersecurity.svg"), description: "Practical security controls designed to protect applications, infrastructure, identities and day-to-day business operations." },
      { id: "application-security", title: "Application Security", pillar: "SECURE", icon: assetPath("/assets/icons/application-security.svg"), description: "Security built into application design and delivery, including access controls, input handling and review of common attack paths." },
      { id: "identity-access-management", title: "Identity & Access Management", pillar: "SECURE", icon: assetPath("/assets/icons/identity-access.svg"), description: "User identities, authentication and permissions structured so people can access the systems they need with appropriate safeguards." },
      { id: "infrastructure-hardening", title: "Infrastructure Hardening", pillar: "SECURE", icon: assetPath("/assets/icons/infrastructure-hardening.svg"), description: "Secure configuration of servers, networks and cloud resources to reduce unnecessary exposure and strengthen operational controls." },
      { id: "security-monitoring", title: "Security Monitoring", pillar: "SECURE", icon: assetPath("/assets/icons/security-monitoring.svg"), description: "Visibility into security events and suspicious activity, with actionable alerts to support investigation and response." },
      { id: "vulnerability-management", title: "Vulnerability Management", pillar: "SECURE", icon: assetPath("/assets/icons/vulnerability-management.svg"), description: "A repeatable approach to finding, prioritising and addressing weaknesses across applications and infrastructure." },
      { id: "backup-recovery", title: "Backup & Recovery", pillar: "SECURE", icon: assetPath("/assets/icons/backup-recovery.svg"), description: "Backup and restore arrangements built around your critical data and recovery needs, with checks that recovery works in practice." },
      { id: "security-assessments", title: "Security Assessments", pillar: "SECURE", icon: assetPath("/assets/icons/security-assessment.svg"), description: "Focused reviews of technology, configuration and controls, with prioritised findings and practical remediation guidance." },
    ],
  },
  {
    number: "04",
    title: "SCALE",
    description: "Ongoing technology, digital and managed services that help businesses grow.",
    theme: "deep-forest",
    artwork: assetPath("/assets/services-section-decorative-assets/scale-growth.svg"),
    pageArtwork: assetPath("/assets/services-page-codex-handoff/assets/scale-growth.svg"),
    texture: assetPath("/assets/services-section-decorative-assets/forest-terrain-texture.svg"),
    ctaLabel: "SCALE WITH CONFIDENCE",
    services: [
      { id: "managed-it-msp-services", title: "Managed IT / MSP Services", pillar: "SCALE", icon: assetPath("/assets/icons/managed-services.svg"), description: "Proactive support, infrastructure management and monitoring for organisations that need dependable day-to-day technology operations." },
      { id: "it-support", title: "IT Support", pillar: "SCALE", icon: assetPath("/assets/icons/ongoing-support.svg"), description: "Practical help with user, device and system issues so your team can resolve disruptions and keep working." },
      { id: "infrastructure-management", title: "Infrastructure Management", pillar: "SCALE", icon: assetPath("/assets/icons/infrastructure-management.svg"), description: "Ongoing administration of servers, networks and cloud resources, including configuration, updates and operational oversight." },
      { id: "website-maintenance", title: "Website Maintenance", pillar: "SCALE", icon: assetPath("/assets/icons/website-maintenance.svg"), description: "Regular website updates, dependency care and technical checks that keep your digital presence supported as it evolves." },
      { id: "application-maintenance", title: "Application Maintenance", pillar: "SCALE", icon: assetPath("/assets/icons/application-maintenance.svg"), description: "Continued care for business applications, from fixes and dependency updates to improvements as requirements change." },
      { id: "hosting", title: "Hosting", pillar: "SCALE", icon: assetPath("/assets/icons/cloud-devops.svg"), description: "Hosting environments configured for your websites and applications, with deployment, monitoring and recovery requirements in mind." },
      { id: "performance-optimisation", title: "Performance Optimisation", pillar: "SCALE", icon: assetPath("/assets/icons/performance.svg"), description: "Investigation and improvement of application, website and infrastructure bottlenecks to make better use of available resources." },
      { id: "seo-optimisation", title: "SEO Optimisation", pillar: "SCALE", icon: assetPath("/assets/icons/search-seo.svg"), description: "Technical and on-page improvements to crawlability, structure and search visibility, grounded in the way your website is built." },
      { id: "digital-marketing", title: "Digital Marketing", pillar: "SCALE", icon: assetPath("/assets/icons/digital-marketing.svg"), description: "Coordinated digital campaigns and content that connect your offering with the right audiences and measurable business goals." },
      { id: "analytics-reporting", title: "Analytics & Reporting", pillar: "SCALE", icon: assetPath("/assets/icons/analytics.svg"), description: "Clear measurement, dashboards and reporting that turn operational and digital activity into information your team can use." },
      { id: "ongoing-technical-support", title: "Ongoing Technical Support", pillar: "SCALE", icon: assetPath("/assets/icons/ongoing-support.svg"), description: "A continuing technical partner for troubleshooting, guidance and improvements as your systems and business needs evolve." },
    ],
  },
] as const satisfies readonly ServicePillar[];

export const values = [
  {
    title: "Business First",
    description: "We start with the business problem, not the technology.",
    icon: assetPath("/assets/icons/business-first.svg"),
  },
  {
    title: "Built to Last",
    description: "Architecture, maintainability and scalability are considered from day one.",
    icon: assetPath("/assets/icons/built-to-last.svg"),
  },
  {
    title: "One Partner, Multiple Disciplines",
    description: "Software, cloud, security, digital and support capabilities under one roof.",
    icon: assetPath("/assets/icons/one-partner.svg"),
  },
  {
    title: "Flexible Expertise",
    description: "The right skills and specialists are brought into each engagement as required.",
    icon: assetPath("/assets/icons/flexible-expertise.svg"),
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users, constraints and opportunity.",
  },
  {
    number: "02",
    title: "Design",
    description: "Define the right strategy, architecture and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop, integrate, automate and test the solution.",
  },
  {
    number: "04",
    title: "Operate",
    description: "Support, monitor, improve and scale the solution over time.",
  },
] as const;

export const supportingServices = [
  {
    title: "Managed Services",
    description: "Proactive IT support, infrastructure management and monitoring.",
    icon: assetPath("/assets/icons/managed-services.svg"),
  },
  {
    title: "Website Design & Development",
    description: "Professional, responsive and conversion-focused websites and web applications.",
    icon: assetPath("/assets/icons/website-design-development.svg"),
  },
  {
    title: "SEO & Digital Growth",
    description: "Technical SEO, search visibility, analytics and digital marketing.",
    icon: assetPath("/assets/icons/seo-digital-growth.svg"),
  },
  {
    title: "Ongoing Support",
    description: "Long-term application, website and infrastructure support.",
    icon: assetPath("/assets/icons/ongoing-support.svg"),
  },
] as const;
