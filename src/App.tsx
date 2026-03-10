/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import OrcaProgram from './pages/OrcaProgram';
import BridgeProgram from './pages/BridgeProgram';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Founders from './pages/Founders';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to reset scroll on route change
function ScrollToTopWrapper() {
  return <ScrollToTop />;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTopWrapper />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/orca" element={<OrcaProgram />} />
            <Route path="/programs/bridge" element={<BridgeProgram />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

