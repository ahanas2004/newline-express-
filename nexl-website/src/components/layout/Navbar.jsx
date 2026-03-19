import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE_PHONE } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      {/* 1. Top Bar - Hidden on small mobile to save space */}
      <div style={{ 
        background: '#071528', 
        color: 'rgba(255,255,255,0.5)', 
        fontSize: '11px', 
        padding: '8px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 20px'
        }}>
          <span style={{ display: window.innerWidth < 420 ? 'none' : 'block' }}>
            📍 George Town, Chennai - 600001
          </span>
          <a href={`tel:${SITE_PHONE}`} style={{ 
            color: 'rgba(255,255,255,0.55)', 
            textDecoration: 'none',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{ color: '#F97316' }}>📞</span> {SITE_PHONE}
          </a>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <nav style={{
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        background: scrolled || !isHome ? '#071528' : 'rgba(7,21,40,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: scrolled ? '64px' : '72px',
          padding: '0 20px',
          transition: 'height 0.3s ease'
        }}>

          {/* Logo with White Badge Fix */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ 
              background: '#fff', 
              padding: '4px 8px', 
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img
                src="/images/nexl_logo.jpeg"
                alt="NEXL"
                style={{ height: scrolled ? '32px' : '38px', width: 'auto', transition: 'height 0.3s' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: active ? '#F97316' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Actions: Quote Button + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/quote" className="btn-primary" style={{ 
              fontSize: '13px', 
              padding: '10px 20px',
              display: window.innerWidth < 375 && !scrolled ? 'none' : 'flex' 
            }}>
              Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hamburger-btn"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              {mobileOpen
                ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* 3. Animated Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ 
                background: '#071528', 
                borderTop: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden'
              }}
            >
              <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: pathname === link.href ? '#F97316' : 'rgba(255,255,255,0.8)',
                      background: pathname === link.href ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.03)',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/quote" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center', padding: '16px' }}>
                  Get a Free Quote →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 960px) { .desktop-nav { display: none !important; } }
        @media (min-width: 961px) { .hamburger-btn { display: none !important; } }
      `}</style>
    </>
  )
}