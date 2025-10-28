import "./style.css";
import Experience from "./Experience/Experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

// Register Service Worker for deploy-versioned cache busting
async function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register('./sw.js');
    // Fetch version and send to SW
    const res = await fetch('./version.json', { cache: 'no-store' }).catch(() => null);
    if (res && res.ok) {
      const data = await res.json().catch(() => null);
      const version = data && typeof data.version === 'string' ? data.version : undefined;
      if (version && reg.active) {
        reg.active.postMessage({ type: 'SET_VERSION', version });
      } else if (version) {
        // Wait for activation
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SET_VERSION', version });
          }
        });
      }
    }
  } catch (e) {
    // no-op
  }
}

registerSW();
