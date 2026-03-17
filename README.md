<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-Edge-white?style=for-the-badge&logo=vercel" alt="Vercel Edge" />
</div>

<br />

<h1 align="center">Dynamic Open-Graph (OG) Image Generator</h1>

<p align="center">
  A high-performance, Edge-rendered dynamic Open Graph image generator API built with Next.js App Router and <code>@vercel/og</code>. Includes a beautifully animated, real-time visual dashboard to construct and preview metadata images instantly.
</p>

---

## ✨ Features

- **⚡ Edge Computing Ready**: Renders images dynamically in milliseconds. No Headless Chrome, Canvas, or heavy node modules needed.
- **🎨 Interactive Dashboard**: Built with Framer Motion and Tailwind CSS. Customize the headline, subtitle, colors, and background theme instantly in a live-updating preview environment.
- **🖼️ Algorithmic Backgrounds**: Three distinct procedural background themes included:
  - **Glassy**: A frosted-glass glassmorphism card effect.
  - **Retro**: An 80s synth-wave looping grid gradient.
  - **Dots**: A clean, radial-gradient dot matrix perfect for technical domains.
- **🛠️ JSX-to-PNG Engine**: The API uses standard JSX and Flexbox styling (via Satori) to construct the image on the server, which is inherently much faster to iterate on compared to traditional canvas APIs.
- **🔗 Auto-Generated API Route**: Instantly copy the dynamically generated Next.js API URL to paste directly into your `<meta>` tags.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Image Rendering**: [`@vercel/og`](https://vercel.com/docs/functions/og-image-generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 💻 Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikanwar3/next-og-generator.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd next-og-generator
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the interactive dashboard.

## 📖 Usage

### Using the Dashboard

1. Use the left-side panel to type your `Headline` and `Subtitle`.
2. Select your brand's Hex colors for the background and text using the integrated color pickers.
3. Click through the `Theme Style` toggles to find the background pattern that fits your brand.
4. Click **Copy API URL** to get the finalized Edge endpoint URL.

### Manually Querying the API

You can programmatically generate images by sending GET requests to `/api/og` with URL Search Parameters.

**Supported Parameters:**
| Parameter | Default Value | Description |
|-----------|---------------|-------------|
| `title` | `"Dynamic Open Graph API"` | The main, large heading text. |
| `subtitle`| `"Generated on the Edge seamlessly."`| The secondary, smaller text below the heading. |
| `bg` | `"#0f172a"` | Background Hex Color (remember to URL-encode `#` as `%23`). |
| `color` | `"#ffffff"` | Text Hex Color (remember to URL-encode `#` as `%23`). |
| `theme` | `"glassy"` | Background algorithmic pattern (`glassy`, `retro`, or `dots`). |

**Example API Request:**
```text
GET https://your-domain.com/api/og?title=Hello+World&theme=dots&bg=%231e1e1e&color=%235c6ac4
```

## 🤝 Contributing

Contribution, issue, and feature requests are welcome. Feel free to check the issues page.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
