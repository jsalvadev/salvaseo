const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.animateDelay ?? '0';
          const direction = el.dataset.animateDirection;

          setTimeout(() => {
            if (direction) {
              el.classList.add(`is-visible-${direction}`);
            } else {
              el.classList.add('is-visible');
            }
          }, parseInt(delay, 10));

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate], [data-animate-direction]').forEach((el) => observer.observe(el));
}
