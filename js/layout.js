/* ═══════════════════════════════════════════════
   OLASCO — NAV, FOOTER, WHATSAPP, COOKIE BANNER
   ═══════════════════════════════════════════════ */

/* ─── CONFIG — update these values ─── */
const OLASCO_CONFIG = {
  whatsapp: '+2348066331212',          // Your WhatsApp number with country code, no spaces
  waMessage: 'Hello Olasco Engineering, I would like to discuss a project.',
  gaId: 'G-XXXXXXXXXX',           // Replace with your GA4 Measurement ID
};

(function () {
  const NAV_HTML = `
  <nav id="navbar">
    <a href="index.html" class="nav-logo">OLA<span>SCO</span><sub>Engineering & Fabrication Ltd.</sub></a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="projects.html">Projects</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact</a>
    </div>
    <a href="contact.html" class="nav-cta">Get a Quote</a>
    <button class="hamburger" id="menuBtn" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div id="mobileMenu">
    <button class="mobile-close" id="mobileClose">✕</button>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="projects.html">Projects</a>
    <a href="gallery.html">Gallery</a>
    <a href="contact.html">Contact</a>
  </div>`;

  const FOOTER_HTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="font-size:1.9rem;">OLA<span>SCO</span></a>
          <p>Nigeria's trusted fabrication and structural engineering partner. Serving the oil & gas, maritime, and industrial sectors since 2001 from our Port Harcourt facility.</p>
          <div class="footer-social">
            <a href="#">in</a>
            <a href="#">fb</a>
            <a href="#">tw</a>
            <a href="#">yt</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="services.html#structural">Structural Fabrication</a></li>
            <li><a href="services.html#pipe">Pipe Fabrication</a></li>
            <li><a href="services.html#vessels">Pressure Vessels</a></li>
            <li><a href="services.html#mechanical">Mechanical Engineering</a></li>
            <li><a href="services.html#ndt">NDT & Inspection</a></li>
            <li><a href="services.html#modular">Modular Construction</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About Olasco</a></li>
            <li><a href="about.html#team">Our Team</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="about.html#certifications">Certifications</a></li>
            <li><a href="contact.html#careers">Careers</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="#">Plot 14, Trans-Amadi<br>Industrial Layout, PH</a></li>
            <li><a href="tel:+2348012345678">+234 (0) 801 234 5678</a></li>
            <li><a href="mailto:projects@olasco.ng">projects@olasco.ng</a></li>
            <li><a href="mailto:info@olasco.ng">info@olasco.ng</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Olasco Engineering & Fabrication Ltd. RC 1234567. All rights reserved.</p>
        <div class="cert-badges">
          <span class="cert-badge">ISO 9001</span>
          <span class="cert-badge">NCDMB</span>
          <span class="cert-badge">COREN</span>
          <span class="cert-badge">NUPRC</span>
          <span class="cert-badge">ASME IX</span>
        </div>
      </div>
    </div>
  </footer>`;

  /* ─── WHATSAPP BUTTON ─── */
  const WA_HTML = `
  <a id="wa-btn"
     href="https://wa.me/${OLASCO_CONFIG.whatsapp}?text=${encodeURIComponent(OLASCO_CONFIG.waMessage)}"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Chat with Olasco on WhatsApp">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span class="wa-tooltip">Chat on WhatsApp</span>
  </a>`;

  /* ─── SCROLL TO TOP BUTTON ─── */
  const STT_HTML = `
  <button id="scroll-top-btn" aria-label="Scroll to top">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>`;

  /* ─── SCROLL TO TOP STYLES (injected once, no extra .css file needed) ─── */
  const STT_CSS = `
  #scroll-top-btn {
    position: fixed;
    bottom: 5.5rem;          /* sits just above the WhatsApp button */
    right: 2rem;
    z-index: 998;
    width: 48px;
    height: 48px;
    background: var(--flame, #E8530A);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 8px, 8px 0, 100% 0, 100% 100%, 0 100%);
    opacity: 0;
    transform: translateY(12px);
    pointer-events: none;
    transition: opacity .3s ease, transform .3s ease, background .2s ease;
  }
  #scroll-top-btn.stt-visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  #scroll-top-btn:hover  { background: #ff6a22; }
  #scroll-top-btn:active { background: #c44208; }
  #scroll-top-btn svg {
    width: 20px; height: 20px;
    stroke: #fff; stroke-width: 2.5;
    fill: none;
    stroke-linecap: round; stroke-linejoin: round;
  }
  @media (max-width: 640px) {
    #scroll-top-btn { bottom: 5rem; right: 1.25rem; width: 42px; height: 42px; }
  }`;

  /* ─── COOKIE BANNER ─── */
  const COOKIE_HTML = `
  <div id="cookie-banner" role="dialog" aria-label="Cookie consent">
    <div class="cookie-inner">
      <div class="cookie-text">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cookie-icon"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
        <div>
          <strong>We use cookies</strong>
          <p>We use Google Analytics to understand how visitors use our site. No personal data is sold. You can opt out at any time.</p>
        </div>
      </div>
      <div class="cookie-actions">
        <button id="cookie-decline" class="cookie-btn-secondary">Decline</button>
        <button id="cookie-accept"  class="cookie-btn-primary">Accept Cookies</button>
      </div>
    </div>
  </div>`;

  // ─── INJECT NAV ───
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // ─── INJECT FOOTER ───
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // ─── INJECT WHATSAPP BUTTON ───
  document.body.insertAdjacentHTML('beforeend', WA_HTML);

  // ─── INJECT SCROLL-TO-TOP BUTTON + STYLES ───
  const styleTag = document.createElement('style');
  styleTag.textContent = STT_CSS;
  document.head.appendChild(styleTag);

  document.body.insertAdjacentHTML('beforeend', STT_HTML);

  const sttBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 320) {
      sttBtn.classList.add('stt-visible');
    } else {
      sttBtn.classList.remove('stt-visible');
    }
  }, { passive: true });

  sttBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── COOKIE CONSENT LOGIC ───
  const consent = localStorage.getItem('olasco_cookie_consent');

  // Load GA only if already accepted
  if (consent === 'accepted') loadGA();

  // Show banner only if no decision made yet
  if (!consent) {
    document.body.insertAdjacentHTML('beforeend', COOKIE_HTML);

    // Small delay so banner animates in after page load
    requestAnimationFrame(() => {
      setTimeout(() => {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.add('visible');
      }, 1200);
    });

    document.addEventListener('click', (e) => {
      if (e.target.id === 'cookie-accept') {
        localStorage.setItem('olasco_cookie_consent', 'accepted');
        hideBanner();
        loadGA();
        if (typeof gtag !== 'undefined') gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      if (e.target.id === 'cookie-decline') {
        localStorage.setItem('olasco_cookie_consent', 'declined');
        hideBanner();
      }
    });
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  }

  // ─── GOOGLE ANALYTICS LOADER ───
  function loadGA() {
    if (OLASCO_CONFIG.gaId === 'G-XXXXXXXXXX') return; // placeholder — skip until real ID added
    if (document.getElementById('ga-script')) return;  // already loaded
    const s = document.createElement('script');
    s.id = 'ga-script';
    s.src = `https://www.googletagmanager.com/gtag/js?id=${OLASCO_CONFIG.gaId}`;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', OLASCO_CONFIG.gaId, { anonymize_ip: true });
  }

})();