(function () {
  var STORAGE_KEY = 'velodom_cookie_consent';

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(categories) {
    var record = { categories: categories, date: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch (e) {
      /* localStorage unavailable (private mode, blocked) - consent still applies for this session */
    }
    document.dispatchEvent(new CustomEvent('velodom:consent-change', { detail: record }));
  }

  window.veloDomConsent = {
    get: function () {
      var record = readConsent();
      return record ? record.categories : null;
    }
  };

  function buildBanner() {
    var wrap = document.createElement('div');
    wrap.className = 'cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Préférences cookies');
    wrap.innerHTML =
      '<div class="cookie-banner-inner">' +
      '<p class="cookie-banner-text">Nous utilisons un cookie essentiel pour mémoriser vos préférences, et pourrions utiliser des cookies de mesure d\'audience ou publicitaires si vous les acceptez. ' +
      '<a href="/politique-de-cookies.html">En savoir plus</a></p>' +
      '<div class="cookie-banner-actions">' +
      '<button type="button" class="btn btn-ghost cookie-btn-customize">Personnaliser</button>' +
      '<button type="button" class="btn btn-ghost cookie-btn-reject">Refuser</button>' +
      '<button type="button" class="btn btn-primary cookie-btn-accept">Tout accepter</button>' +
      '</div>' +
      '<div class="cookie-panel" hidden>' +
      '<label class="cookie-option"><input type="checkbox" checked disabled> Cookies essentiels (toujours actifs)</label>' +
      '<label class="cookie-option"><input type="checkbox" class="cookie-opt-analytics"> Mesure d\'audience</label>' +
      '<label class="cookie-option"><input type="checkbox" class="cookie-opt-ads"> Publicité (Google Ads)</label>' +
      '<button type="button" class="btn btn-primary btn-block cookie-btn-save">Enregistrer mes choix</button>' +
      '</div>' +
      '</div>';
    return wrap;
  }

  function init() {
    var existing = readConsent();
    var banner = buildBanner();
    document.body.appendChild(banner);

    var panel = banner.querySelector('.cookie-panel');
    var actions = banner.querySelector('.cookie-banner-actions');

    function close() {
      banner.classList.remove('cookie-banner-visible');
      setTimeout(function () {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 250);
    }

    function open() {
      banner.classList.add('cookie-banner-visible');
    }

    banner.querySelector('.cookie-btn-accept').addEventListener('click', function () {
      writeConsent({ necessary: true, analytics: true, ads: true });
      close();
    });
    banner.querySelector('.cookie-btn-reject').addEventListener('click', function () {
      writeConsent({ necessary: true, analytics: false, ads: false });
      close();
    });
    banner.querySelector('.cookie-btn-customize').addEventListener('click', function () {
      panel.hidden = !panel.hidden;
    });
    banner.querySelector('.cookie-btn-save').addEventListener('click', function () {
      writeConsent({
        necessary: true,
        analytics: banner.querySelector('.cookie-opt-analytics').checked,
        ads: banner.querySelector('.cookie-opt-ads').checked
      });
      close();
    });

    var reopenBtn = document.getElementById('openCookiePrefs');
    if (reopenBtn) {
      reopenBtn.addEventListener('click', function () {
        if (!banner.parentNode) document.body.appendChild(banner);
        panel.hidden = false;
        if (existing) {
          banner.querySelector('.cookie-opt-analytics').checked = !!existing.categories.analytics;
          banner.querySelector('.cookie-opt-ads').checked = !!existing.categories.ads;
        }
        open();
      });
    }

    if (!existing) {
      requestAnimationFrame(function () {
        open();
      });
    } else {
      banner.remove();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
