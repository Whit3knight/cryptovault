(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .cv-mobile-menu a').forEach(function (link) {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
})();

var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('cv-mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
}

var TICKER_DATA = [
  { symbol: 'BTC',   price: '$67,420.50', change: '+2.14%', up: true  },
  { symbol: 'ETH',   price: '$3,512.80',  change: '+1.87%', up: true  },
  { symbol: 'SOL',   price: '$182.40',    change: '+4.23%', up: true  },
  { symbol: 'BNB',   price: '$412.60',    change: '-0.45%', up: false },
  { symbol: 'ADA',   price: '$0.612',     change: '+0.98%', up: true  },
  { symbol: 'DOT',   price: '$9.87',      change: '-1.22%', up: false },
  { symbol: 'AVAX',  price: '$42.15',     change: '+3.01%', up: true  },
  { symbol: 'MATIC', price: '$0.874',     change: '-0.67%', up: false },
  { symbol: 'LINK',  price: '$18.34',     change: '+1.45%', up: true  },
  { symbol: 'XRP',   price: '$0.548',     change: '+0.32%', up: true  },
];

function buildTicker() {
  var track = document.querySelector('.ticker-track');
  if (!track) return;
  var items = TICKER_DATA.concat(TICKER_DATA);
  track.innerHTML = items.map(function (d) {
    return '<span class="ticker-item">'
      + '<span class="ticker-name">' + d.symbol + '</span>'
      + '<span class="ticker-price">' + d.price + '</span>'
      + '<span class="ticker-change ' + (d.up ? 'up' : 'down') + '">' + d.change + '</span>'
      + '<span style="color:var(--text-muted);opacity:0.3">|</span>'
      + '</span>';
  }).join('');
}

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function () {
  buildTicker();
  document.querySelectorAll('[data-aos]').forEach(function (el) {
    observer.observe(el);
  });
});
