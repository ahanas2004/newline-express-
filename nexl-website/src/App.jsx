import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Layout & Global Components
import Navbar         from '@/components/layout/Navbar'
import Footer         from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import ScrollToTop    from '@/components/shared/ScrollToTop'

// Pages
import Home           from '@/pages/Home'
import About          from '@/pages/About'
import Services       from '@/pages/Services'
import ServiceDetail  from '@/pages/services/ServiceDetail'
import Industries     from '@/pages/Industries'
import Quote          from '@/pages/Quote'
import Contact        from '@/pages/Contact'
import Privacy        from '@/pages/Privacy'
import Terms          from '@/pages/Terms'
import Cookies        from '@/pages/Cookies'
import NotFound       from '@/pages/NotFound'

// Forces the browser to top on route change
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { 
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) 
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      background: '#fdfbf7' // Global cream background
    }}>
      <ScrollReset />
      
      <Navbar />

      {/* Main content wrapper grows to push footer down */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                   element={<Home />} />
            <Route path="/about"              element={<About />} />
            <Route path="/services"           element={<Services />} />
            <Route path="/services/:slug"     element={<ServiceDetail />} />
            <Route path="/industries"         element={<Industries />} />
            <Route path="/quote"              element={<Quote />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/privacy-policy"     element={<Privacy />} />
            <Route path="/terms-of-service"   element={<Terms />} />
            <Route path="/cookie-policy"      element={<Cookies />} />
            <Route path="*"                   element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Persistent Floating Actions */}
      <WhatsAppButton />
      <ScrollToTop />

      {/* Base CSS for transitions */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
          font-family: 'DM Sans', sans-serif; 
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          width: 100%;
        }
        /* Prevents horizontal jiggle on mobile 320px */
        #root { overflow-x: hidden; width: 100%; position: relative; }
      `}</style>
    </div>
  )
}