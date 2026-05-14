# CVCraft — CV Builder App

A clean, real-time CV builder built with React. Fill in your details on the left and watch your CV update live on the right.

---

## Features

- **Live preview** — the CV updates instantly as you type
- **Three sections** — Personal Details, Education, and Experience
- **Collapse & expand** — save a section to minimize it, edit to reopen
- **Professional Summary** — add a short bio that appears at the top of your CV
- **Clean print-ready layout** — the CV preview is styled to look like a real document

---

## Tech Stack

- [React](https://react.dev/) (with Hooks)
- Plain CSS (no UI library)
- Vite

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/cvcraft.git
cd cvcraft

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── PersonalDetails.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   └── cv.jsx
├── App.jsx
└── App.css
```

---

## Roadmap

- [ ] Support multiple education and experience entries
- [ ] PDF export
- [ ] Multiple CV templates
- [ ] Local storage to persist data between sessions

---

## License

MIT
