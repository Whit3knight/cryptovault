# CryptoVault

Platform exchange kripto next-gen — dark cyberpunk theme.

## Struktur File

```
cryptovault/
├── index.html          ← Home
├── README.md
├── css/
│   └── style.css       ← CSS custom + Bootstrap overrides
├── js/
│   └── main.js         ← JS bersama (hamburger, ticker, AOS)
└── pages/
    ├── market.html
    ├── dashboard.html
    ├── signin.html
    ├── signup.html
    ├── about.html
    └── contact.html
```

## Penjelasan File

**`css/style.css`** — Stylesheet utama. Berisi CSS variables (warna, font), override Bootstrap agar sesuai tema cyberpunk, styling navbar, card, button, ticker, footer, animasi scroll, dan responsive breakpoints.

**`js/main.js`** — Script bersama. Berisi toggle hamburger mobile menu, data dan render ticker crypto, IntersectionObserver untuk animasi scroll.

**`index.html`** — Root. Memanggil `css/style.css` dan `js/main.js` langsung.

**`pages/*.html`** — Memanggil `../css/style.css` dan `../js/main.js` (naik satu level).

## Bootstrap 5

Bootstrap di-load via CDN di setiap halaman:
```html
<!-- CSS Bootstrap -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

<!-- JS Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### Penggunaan Bootstrap per Halaman

| Komponen Bootstrap | Digunakan di |
|---|---|
| `container`, `row`, `col-*` | Semua halaman — layout grid responsif |
| `d-flex`, `gap-*`, `ms-auto`, `flex-wrap` | Semua halaman — flexbox utilities |
| `table`, `table-hover`, `table-responsive` | Home, Market |
| `d-none d-md-table-cell` | Market — sembunyikan kolom di mobile |
| `form-control`, `form-select`, `form-label` | Sign In, Sign Up, Contact |
| `form-check`, `form-check-input` | Sign In, Sign Up, Contact |
| `accordion` + `data-bs-toggle="collapse"` | Contact — FAQ |
| `modal` + `data-bs-toggle="modal"` | Dashboard — Deposit & Withdraw |
| `badge` (dengan custom class) | Home, About |
| `h-100`, `text-center`, `align-items-center` | Semua halaman — utility |
