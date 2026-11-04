/* Also runs after Material's instant navigation replaces the page content. */
function labelContentLinks() {
  document.querySelectorAll('.md-content .md-typeset a[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const url = new URL(href, window.location.href);
    if (!['http:', 'https:'].includes(url.protocol)) return;

    link.removeAttribute('target');
    const imageOnly = link.querySelector('img') && !link.textContent.trim();
    const format = url.pathname.match(/\.(pdf|zip|7z|gz|csv|json|txt|xml|xlsx|docx|pptx|exe|dmg|bin)$/i);
    if (format && !link.dataset.downloadLabelled) {
      const label = format[1].toUpperCase();
      if (imageOnly) {
        link.setAttribute('aria-label', (link.querySelector('img').alt || 'Open file') + ' (' + label + ')');
      } else if (!new RegExp('\\(' + label + '\\)', 'i').test(link.textContent)) {
        link.append(document.createTextNode(' (' + label + ')'));
      }
      link.dataset.downloadLabelled = 'true';
    }

    const internal = url.origin === window.location.origin || url.hostname === 'docs.htp1.app';
    if (internal || imageOnly || !link.textContent.trim() || link.classList.contains('md-content__button') || link.querySelector('.external-link-marker')) return;
    const marker = document.createElement('span');
    marker.className = 'external-link-marker';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = '↗';
    link.append(marker);
    const description = document.createElement('span');
    description.className = 'visually-hidden-link-label';
    description.textContent = ' (external site)';
    link.append(description);
  });
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(labelContentLinks);
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', labelContentLinks);
} else {
  labelContentLinks();
}
