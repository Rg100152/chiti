<p align="center">
  <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Leaf-cutter_ant_%28Atta_cephalotes%29_Belize_5.jpg/960px-Leaf-cutter_ant_%28Atta_cephalotes%29_Belize_5.jpg" alt="Ant in nature" width="220">
</p>

# Chunni and Tiddoo: A 60-Part Village Story

**Live site:** [https://rg100152.github.io/chiti/](https://rg100152.github.io/chiti/)

A 60-chapter Indian village storytelling website built with **plain HTML, CSS, and vanilla JavaScript only**. No frameworks, no Python, no build tools.

---

## About

The story of Chunni the ant and Tiddoo the grasshopper in the village of Rampur, told across 60 chapters. From the bloom of spring and the heat of summer to the monsoon rains, winter hunger, a fresh resolve, and finally prosperity, each chapter teaches a simple lesson about hard work, friendship, and preparation.

---

## Story in Pictures

| Spring | Harvest | Monsoon |
|:---:|:---:|:---:|
| <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=75&fit=crop" alt="Spring blossoms" width="220"> | <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=75&fit=crop" alt="Harvest field" width="220"> | <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Dramatic_Monsoon_Clouds_Over_the_City.jpg" alt="Monsoon clouds" width="220"> |

| Winter | A New Beginning | The Story |
|:---:|:---:|:---:|
| <img src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&q=75&fit=crop" alt="Winter snow" width="220"> | <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=75&fit=crop" alt="Green village field" width="220"> | <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=75&fit=crop" alt="Open book" width="220"> |

---

## Features

- **60 separate chapters**, each with its own `bhagN.html` page
- **Index page** with a 60-card grid and a "Start from Chapter 1" button
- **Indian village theme** with warm gradients, a golden card, and Baloo 2 + Noto Serif Devanagari fonts
- **Real images** from Wikimedia Commons and Unsplash, with a `placehold.co` fallback
- **Navigation** through Previous/Next buttons and the **Left / Right arrow keys**
- **Reading progress bar** that fills as you scroll
- **localStorage tracking**
  - `lastReadChapter` — the last chapter you opened
  - `readChapters` — the list of chapters already read
  - The index highlights the last read chapter with a ✅ mark
- **Light / Dark mode** toggle (🌙 / ☀️)
- **Mobile responsive** layout

---

## Project Structure

```text
chiti/
├── index.html      # Landing page — list of all 60 chapters
├── bhag1.html      # Chapter 1
├── bhag2.html      # Chapter 2
├── ...
├── bhag60.html     # Chapter 60
├── style.css       # Shared styles for every page
├── script.js       # Navigation, progress, localStorage, theme toggle
└── README.md       # This file
```

**Total:** 63 website files (60 chapters + index + CSS + JS)

---

## Quick Start

### Option 1 — Open directly
Double-click `index.html`.

### Option 2 — Local server (recommended)
```bash
git clone https://github.com/rg100152/chiti.git
cd chiti
python3 -m http.server 8000
```
Then open **http://localhost:8000** in your browser.

> Python is used only for local testing. The website itself is pure HTML/CSS/JS.

---

## How to Use

| Action | How |
|---|---|
| Next chapter | **Next** button or **→** arrow key |
| Previous chapter | **Previous** button or **←** arrow key |
| All chapters | **📚 All 60 Chapters** link in the top bar |
| Change theme | **🌙 / ☀️** button |
| See progress | Thin bar at the bottom of the page |
| Already read | ✅ / ✓ marks on the index page |

---

## Deploying to GitHub Pages

1. Push all files to the `main` branch:
   ```bash
   git add .
   git commit -m "Add Chunni and Tiddoo story website"
   git push origin main
   ```
2. In the GitHub repo, go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch`, then choose **Branch: `main`** and **Folder: `/ (root)`**, and click **Save**.
4. After a few minutes, the site will be live at **https://rg100152.github.io/chiti/**.

> Keep `index.html` in the root folder so GitHub Pages can find it.

---

## Images

Images are loaded from remote URLs, so an internet connection is needed. Every `<img>` tag includes an `onerror` fallback to a `placehold.co` image if a URL fails. To replace an image, edit the `<img src="...">` line in the relevant `bhagN.html` file.

---

## Verification

- [x] 60 chapter cards on the index page
- [x] Title, story, dialogue, and moral on every chapter page
- [x] Correct Previous/Next links
- [x] Arrow-key navigation
- [x] Scroll-based progress bar
- [x] Last read chapter saved in localStorage
- [x] Dark mode toggle
- [x] Mobile responsive layout

---

Built for learning and sharing. No analytics, no tracking, and no external dependencies other than Google Fonts and remote images.
