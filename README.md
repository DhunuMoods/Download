# App Loom Creations - Personal App Showcase

A clean, modern, and mobile-first static website to showcase your Android apps on Google Play. Designed to be linked directly from your Instagram bio and deployed to **GitHub Pages** (`dhunumoods.github.io`).

---

## 📁 File Structure

```text
/
├── index.html              # Main webpage with permanent logo display fallback
├── style.css               # Clean, responsive CSS styling
├── script.js               # Bulletproof image fallback script
├── dhunu-moods.png         # Dhunu Moods app icon (in root)
├── dhunu-moods.svg         # High-resolution vector icon (in root)
├── README.md               # GitHub Pages deployment instructions
└── assets/
    ├── dhunu-moods.png     # Dhunu Moods app icon (in assets folder)
    └── dhunu-moods.svg     # Dhunu Moods vector icon (in assets folder)
```

---

## 🛠️ Logo Display Fix Explained

### Why did the logo break on `dhunumoods.github.io`?
When uploading files to GitHub through the web browser, if the `assets/` subfolder wasn't created or only `index.html` was uploaded, the browser could not find `assets/dhunu-moods.png` and displayed the broken image icon.

### How it is fixed permanently:
1. **Self-Contained Embedded SVG Fallback**: The exact high-resolution vector icon of Dhunu Moods is now embedded directly inside `index.html`. If the PNG image file is missing, the webpage **instantly** switches to the vector logo with **zero broken image box**.
2. **Dual-Location Files**: `dhunu-moods.png` and `dhunu-moods.svg` are provided in **both** the repository root `/` and inside `/assets/`. Whether you upload files into an `assets` folder or directly into the root folder of your repository, the logo will find and load it automatically.
3. **Smart Script Auto-Recovery**: If any path 404s, `script.js` seamlessly auto-recovers and displays the logo without delay.

---

## 🚀 How to Publish to GitHub Pages (`dhunumoods.github.io`)

1. Open your GitHub repository (e.g. `dhunumoods.github.io`).
2. Upload the updated files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `dhunu-moods.png` (and the `assets/` folder)
3. Commit the changes. GitHub Pages will refresh within 1 minute, and your logo will display permanently!
