/* ===========================
   WENDI HELP & SUPPORT — JS
   =========================== */

/* --- Accordion toggle --- */
function toggleTopic(headerEl) {
  const card = headerEl.closest('.topic-card');
  const body = card.querySelector('.topic-body');
  const chevron = headerEl.querySelector('.chevron');
  const isOpen = body.classList.contains('open');

  body.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
  headerEl.setAttribute('aria-expanded', String(!isOpen));
}

/* --- Search --- */
function handleSearch() {
  const val = document.getElementById('searchInput')?.value.trim();
  if (!val) return;
  // Route to a search results page (extend as needed)
  window.location.href = `search.html?q=${encodeURIComponent(val)}`;
}

document.getElementById('searchInput')?.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') handleSearch();
});

/* --- Highlight active quick-link based on current page --- */
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.quick-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === path) {
      link.style.borderBottomColor = 'var(--orange)';
      link.style.color = 'var(--orange)';
    }
  });
});
