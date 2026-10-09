/**
 * ============================================================================
 * APP LOOM CREATIONS - WEBSITE SCRIPT (script.js)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const iconImg = document.querySelector('.app-icon-img');
  const iconFallback = document.querySelector('.app-icon-fallback');

  const activateFallback = () => {
    if (iconImg && iconFallback) {
      iconImg.style.display = 'none';
      iconFallback.style.display = 'block';
    }
  };

  if (iconImg) {
    // Check if the image already failed to load or has 0 dimensions
    if (iconImg.complete && iconImg.naturalWidth === 0) {
      activateFallback();
    }

    iconImg.addEventListener('error', () => {
      // If assets/dhunu-moods.png failed, try root dhunu-moods.png first
      if (!iconImg.dataset.triedRoot) {
        iconImg.dataset.triedRoot = 'true';
        iconImg.src = 'dhunu-moods.png';
      } else if (!iconImg.dataset.triedSvg) {
        iconImg.dataset.triedSvg = 'true';
        iconImg.src = 'assets/dhunu-moods.svg';
      } else {
        activateFallback();
      }
    });
  }
});
