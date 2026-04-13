(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var targets = document.querySelectorAll('.hero, .stats-bar, .sec, .partner-card, .ref-category, .contact-card');
  if (!targets.length) return;

  document.body.classList.add('has-reveal');
  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();