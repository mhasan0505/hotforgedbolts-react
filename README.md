# Hot Forged Bolts - React Website

A modern, multilingual React website for **Brkkol Alüminyum Metal Endüstri Tic Ltd**, a leading manufacturer of high-strength hot forged bolts and fastening solutions.

## 🚀 Live Demo

[Visit Website](https://hotforgedbolts.com)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Internationalization](#internationalization)
- [Build & Deployment](#build--deployment)
- [Performance Optimization](#performance-optimization)
- [Contributing](#contributing)
- [License](#license)

## 🏢 About

This website showcases the products and services of Brkkol Alüminyum Metal Endüstri Tic Ltd, a company specializing in:

- **Hot Forged Bolts** - High-strength fastening solutions
- **Precision Machining** - Custom manufacturing services
- **Quality Fasteners** - DIN, BS, TE standard compliant products
- **Industrial Solutions** - Tailored fastening systems

### Company Highlights
- 25+ years of experience
- 500+ satisfied clients
- 99% quality assurance
- 24/7 customer support

## ✨ Features

### 🌐 Multilingual Support
- **6 Languages**: English, Turkish, German, Spanish, Italian, Russian
- Automatic language detection
- Seamless language switching

### 📱 Modern UI/UX
- Responsive design for all devices
- Smooth animations with AOS (Animate On Scroll)
- Interactive image galleries with Swiper
- Professional gradient designs

### 🔧 Product Showcase
- **Bolt Categories**: Hex Head, Square, Stud, Eye Bolts
- **Nut Varieties**: Various industrial nuts
- **Technical Specifications**: Detailed product information
- **Quality Standards**: DIN, BS, TE compliance

### 📞 Business Features
- Contact form with EmailJS integration
- SEO optimized pages
- Performance optimized images
- Error boundary protection

## 🛠 Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and dev server
- **React Router DOM 7.8.2** - Client-side routing
- **Tailwind CSS 4.1.12** - Utility-first CSS framework

### UI Components & Libraries
- **Lucide React** - Beautiful icons
- **Swiper** - Touch slider component
- **AOS** - Animate on scroll library
- **clsx** - Conditional className utility

### Internationalization
- **i18next 25.5.1** - Internationalization framework
- **react-i18next 15.7.3** - React integration
- **i18next-browser-languagedetector** - Automatic language detection

### Communication
- **EmailJS** - Contact form email service

### Development Tools
- **ESLint** - Code linting
- **Terser** - Code minification
- **Rollup Plugin Visualizer** - Bundle analysis

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hotforgedbolts-react.git
   cd hotforgedbolts-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file and add your EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
hotforgedbolts-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── router.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```


## 🌍 Internationalization

The website supports 6 languages with comprehensive translations:

### Supported Languages
- 🇺🇸 **English** (en) - Default
- 🇹🇷 **Turkish** (tr)
- 🇩🇪 **German** (de)
- 🇪🇸 **Spanish** (es)
- 🇮🇹 **Italian** (it)
- 🇷🇺 **Russian** (ru)

### Translation Structure
```json
{
  "nav": { /* Navigation items */ },
  "about": { /* About page content */ },
  "products": { /* Product descriptions */ },
  "contact": { /* Contact form labels */ }
}
```

### Adding New Translations
1. Add new keys to all locale files in `src/i18n/locales/`
2. Use the `useTranslation` hook in components:
   ```jsx
   const { t } = useTranslation();
   return <h1>{t('your.translation.key')}</h1>;
   ```

## 🏗 Build & Deployment

### Production Build
```bash
npm run build
```

### Build Features
- **Code Splitting**: Automatic vendor and route-based splitting
- **Tree Shaking**: Removes unused code
- **Minification**: Terser optimization
- **Asset Optimization**: Image and CSS optimization

### Deployment
The build output in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## ⚡ Performance Optimization

### Implemented Optimizations
- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: WebP format usage
- **Bundle Splitting**: Vendor and feature-based chunks
- **Tree Shaking**: Unused code elimination
- **Minification**: Production code optimization

### Performance Metrics
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Use TypeScript for new components (if migrating)
- Maintain translation consistency across all languages
- Test responsive design on multiple devices
- Optimize images before adding to assets

## 📄 License

This project is proprietary software owned by **Brkkol Alüminyum Metal Endüstri Tic Ltd**. All rights reserved.

## 📞 Contact

**Brkkol Alüminyum Metal Endüstri Tic Ltd**
- Website: [hotforgedbolts.com](https://hotforgedbolts.com)
- Email: info@hotforgedbolts.com

---

<div align="center">
  <p>Built with ❤️ using React & Vite</p>
  <p>© 2025 Brkkol Alüminyum Metal Endüstri Tic Ltd. All rights reserved.</p>
</div>