/**
 * MAULI INFRA — Property Advisor Portfolio & Discovery Platform
 * Central Configuration, Typed Data Models & Shared UI Engine
 */

const DEMO_CONFIG = {
  DEMO_MODE: true,
  version: "1.0-Demo-Prototype",
  preparedFor: "Initial presentation to Mauli Infra management",
  globalDisclaimer: "DEMONSTRATION PROTOTYPE — All project names, property listings, prices, availability states, and EMI calculations are illustrative sample data. Not an official offer or live Mauli Infra inventory."
};

/**
 * Primary Demo Advisor Seed Data (Strictly adhering to supplied facts)
 */
const ADVISOR_PROFILE = {
  id: "adv-vijay-khavse",
  slug: "vijay-khavse",
  fullName: "Vijay Khavse",
  designation: "Business Manager",
  companyName: "Mauli Infra (Demo Proposal)",
  profileImage: null, // Not supplied — must use placeholder
  contactNumbers: ["9022558612", "7387282862"],
  whatsappNumber: "919022558612",
  email: "vijaykhavse93@gmail.com",
  experienceLabel: "5yrs+",
  experienceYears: 5,
  familiesServedLabel: "800+",
  familiesServedCount: 800,
  introduction: null, // To be confirmed by Mauli Infra
  strengths: [], // To be confirmed
  expertiseAreas: [], // Corridor examples kept separate as unverified demo filters
  languages: [], // To be confirmed
  candidateCorridors: ["Wardha Road", "MIHAN", "Besa", "Butibori"],
  testimonials: [], // Zero fabricated testimonials
  achievements: [], // Zero fabricated awards
  publicationConsentStatus: "pending",
  profileStatus: "demo"
};

/**
 * Sample Illustrative Projects (Clearly fictional/illustrative for demo evaluation)
 */
const DEMO_PROJECTS = [
  {
    id: "proj-sample-01",
    slug: "sample-wardha-corridor-enclave",
    name: "Sample Project Alpha — Wardha Road Corridor",
    corridor: "Wardha Road",
    city: "Nagpur",
    state: "Maharashtra",
    category: "Plotted Residential Development (Illustrative)",
    advisorRole: "Candidate Focus Corridor (Pending Verification)",
    summary: "Illustrative residential layout placeholder used to demonstrate project filtering and linked inventory cards.",
    reraNote: "RERA / Approval ID: To be supplied & verified by Mauli Infra",
    isDemo: true
  },
  {
    id: "proj-sample-02",
    slug: "sample-mihan-growth-sector",
    name: "Sample Project Beta — MIHAN Vicinity Sector",
    corridor: "MIHAN",
    city: "Nagpur",
    state: "Maharashtra",
    category: "Mixed Plotted & Investment Zone (Illustrative)",
    advisorRole: "Candidate Focus Corridor (Pending Verification)",
    summary: "Fictional sample development near the MIHAN growth corridor demonstrating multi-unit discovery and budget matching.",
    reraNote: "RERA / Approval ID: To be supplied & verified by Mauli Infra",
    isDemo: true
  },
  {
    id: "proj-sample-03",
    slug: "sample-besa-urban-residences",
    name: "Sample Project Gamma — Besa Residential Pocket",
    corridor: "Besa",
    city: "Nagpur",
    state: "Maharashtra",
    category: "Residential Apartments & Plots (Illustrative)",
    advisorRole: "Company Portfolio Sample (Illustrative)",
    summary: "Illustrative urban residential project showcasing family-oriented apartment and plot configurations.",
    reraNote: "RERA / Approval ID: To be supplied & verified by Mauli Infra",
    isDemo: true
  },
  {
    id: "proj-sample-04",
    slug: "sample-butibori-industrial-link",
    name: "Sample Project Delta — Butibori Highway Corridor",
    corridor: "Butibori",
    city: "Nagpur",
    state: "Maharashtra",
    category: "Commercial & Land Parcel Layout (Illustrative)",
    advisorRole: "Company Portfolio Sample (Illustrative)",
    summary: "Sample highway-connected layout illustrating long-term land and commercial plot discovery.",
    reraNote: "RERA / Approval ID: To be supplied & verified by Mauli Infra",
    isDemo: true
  }
];

/**
 * Central Demo Property Dataset (All items flagged isDemo: true)
 */
const DEMO_PROPERTIES = [
  {
    id: "prop-101",
    slug: "sample-plot-wardha-road-1500",
    projectId: "proj-sample-01",
    title: "Sample Residential Plot — Wardha Road Sector A",
    propertyType: "plot",
    purpose: "residential",
    location: {
      area: "Wardha Road",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative Sector A, Wardha Road Corridor (Exact coordinates pending Mauli Infra verification)"
    },
    price: 2700000,
    priceLabel: "₹27.00 Lakh (Illustrative Total Price)",
    areaValue: 1500,
    areaUnit: "sqft",
    unitPriceLabel: "₹1,800 / sq.ft (Sample Rate)",
    bedrooms: null,
    description: "Fictional sample residential plot entry created to demonstrate budget filtering, unit-price transparency, and direct EMI estimation.",
    features: [
      "Sample Internal Concrete Road (Illustrative)",
      "Sample Underground Drainage Provision (Illustrative)",
      "Demarcated Corner Plot Sample (Illustrative)",
      "Street Lighting Placeholder (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "blueprint-plot"
  },
  {
    id: "prop-102",
    slug: "sample-plot-mihan-1200",
    projectId: "proj-sample-02",
    title: "Sample Investment Plot — MIHAN Vicinity Layout",
    propertyType: "plot",
    purpose: "investment",
    location: {
      area: "MIHAN",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative Zone 2, Near MIHAN Outer Ring (Exact location pending verification)"
    },
    price: 2160000,
    priceLabel: "₹21.60 Lakh (Illustrative Total Price)",
    areaValue: 1200,
    areaUnit: "sqft",
    unitPriceLabel: "₹1,800 / sq.ft (Sample Rate)",
    bedrooms: null,
    description: "Illustrative mid-budget plot sample near MIHAN designed to showcase first-time buyer and land-investor filtering.",
    features: [
      "30 ft Sample Approach Road (Illustrative)",
      "Green Buffer Zone Adjacent (Illustrative)",
      "Clear Sample Demarcation Stones (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "grid-layout"
  },
  {
    id: "prop-103",
    slug: "sample-3bhk-besa-1450",
    projectId: "proj-sample-03",
    title: "Sample 3 BHK Family Residence — Besa Main Corridor",
    propertyType: "apartment",
    purpose: "residential",
    location: {
      area: "Besa",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative Avenue, Besa Pocket (Exact site address pending verification)"
    },
    price: 5800000,
    priceLabel: "₹58.00 Lakh (Illustrative Total Price)",
    areaValue: 1450,
    areaUnit: "sqft",
    unitPriceLabel: "₹4,000 / sq.ft Carpet/Built-up (Sample Rate)",
    bedrooms: 3,
    description: "Sample 3 BHK apartment listing illustrating bedroom configuration filters, family home discovery, and monthly EMI comparison.",
    features: [
      "3 Bedrooms + Living Balcony Sample (Illustrative)",
      "Covered Parking Slot Placeholder (Illustrative)",
      "Elevator & Power Backup Sample (Illustrative)",
      "Security Cabin Provision (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "elevation-apt"
  },
  {
    id: "prop-104",
    slug: "sample-plot-butibori-2000",
    projectId: "proj-sample-04",
    title: "Sample Highway-Touch Plot — Butibori Sector",
    propertyType: "plot",
    purpose: "investment",
    location: {
      area: "Butibori",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative NH-44 Link Sector, Butibori (Exact coordinates pending verification)"
    },
    price: 1800000,
    priceLabel: "₹18.00 Lakh (Illustrative Total Price)",
    areaValue: 2000,
    areaUnit: "sqft",
    unitPriceLabel: "₹900 / sq.ft (Sample Rate)",
    bedrooms: null,
    description: "Accessible budget sample listing in Butibori to demonstrate entry-level price bands and large plot-size filtering.",
    features: [
      "Large 2,000 sq.ft Sample Footprint (Illustrative)",
      "Wide Entrance Arch Placeholder (Illustrative)",
      "Open Utility Space Sample (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "corridor-plot"
  },
  {
    id: "prop-105",
    slug: "sample-2bhk-besa-1100",
    projectId: "proj-sample-03",
    title: "Sample 2 BHK Compact Apartment — Besa East",
    propertyType: "apartment",
    purpose: "residential",
    location: {
      area: "Besa",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative Block C, Besa East (Exact site address pending verification)"
    },
    price: 4180000,
    priceLabel: "₹41.80 Lakh (Illustrative Total Price)",
    areaValue: 1100,
    areaUnit: "sqft",
    unitPriceLabel: "₹3,800 / sq.ft (Sample Rate)",
    bedrooms: 2,
    description: "Illustrative 2 BHK residential option demonstrating mid-segment family housing and EMI affordability tools.",
    features: [
      "2 Bedrooms with Dual Balconies (Illustrative)",
      "Modular Kitchen Space Provision (Illustrative)",
      "Rainwater Harvesting Sample Note (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "elevation-apt"
  },
  {
    id: "prop-106",
    slug: "sample-commercial-wardha-road-2400",
    projectId: "proj-sample-01",
    title: "Sample Commercial Corner Parcel — Wardha Road",
    propertyType: "commercial",
    purpose: "commercial",
    location: {
      area: "Wardha Road",
      city: "Nagpur",
      state: "Maharashtra",
      address: "Illustrative Frontage Zone, Wardha Road (Exact address pending verification)"
    },
    price: 7680000,
    priceLabel: "₹76.80 Lakh (Illustrative Total Price)",
    areaValue: 2400,
    areaUnit: "sqft",
    unitPriceLabel: "₹3,200 / sq.ft (Sample Rate)",
    bedrooms: null,
    description: "Sample commercial frontage parcel illustrating commercial property-type filtering and higher-ticket EMI scenarios.",
    features: [
      "60 ft Sample Frontage Road Access (Illustrative)",
      "Commercial Utility Bay Sample (Illustrative)",
      "Dual-Side Access Corner Layout (Illustrative)"
    ],
    availabilityStatus: "unknown",
    availabilityLabel: "Not Verified (Demo Sample)",
    isDemo: true,
    demoDisclaimer: "Demo listing — details, pricing, and availability are illustrative and not verified.",
    svgTheme: "commercial-grid"
  }
];

/**
 * Formatting & Currency Helpers (Indian Numbering System)
 */
function formatINR(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return "₹0";
  const rounded = Math.round(Number(amount));
  return "₹" + rounded.toLocaleString("en-IN");
}

function formatINRLakhCrore(amount) {
  const num = Number(amount);
  if (isNaN(num) || num <= 0) return "₹0";
  if (num >= 10000000) {
    return "₹" + (num / 10000000).toFixed(2) + " Cr";
  }
  if (num >= 100000) {
    return "₹" + (num / 100000).toFixed(2) + " Lakh";
  }
  return formatINR(num);
}

/**
 * Pure EMI Calculation Function (Handles normal, zero-interest & edge cases)
 */
function calculateEMI(principal, annualInterestRate, tenureYears) {
  const P = Math.max(0, Number(principal) || 0);
  const annualRate = Math.max(0, Number(annualInterestRate) || 0);
  const years = Math.max(0, Number(tenureYears) || 0);
  const n = Math.round(years * 12);

  if (P === 0 || n === 0) {
    return { emi: 0, totalPayable: 0, totalInterest: 0, principal: P, months: n };
  }

  if (annualRate === 0) {
    const emiZero = P / n;
    return {
      emi: Math.round(emiZero),
      totalPayable: Math.round(P),
      totalInterest: 0,
      principal: Math.round(P),
      months: n
    };
  }

  const r = annualRate / 12 / 100;
  const factor = Math.pow(1 + r, n);
  const emi = (P * r * factor) / (factor - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - P;

  return {
    emi: Math.round(emi),
    totalPayable: Math.round(totalPayable),
    totalInterest: Math.round(totalInterest),
    principal: Math.round(P),
    months: n
  };
}

/**
 * Generate Encoded WhatsApp URL (Does not send automatically)
 */
function buildWhatsAppURL(customText) {
  const baseMsg = customText || `Hello ${ADVISOR_PROFILE.fullName}, I viewed your Mauli Infra demo advisor portfolio and would like to discuss property options.`;
  return `https://wa.me/${ADVISOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(baseMsg)}`;
}

/**
 * Architectural SVG Artwork Generator (Avoids unverified stock photography)
 */
function renderArchitecturalSVG(theme, codeLabel) {
  const label = codeLabel || "SAMPLE-CAD";
  return `
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative architectural diagram — not an actual project photograph">
      <rect width="400" height="220" fill="#0B132B"/>
      <g stroke="rgba(255,255,255,0.08)" stroke-width="1">
        <line x1="0" y1="40" x2="400" y2="40"/><line x1="0" y1="80" x2="400" y2="80"/>
        <line x1="0" y1="120" x2="400" y2="120"/><line x1="0" y1="160" x2="400" y2="160"/>
        <line x1="60" y1="0" x2="60" y2="220"/><line x1="120" y1="0" x2="120" y2="220"/>
        <line x1="180" y1="0" x2="180" y2="220"/><line x1="240" y1="0" x2="240" y2="220"/>
        <line x1="300" y1="0" x2="300" y2="220"/><line x1="360" y1="0" x2="360" y2="220"/>
      </g>
      ${theme === "elevation-apt" ? `
        <rect x="90" y="38" width="110" height="142" fill="rgba(200,109,81,0.16)" stroke="#C86D51" stroke-width="1.6"/>
        <rect x="200" y="62" width="110" height="118" fill="rgba(255,255,255,0.05)" stroke="#94A3B8" stroke-width="1.4"/>
        <line x1="90" y1="75" x2="200" y2="75" stroke="#C86D51" stroke-width="1"/>
        <line x1="90" y1="110" x2="310" y2="110" stroke="#C86D51" stroke-width="1"/>
        <line x1="90" y1="145" x2="310" y2="145" stroke="#C86D51" stroke-width="1"/>
      ` : `
        <rect x="70" y="42" width="260" height="130" fill="rgba(200,109,81,0.12)" stroke="#C86D51" stroke-width="1.6" stroke-dasharray="5,3"/>
        <line x1="155" y1="42" x2="155" y2="172" stroke="#C86D51" stroke-width="1.2"/>
        <line x1="245" y1="42" x2="245" y2="172" stroke="#C86D51" stroke-width="1.2"/>
        <line x1="70" y1="106" x2="330" y2="106" stroke="#94A3B8" stroke-width="1.2"/>
        <circle cx="155" cy="106" r="4" fill="#FDBA74"/>
        <circle cx="245" cy="106" r="4" fill="#FDBA74"/>
      `}
      <text x="16" y="25" fill="#FDBA74" font-family="JetBrains Mono, monospace" font-size="10">${label}</text>
    </svg>
  `;
}

/**
 * Property Card HTML Generator
 */
function renderPropertyCard(prop, matchReasons = []) {
  const estLoan = prop.price * 0.8;
  const emiObj = calculateEMI(estLoan, 8.75, 20);
  const reasonsHtml = matchReasons.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:0.65rem;">
        ${matchReasons.map(r => `<span class="demo-badge-inline" style="background:#ECFDF5;border-color:#10B981;color:#065F46;">✓ ${r}</span>`).join("")}
       </div>`
    : "";

  return `
    <article class="card card-hover" data-prop-id="${prop.id}" style="display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div class="prop-media">
          ${renderArchitecturalSVG(prop.svgTheme, prop.id.toUpperCase())}
          <div class="prop-media-overlay-top">
            <span class="tag-type">${prop.propertyType} • ${prop.purpose}</span>
            <span class="demo-pill">DEMO LISTING</span>
          </div>
          <div class="prop-media-caption">Illustrative image — not an actual project photograph</div>
        </div>
        <div class="card-body">
          ${reasonsHtml}
          <div style="font-size:0.76rem;color:var(--slate-600);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.25rem;">
            ${prop.location.area}, ${prop.location.city}
          </div>
          <h3 class="serif-heading" style="font-size:1.3rem;color:var(--navy-900);margin-bottom:0.5rem;">
            <a href="./property-detail.html?slug=${prop.slug}">${prop.title}</a>
          </h3>
          <p style="font-size:0.85rem;color:var(--slate-600);margin-bottom:0.9rem;">
            ${prop.description}
          </p>
          <div style="background:var(--bg-stone);padding:0.75rem;border-radius:var(--radius-sm);margin-bottom:0.9rem;">
            <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.4rem;">
              <span class="mono-num" style="font-size:1.15rem;font-weight:700;color:var(--navy-900);">${formatINRLakhCrore(prop.price)}</span>
              <span style="font-size:0.72rem;color:var(--amber-text);font-weight:600;">Illustrative Demo Price</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--slate-700);margin-top:0.35rem;">
              <span>Area: <strong>${prop.areaValue.toLocaleString("en-IN")} ${prop.areaUnit}</strong></span>
              <span>${prop.unitPriceLabel}</span>
            </div>
            <div style="font-size:0.76rem;color:var(--slate-600);margin-top:0.3rem;padding-top:0.3rem;border-top:1px dashed var(--slate-300);">
              Indicative EMI (~80% loan): <strong class="mono-num">${formatINR(emiObj.emi)}/mo</strong>
            </div>
          </div>
          <div style="font-size:0.74rem;color:var(--slate-600);margin-bottom:0.5rem;">
            Status: <span class="verified-pending-badge">${prop.availabilityLabel}</span>
          </div>
        </div>
      </div>
      <div style="padding:0 1.5rem 1.25rem;display:flex;flex-wrap:wrap;gap:0.5rem;">
        <a href="./property-detail.html?slug=${prop.slug}" class="btn btn-primary btn-sm" style="flex:1;">View Details</a>
        <a href="./emi-calculator.html?price=${prop.price}&title=${encodeURIComponent(prop.title)}" class="btn btn-outline btn-sm" title="Calculate indicative EMI">EMI Tool</a>
      </div>
    </article>
  `;
}

/**
 * Shared Header, Demo Notice & Footer Injection
 */
function initSharedLayout(activePage, breadcrumbs = []) {
  const headerMount = document.getElementById("global-header");
  const footerMount = document.getElementById("global-footer");

  const navItems = [
    { id: "home", label: "Advisor Home", href: "./index.html" },
    { id: "about", label: "About Vijay", href: "./about.html" },
    { id: "projects", label: "Projects & Corridors", href: "./projects.html" },
    { id: "properties", label: "Property Finder", href: "./properties.html" },
    { id: "emi", label: "EMI & Budget Tool", href: "./emi-calculator.html" },
    { id: "contact", label: "Contact & Site Visit", href: "./contact.html" }
  ];

  if (headerMount) {
    const breadcrumbHtml = breadcrumbs.length > 0 ? `
      <nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumb-list">
            <li><a href="./index.html">Advisor Home</a></li>
            ${breadcrumbs.map((b, idx) => idx === breadcrumbs.length - 1
              ? `<li aria-current="page" style="color:var(--navy-900);font-weight:600;">${b.label}</li>`
              : `<li><a href="${b.href}">${b.label}</a></li>`
            ).join("")}
          </ol>
        </div>
      </nav>
    ` : "";

    headerMount.innerHTML = `
      <div class="demo-top-bar" role="region" aria-label="Demonstration Prototype Notice">
        <div class="container demo-top-bar-inner">
          <div>
            <span class="demo-pill">DEMO / SAMPLE DATA</span>
            <span style="margin-left:8px;">Proposal prototype for <strong>Mauli Infra</strong> evaluation. Sample listings, prices & availability are not live.</span>
          </div>
          <a href="./contact.html#disclaimer" style="color:#FDBA74;text-decoration:underline;font-weight:600;">Read Demo Disclaimer</a>
        </div>
      </div>
      <header class="site-header">
        <div class="container header-inner">
          <a href="./index.html" class="brand-mark" aria-label="Mauli Infra Advisor Portfolio Home">
            <div class="brand-monogram">MI</div>
            <div class="brand-text-wrap">
              <span class="brand-title">MAULI INFRA</span>
              <span class="brand-subtitle">${ADVISOR_PROFILE.fullName} • ${ADVISOR_PROFILE.designation}</span>
            </div>
          </a>
          <ul class="nav-links" role="menubar">
            ${navItems.map(item => `
              <li role="none">
                <a role="menuitem" href="${item.href}" class="nav-link ${activePage === item.id ? "active" : ""}">${item.label}</a>
              </li>
            `).join("")}
          </ul>
          <div class="header-actions">
            <a href="${buildWhatsAppURL()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="display:none;" id="desktop-wa-btn">
              WhatsApp Advisor
            </a>
            <button type="button" class="mobile-menu-btn" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="Toggle navigation menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mobile-nav-drawer" id="mobile-nav-drawer">
          <ul class="mobile-nav-list">
            ${navItems.map(item => `
              <li><a href="${item.href}" class="${activePage === item.id ? "active" : ""}">${item.label}</a></li>
            `).join("")}
          </ul>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <a href="tel:${ADVISOR_PROFILE.contactNumbers[0]}" class="btn btn-primary btn-sm" style="flex:1;">Call ${ADVISOR_PROFILE.contactNumbers[0]}</a>
            <a href="${buildWhatsAppURL()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="flex:1;">WhatsApp</a>
          </div>
        </div>
      </header>
      ${breadcrumbHtml}
    `;

    // Show desktop WhatsApp CTA on wider screens
    const desktopWa = document.getElementById("desktop-wa-btn");
    if (desktopWa && window.innerWidth >= 680) {
      desktopWa.style.display = "inline-flex";
    }
    window.addEventListener("resize", () => {
      if (desktopWa) desktopWa.style.display = window.innerWidth >= 680 ? "inline-flex" : "none";
    });

    const menuToggle = document.getElementById("mobile-menu-toggle");
    const menuDrawer = document.getElementById("mobile-nav-drawer");
    if (menuToggle && menuDrawer) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menuDrawer.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:0.85rem;">
                <div class="brand-monogram" style="width:36px;height:36px;font-size:1.1rem;">MI</div>
                <span class="serif-heading" style="font-size:1.3rem;color:#FFFFFF;">MAULI INFRA</span>
              </div>
              <p style="color:#94A3B8;margin-bottom:1rem;font-size:0.84rem;">
                Property Advisor Portfolio & Discovery Platform (Demonstration Prototype). Connecting buyers with structured property discovery and transparent financial estimation tools.
              </p>
              <span class="demo-pill">PROPOSAL PROTOTYPE • NOT LIVE</span>
            </div>
            <div>
              <h3 class="footer-heading">Platform Navigation</h3>
              <ul class="footer-links">
                <li><a href="./index.html">Advisor Home</a></li>
                <li><a href="./about.html">About ${ADVISOR_PROFILE.fullName}</a></li>
                <li><a href="./projects.html">Projects & Corridors</a></li>
                <li><a href="./properties.html">Property Finder & Compare</a></li>
                <li><a href="./emi-calculator.html">EMI & Affordability Calculator</a></li>
              </ul>
            </div>
            <div>
              <h3 class="footer-heading">Lead & Policy Pages</h3>
              <ul class="footer-links">
                <li><a href="./contact.html">Enquire with Advisor</a></li>
                <li><a href="./contact.html?tab=visit">Request a Site Visit</a></li>
                <li><a href="./contact.html#privacy">Draft Privacy Notice</a></li>
                <li><a href="./contact.html#terms">Draft Terms of Use</a></li>
                <li><a href="./contact.html#disclaimer">Demo Disclaimer & Missing Inputs</a></li>
              </ul>
            </div>
            <div>
              <h3 class="footer-heading">Primary Demo Advisor</h3>
              <p style="color:#FFFFFF;font-weight:600;margin-bottom:0.2rem;">${ADVISOR_PROFILE.fullName}</p>
              <p style="color:#FDBA74;font-size:0.8rem;margin-bottom:0.75rem;">${ADVISOR_PROFILE.designation} (Supplied Demo Profile)</p>
              <p style="font-size:0.82rem;margin-bottom:0.3rem;">
                Phone: <a href="tel:${ADVISOR_PROFILE.contactNumbers[0]}" style="color:#FFFFFF;text-decoration:underline;">+91 ${ADVISOR_PROFILE.contactNumbers[0]}</a> /
                <a href="tel:${ADVISOR_PROFILE.contactNumbers[1]}" style="color:#FFFFFF;text-decoration:underline;">${ADVISOR_PROFILE.contactNumbers[1]}</a>
              </p>
              <p style="font-size:0.82rem;margin-bottom:0.75rem;">
                Email: <a href="mailto:${ADVISOR_PROFILE.email}" style="color:#FFFFFF;text-decoration:underline;">${ADVISOR_PROFILE.email}</a>
              </p>
              <p style="font-size:0.72rem;color:#94A3B8;">
                Note: Contact routing and official brand assets must be confirmed by Mauli Infra prior to public deployment.
              </p>
            </div>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:1.25rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.75rem;font-size:0.76rem;color:#94A3B8;">
            <span>Demo Prototype v1.0 — Prepared for Mauli Infra management evaluation.</span>
            <span>All sample listings, prices & EMI figures are strictly illustrative.</span>
          </div>
        </div>
      </footer>
      <div class="mobile-sticky-cta" role="region" aria-label="Quick Advisor Actions">
        <a href="tel:${ADVISOR_PROFILE.contactNumbers[0]}" class="btn btn-primary btn-sm">Call Advisor</a>
        <a href="${buildWhatsAppURL()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">WhatsApp</a>
        <a href="./contact.html?tab=visit" class="btn btn-copper btn-sm">Site Visit</a>
      </div>
    `;
  }
}