import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/shared/ErrorBoundary';
import GoToTop from './components/GoToTop';
import Home from './layout/Home';
import Footer from './components/Footer';

// Lazy load page components
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Bolts = lazy(() => import('./pages/Bolts'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CounterSunkPage = lazy(() => import('./pages/CounterSunkPage'));
const EyeBoltPage = lazy(() => import('./pages/EyeBoltPage'));
const FastenersPage = lazy(() => import('./pages/FastenersPage'));
const HexHeadBoltPage = lazy(() => import('./pages/HexHeadBoltPage'));
const HotForgingPage = lazy(() => import('./pages/HotForgingPage'));
const MachiningPage = lazy(() => import('./pages/MachiningPage'));
const Nut = lazy(() => import('./pages/Nut'));
const ProductionPage = lazy(() => import('./pages/ProductionPage'));
const SquareBoltPage = lazy(() => import('./pages/SquareBoltPage'));
const StudBolt = lazy(() => import('./pages/StudBolt'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fasteners" element={<FastenersPage />} />
            <Route path="/hot-forging" element={<HotForgingPage />} />
            <Route path="/machining" element={<MachiningPage />} />
            <Route path="/bolts" element={<Bolts />} />
            <Route path="/nuts" element={<Nut />} />
            <Route path="/studbolts" element={<StudBolt />} />
            <Route path="/bolts/eye-bolts" element={<EyeBoltPage />} />
            <Route path="/bolts/hex-head-bolts" element={<HexHeadBoltPage />} />
            <Route path="/bolts/square-bolts" element={<SquareBoltPage />} />
            <Route path="/fasteners/stud-bolts" element={<StudBolt />} />
            <Route path="/bolts/countersunk-bolts" element={<CounterSunkPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <GoToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
