// ============================================================
// Stash Better Hotkeys
// ============================================================
//
// DESCRIPTION:
//   Simplified keyboard shortcuts for Stash scene navigation.
//   Works only on scene viewing pages (/scenes/123).
//
// SHORTCUTS:
//   n  →  Next scene
//   b  →  Previous scene (Back)
//   r  →  Random scene
//
// ORIGINAL STASH SHORTCUTS:
//   p n  →  next
//   p p  →  previous
//   p r    →  random
//
//   This plugin simplifies navigation - no need to press 'p' first!
//
// TECHNICAL INFO:
//   - Uses Stash's built-in Mousetrap.js library
//   - Does not interfere with input fields (input, textarea)
//   - Does not work when modifier keys (Ctrl/Alt/Shift) are pressed
//   - Only active on /scenes/* URLs
//
// AUTHOR: MM
// VERSION: 1.0.0
// REPOSITORY: https://github.com/stemugram/stash-better-hotkeys
// ============================================================

(function () {
  'use strict';

  // --- SETTINGS (customize if needed) ---
  const NEXT_KEY = 'n';
  const PREV_KEY = 'b';
  const RANDOM_KEY = 'r';

  // --- HELPER FUNCTIONS ---
  function isScenePage() {
    return /\/scenes\/\d+/.test(window.location.pathname);
  }

  function isInput(el) {
    if (!el) return false;
    var tag = (el.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || el.isContentEditable;
  }

  // --- MAIN EVENT LISTENER ---
  document.addEventListener('keydown', function (e) {
    // Check if we're on a scene page
    if (!isScenePage()) return;
    
    // Don't interfere with input fields
    if (isInput(e.target)) return;
    
    // Don't trigger when modifier keys are pressed
    if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

    // Detect which key was pressed and map to Stash command
    var seq = null;
    if (e.key === NEXT_KEY) seq = 'p n';
    else if (e.key === PREV_KEY) seq = 'p p';
    else if (e.key === RANDOM_KEY) seq = 'p r';
    if (!seq) return;

    // Prevent default behavior
    e.preventDefault();
    e.stopPropagation();

    // Send command to Stash's Mousetrap system
    if (window.Mousetrap && typeof window.Mousetrap.trigger === 'function') {
      window.Mousetrap.trigger(seq);
    }
  }, true);

  console.log('[Better Hotkeys] Loaded! n=next, b=prev, r=random');
})();
