/* ═══════════════════════════════════════════════
   OLASCO — NAV & FOOTER INJECTOR
   ═══════════════════════════════════════════════ */

(function () {
  const NAV_HTML = `
  <nav id="navbar">
    <a href="index.html" class="nav-logo">OLA<span>SCO</span><sub>Engineering & Fabrication Ltd.</sub></a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="projects.html">Projects</a>
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

  // Inject nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
})();
