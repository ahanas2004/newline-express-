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

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <div style={{ 
        background: '#071528', 
        color: 'rgba(255,255,255,0.5)', 
        fontSize: '12px', 
        padding: '10px 0',
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

      <nav style={{
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        background: scrolled || !isHome ? '#071528' : 'rgba(7,21,40,0.9)',
        backdropFilter: 'blur(15px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          // Increased height for a more "grand" feel
          height: scrolled ? '80px' : '100px',
          padding: '0 20px',
          transition: 'height 0.4s ease'
        }}>

          {/* Logo - Significantly Larger */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ 
              background: '#fff', 
              padding: '6px 12px', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <img
                src="/images/nexl_logo.jpeg"
                alt="NEXL"
                style={{ 
                  // Scaled up height from 38px to 54px/42px
                  height: scrolled ? '42px' : '54px', 
                  width: 'auto', 
                  transition: 'height 0.4s ease' 
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Bigger Font & More Spacing */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    // Increased from 14px to 16px
                    fontSize: '16px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    color: active ? '#F97316' : 'rgba(255,255,255,0.85)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.3px'
                  }}
                  onMouseEnter={(e) => {
                    if(!active) e.target.style.color = '#fff';
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if(!active) e.target.style.color = 'rgba(255,255,255,0.85)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link to="/quote" className="btn-primary" style={{ 
              fontSize: '15px', 
              fontWeight: 700,
              padding: '12px 28px',
              display: window.innerWidth < 375 && !scrolled ? 'none' : 'flex' 
            }}>
              Get Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hamburger-btn"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '12px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              {mobileOpen
                ? <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              }
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ 
                background: '#071528', 
                borderTop: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
              }}
            >
              <div className="container" style={{ padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '12px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: pathname === link.href ? '#F97316' : 'rgba(255,255,255,0.9)',
                      background: pathname === link.href ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.04)',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/quote" className="btn-primary" style={{ marginTop: '20px', justifyContent: 'center', padding: '20px', fontSize: '18px' }}>
                  Get a Free Quote →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @media (max-width: 1100px) { .desktop-nav { display: none !important; } }
        @media (min-width: 1101px) { .hamburger-btn { display: none !important; } }
      `}</style>
    </>
  )
}