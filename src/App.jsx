import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/shared/ErrorBoundary';
import AboutPage from './pages/AboutPage';
import Bolts from './pages/Bolts';
import ContactPage from './pages/ContactPage';
import CounterSunkPage from './pages/CounterSunkPage';
import EyeBoltPage from './pages/EyeBoltPage';
import FastenersPage from './pages/FastenersPage';
import HexHeadBoltPage from './pages/HexHeadBoltPage';
import HotForgingPage from './pages/HotForgingPage';
import MachiningPage from './pages/MachiningPage';
import Nut from './pages/Nut';
import ProductionPage from './pages/ProductionPage';
import SquareBoltPage from './pages/SquareBoltPage';
import StudBolt from './pages/StudBolt';
import GoToTop from './components/GoToTop';
import Home from './layout/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/bolts/stud-bolts" element={<StudBolt />} />
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
