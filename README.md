# ZESTA FRUITS — Multi-page B2B Import Catalog Site

Premium-grade B2B-сайт для оптового импортёра фруктов в Ташкенте.
Build by AR7 · v3 pipeline · 2026-05-08.

---

## Что внутри

```
zesta/
├── index.html          Главная (hero ISO-codes + featured + verticals + trust + CTA)
├── catalog.html        Каталог с фильтрами по country и category, динамический рендер
├── horeca.html         B2B-страница для HoReCa: 4-step flow + benefits + FAQ
├── business.html       Для бизнеса: Hotels / Schools / Restaurants — 3 vertical-блока
├── about.html          О компании + интерактивный 3D-globe (Three.js / Globe.GL)
├── contacts.html       Контакты + форма заявки (Web3Forms) + Telegram CTA
├── README.md           Этот файл
└── assets/
    ├── css/main.css
    ├── js/i18n.js      Словарь ru / uz / en (~120 ключей)
    ├── js/main.js      Lang-switcher, mobile menu, header scroll-state
    ├── js/effects.js   SplitText, BlurText, Magnetic, Counter, 3D-tilt+glare
    ├── js/globe.js     Three.js / Globe.GL глобус с импорт-маршрутами
    └── img/            SVG: favicon / apple-touch-icon / og / logo
```

**Языки:** `uz` (default — их Instagram на узбекском), `ru`, `en`. Свитчер сохраняет выбор в `localStorage`.

**Дизайн:** «World Importer Editorial» — Bodoni Moda + Manrope + JetBrains Mono. Палитра deep-forest / refined-lime / paper-cream / amber. Domain-anchor — ISO-коды стран (`PL` `CN` `IR`) гигантскими курсивными цифрами. 3D-якорь — глобус с маршрутами импорта.

**Соответствие AR7 v3 DESIGN STANDARDS:**
- Border-radius scale: pill 999 / lg 22 / md 16 / sm 10 ✓
- Glass только на floating элементах (header / форма / бейджи) ✓
- Animation budget ≤3 эффектов на страницу ✓
- 3D-tilt только на content cards ✓
- Один Spline/Three.js wow-якорь (глобус на /about) ✓
- Niche-bucket: Premium B2B-import (editorial + glass + magnetic, БЕЗ glitch/neon) ✓
- Mobile audit на 375 / 430 / 768 / 1280 ✓

---

## Деплой

### Путь A — GitHub → Vercel (рекомендуется для постоянных правок и custom-домена)

1. Создаёшь репозиторий на GitHub (private или public)
2. Загружаешь содержимое папки `zesta/` в корень репо
3. Заходишь на [vercel.com/new](https://vercel.com/new), импортируешь репозиторий
4. Жмёшь **Deploy** — конфигурация не нужна, Vercel сам мапит каждый `.html` на свой URL
5. Через ~30 секунд получаешь `*.vercel.app` URL

### Путь B — Netlify Drop (быстрее, без GitHub)

1. Заходишь на [app.netlify.com/drop](https://app.netlify.com/drop)
2. Перетаскиваешь всю папку `zesta/` в drop-зону
3. Через ~20 секунд получаешь `*.netlify.app` URL

### Custom-домен (например `zesta.uz`)

**На Vercel:**
- Settings → Domains → Add `zesta.uz`
- В DNS своего регистратора добавь:
  - `A` запись: `@` → `76.76.21.21`
  - `CNAME` запись: `www` → `cname.vercel-dns.com`
- TLS-сертификат подтянется автоматически за ~1 час

**На Netlify:**
- Site settings → Domain management → Add custom domain
- В DNS добавь: `A` запись `@` → IP, который покажет Netlify; `CNAME` для `www`

---

## Pre-launch чеклист

### 1. Подключить Web3Forms (форма заявки)

В файле `contacts.html` найди:
```html
<input type="hidden" name="access_key" value="REPLACE_WITH_AR7_WEB3FORMS_KEY">
```

1. Зарегистрируйся на [web3forms.com](https://web3forms.com) (бесплатно, без backend)
2. Создай Access Key → копируй
3. Замени `REPLACE_WITH_AR7_WEB3FORMS_KEY` на свой ключ
4. Заявки будут приходить на email, который ты указал при регистрации

### 2. Подменить placeholder-фото на реальные

Сейчас все hero/vertical-визуалы — text-led placeholder'ы (большие буквы Z/H/S/R на градиенте). Когда получишь HQ-фото от владельца:

| Где | Что нужно |
|---|---|
| `index.html` блок `.hero__visual` | Главная фруктовая композиция (или ассортимент в кадре) |
| `index.html` секция Featured | 4 фото — Mazzafati финики / Польские яблоки / Ананас / Маракуйя |
| `business.html` блоки Hotels / Schools / Restaurants | 3 фото — отель/завтрак, дети с фруктами, ресторанная подача |
| `horeca.html` блок `.hero__visual` | Фото калибровки / склада / упаковки |
| `catalog.html` карточки | Фото каждой позиции — добавить в JS catalog data поле `img: 'assets/img/iso-name.jpg'` и в template |
| `about.html` под легальным блоком | Фото директора / команды |
| Yellow Ford-фургон | Уже есть в их Instagram-постах — попроси у владельца оригинал, добавь в horeca/contacts |

Все placeholder'ы помечены классом `.hero__visual` или текстом-маркером — найдёшь по поиску `Z FRUITS` или `<small>HORECA`/`<small>SCHOOLS`/etc. в HTML.

### 3. Проверить контакты

Phone, Telegram, Instagram, address — заданы из открытых источников (Orginfo + Yandex Maps + Instagram bio). Если что-то изменилось — поиск-замена в HTML файлах:
- `+998 78 113 9001` (primary)
- `+998 94 770 09 90`
- `Yunusobod, Chinobod 45`
- `t.me/zesta_fruits_llc` (контакт-аккаунт)
- `t.me/zesta_fruits` (broadcast канал)
- `instagram.com/zesta_fruits_llc`

### 4. Проверить каталог-цены

В `catalog.html` блок `<script>` массив `CATALOG` содержит позиции с реальными ценами из их Telegram-канала (Mandarin 23 990 / Passion fruit 9 990 / Pineapple 19 900). Раз в неделю обновляй ценник вручную — это 30 секунд правки. Заменяй `price.ru / price.uz / price.en`.

### 5. Тест на мобиле

Открой на телефоне. Проверь:
- Меню-гамбургер открывается, пункты не больше 32px
- Hero на iPhone SE (375px) не вылезает
- Свитчер языков работает на тач
- Глобус на /about на мобиле заменяется на flat-fallback (это OK, экономия CPU)

### 6. Lighthouse / PageSpeed

Запусти после деплоя:
```
lighthouse https://your-deploy-url.vercel.app --view
```
Ожидаемый бал: 90+ Performance, 95+ Accessibility, 100 Best Practices.

---

## Под капотом — технические заметки

- **Без билдера**: чистый HTML + vanilla JS + 1 CSS-файл. Открой любой `.html` локально двойным кликом — работает (CDN-шрифты могут не подгрузиться без сети, но всё остальное — да).
- **i18n**: `data-i18n="key"` на элементе → JS подтягивает текст из `i18n.js` по выбранному языку. Для атрибутов: `data-i18n-attr="placeholder:co.form.placeholder"`.
- **Глобус** (`globe.js`): загружается lazy через IntersectionObserver, только когда `.globe-stage` входит в viewport. На мобиле и при `prefers-reduced-motion` — не грузится, показывается flat-fallback. Используется `globe.gl@2.34.4` через jsDelivr CDN.
- **Effects** (`effects.js`): SplitText / BlurText через IntersectionObserver, Magnetic / Tilt — pointer events. Все эффекты автоматически отключаются на тач-устройствах и при `prefers-reduced-motion`.
- **A11y**: WCAG AA контрасты, semantic HTML, keyboard-navigable, alt-tags на всех `<img>` (placeholder'ы — через `aria-hidden="true"`).
- **SEO**: per-page `<title>`, `<meta description>`, OG-теги, Schema.org JSON-LD на главной (`WholesaleStore`).

---

## Контакт AR7

Сайт собран AR7 — небольшой AI-студией в Ташкенте.
По правкам, новым страницам и расширению функционала — Telegram.
