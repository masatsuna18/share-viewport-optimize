// # 360px以下のビューポートを固定
//------------------------------------------------

(function () {
  const MIN_WIDTH = 360;
  const DEFAULT_CONTENT = 'width=device-width,initial-scale=1';
  const FIXED_CONTENT = 'width=' + MIN_WIDTH;

  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) return;

  let current = viewport.getAttribute('content');

  function switchViewport() {
    const value = window.outerWidth > MIN_WIDTH ? DEFAULT_CONTENT : FIXED_CONTENT;
    if (value === current) return;

    viewport.setAttribute('content', value);
    current = value;
  }

  window.addEventListener('resize', switchViewport);
  switchViewport();
})();
