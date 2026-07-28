/* Heading anchors copy their link to the clipboard rather than only jumping to
   it, so the icon and its label mean the same thing.
   Delegated from the document so it keeps working with instant navigation. */
document.addEventListener("click", function (event) {
  const link = event.target.closest(".md-typeset .headerlink");
  if (!link || !navigator.clipboard) {
    return; // without clipboard support, fall back to normal anchor behaviour
  }

  const href = link.getAttribute("href");
  const url = new URL(href, window.location.href).href;

  event.preventDefault();
  navigator.clipboard.writeText(url).then(
    function () {
      // Keep the address bar in step, without adding a history entry.
      history.replaceState(null, "", href);
      link.classList.add("headerlink--copied");
      window.setTimeout(function () {
        link.classList.remove("headerlink--copied");
      }, 1400);
    },
    function () {
      window.location.hash = href; // clipboard refused; just navigate
    }
  );
});
