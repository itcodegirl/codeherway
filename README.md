# CodeHerWay — Site Structure Guide

## 📁 Folder Structure

```
codeherway/
├── index.html                  ← Landing page
├── blog.html                   ← Blog index (all posts listed here)
│
├── assets/
│   ├── css/
│   │   ├── global.css          ← ⭐ Design system (colors, fonts, components)
│   │   ├── blog.css            ← Blog index styles
│   │   └── post.css            ← Individual post styles
│   ├── js/
│   │   └── main.js             ← Loads header/footer, nav toggle, active links
│   └── images/
│
├── components/
│   ├── header.html             ← ⭐ Edit ONCE — updates every page
│   └── footer.html             ← ⭐ Edit ONCE — updates every page
│
├── posts/
│   ├── POST-TEMPLATE.html      ← ⭐ Copy this for every new post
│   ├── html-series/            ← Drop HTML posts here
│   └── css-series/             ← Drop CSS posts here
│
└── widgets/
    └── code-playground.html    ← Drop your existing playground here
```

---

## ✍️ How to Publish a New Post

1. **Copy** `posts/POST-TEMPLATE.html`
2. **Rename** it: e.g. `posts/html-series/02-html-document-structure.html`
3. **Update** the `<title>` and `<meta name="description">` at the top
4. **Write** your content inside `<article class="post-content">`
5. **Add** a card for it in `blog.html` (copy an existing `.post-card` block)
6. **Push** to GitHub → Netlify auto-deploys ✅

---

## 🎨 Design System (global.css)

All colors are CSS variables — change once, updates everywhere:

| Variable        | Value     | Used For          |
|-----------------|-----------|-------------------|
| `--pink`        | `#E040A0` | Accents, CTAs     |
| `--purple`      | `#C4B5FD` | H3s, tags         |
| `--teal`        | `#0D9488` | Logo, links       |
| `--teal-light`  | `#2DD4BF` | Hover states      |
| `--bg`          | `#0A0A0F` | Page background   |
| `--bg-card`     | `#12121A` | Cards, code wins  |

---

## 🧩 Available Components (copy/paste in any post)

### Code Window
```html
<div class="code-window">
  <div class="code-window-bar">
    <div class="code-window-dots">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
    </div>
    <span class="code-window-title">filename.html</span>
  </div>
  <div class="code-body">Your code here</div>
</div>
```

### Callout Box
```html
<div class="callout">
  <div class="callout-title">💡 Pro Tip</div>
  <p>Your tip here.</p>
</div>
```
Variants: `callout-teal`, `callout-purple`

### Dev_Fession
```html
<div class="dev-fession">
  <div class="dev-fession-label">// Dev_Fession</div>
  <p>Your confession here.</p>
</div>
```

### Tags
```html
<span class="tag tag-teal">HTML</span>
<span class="tag tag-purple">CSS</span>
<span class="tag tag-pink">Soon</span>
```

---

## 🚀 Deployment (GitHub + Netlify)

1. Push this folder to a GitHub repo
2. Connect repo to Netlify
3. Set publish directory to `/` (root)
4. Every `git push` auto-deploys — no manual steps!
