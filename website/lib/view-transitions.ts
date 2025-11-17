export function startViewTransition(callback: () => void) {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    (document as any).startViewTransition(() => {
      callback();
    });
  } else {
    callback();
  }
}

export function setupViewTransitions() {
  if (typeof document === 'undefined') return;

  if (document.getElementById('view-transition-styles')) return;

  const style = document.createElement('style');
  style.id = 'view-transition-styles';
  style.textContent = `
    @view-transition {
      navigation: auto;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 0.6s;
      animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    }

    ::view-transition-old(root) {
      animation-name: slide-out-up;
    }

    ::view-transition-new(root) {
      animation-name: slide-in-up;
    }

    @keyframes slide-out-up {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(-50px) scale(0.98);
      }
    }

    @keyframes slide-in-up {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `;
  document.head.appendChild(style);
}

