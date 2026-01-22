// NITROCOOL site JS (static-only)
(function () {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Sticky header elevation
  const header = document.querySelector('[data-elevate]');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-elevated', window.scrollY > 4);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close on navigation
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Accordion
  document.querySelectorAll('[data-acc]').forEach(acc => {
    acc.querySelectorAll('.acc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.acc-item');
        if (!item) return;
        item.classList.toggle('open');
      });
    });
  });

  // Google Forms UX: show in-page "Thanks" after submit.
  // Uses a hidden iframe target so the page doesn't navigate away.
  const gform = document.querySelector('form[data-gform]');
  const thanks = document.getElementById('nc_thanks');
  const iframe = document.getElementById('nc_hidden_iframe');
  if (gform && thanks && iframe) {
    let submitted = false;
    const submitBtn = gform.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';

    gform.addEventListener('submit', () => {
      submitted = true;

      // Prevent double submits (best-effort)
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      // Optimistic: reveal thanks shortly after submit.
      window.setTimeout(() => {
        thanks.style.display = '';
        thanks.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear form for the next message
        gform.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText || 'Send message';
        }
      }, 800);
    });

    // Also confirm when iframe loads (some browsers load about:blank initially).
    iframe.addEventListener('load', () => {
      if (!submitted) return;
      thanks.style.display = '';
    });
  }
})();
