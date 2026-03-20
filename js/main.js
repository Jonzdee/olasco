/* ═══════════════════════════════════════════════
   OLASCO ENGINEERING — SHARED JAVASCRIPT
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── ACTIVE NAV LINK ─── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ─── MOBILE MENU ─── */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileClose');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeBtn?.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  /* ─── SCROLL REVEAL ─── */
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 4) * 0.08}s`;
        entry.target.classList.add('visible');
        ro.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* ─── COUNTER ANIMATION ─── */
  function animateCount(el, target, suffix = '', duration = 1800) {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          animateCount(el, target, suffix);
        });
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.stats-block').forEach(el => counterObs.observe(el));

  /* ─── CONTACT FORM ─── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const msg = document.getElementById('formMessage');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        msg.textContent = '✓ Thank you. Our engineering team will respond within 24 hours.';
        msg.className = 'form-msg success';
        form.reset();
        btn.textContent = 'Send Enquiry →';
        btn.disabled = false;
        setTimeout(() => { msg.className = 'form-msg'; msg.textContent = ''; }, 8000);
      }, 1200);
    });
  }

  /* ─── SPARK CANVAS (hero only) ─── */
  const canvas = document.getElementById('sparks');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Spark {
      constructor() { this.reset(); }
      reset() {
        const w = canvas.width, h = canvas.height;
        this.x = w * 0.45 + (Math.random() - 0.5) * w * 0.3;
        this.y = h * 0.62 + (Math.random() - 0.5) * 30;
        this.vx = (Math.random() - 0.5) * 2.8;
        this.vy = -(Math.random() * 3.5 + 1.2);
        this.life = 1;
        this.decay = Math.random() * 0.014 + 0.007;
        this.size = Math.random() * 2.2 + 0.4;
        this.color = Math.random() > 0.5 ? '#F97316' : '#E8530A';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.055;
        this.vx *= 0.985;
        this.life -= this.decay;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.65;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 70; i++) {
      const s = new Spark();
      s.life = Math.random();
      particles.push(s);
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); if (p.life <= 0) p.reset(); });
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ─── TAB SYSTEM ─── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tab-group');
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const pane = group.querySelector(`[data-pane="${target}"]`);
      if (pane) pane.classList.add('active');
    });
  });

  /* ─── ACCORDION ─── */
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.querySelector('.accordion-trigger')?.addEventListener('click', () => {
      const open = item.classList.contains('open');
      item.closest('.accordion').querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

});
