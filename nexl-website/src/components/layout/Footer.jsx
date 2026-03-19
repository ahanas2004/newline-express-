import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  SITE_NAME, SITE_SHORT, SITE_PHONE, SITE_EMAIL, 
  SITE_ADDRESS, SITE_OWNER, SERVICES, NAV_LINKS 
} from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  // Animation variants for a smooth "reveal" on scroll
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
    }
  }

  const columnVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <footer style={{ background: '#071528', color: 'rgba(255,255,255,0.5)', overflow: 'hidden' }}>
      <motion.div 
        className="container" 
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          padding: 'clamp(48px, 10vw, 80px) 24px clamp(32px, 8vw, 48px)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div style={{ 
          display: 'grid', 
          // Grid Logic: Stacks on 320px, 2-columns on 420px+, 4-columns on Desktop
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
          gap: '48px' 
        }}>

          {/* 1. Brand & Socials */}
          <motion.div variants={columnVariants}>
            {/* Logo Fix: Wrapped in a white badge to handle JPEG background properly */}
            <div style={{ 
              background: '#fff', 
              padding: '10px 14px', 
              borderRadius: '8px', 
              display: 'inline-block', 
              marginBottom: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="/images/nexl_logo.jpeg" 
                alt={SITE_NAME} 
                style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }} 
              />
            </div>
            
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)', marginBottom: '24px', maxWidth: '300px' }}>
              Your trusted global freight partner — delivering excellence across sea, air, and land since inception.
            </p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              {['L', 'T', 'F'].map((s) => (
                <motion.a 
                  key={s} 
                  href="#" 
                  whileHover={{ y: -3, backgroundColor: '#f97316', color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)',
                    fontSize: '13px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s'
                  }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '20px' }}>
              Proprietor: {SITE_OWNER}
            </p>
          </motion.div>

          {/* 2. Services Links */}
          <motion.div variants={columnVariants}>
            <h4 style={{ fontFamily: 'Syne', color: '#fff', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="footer-link">{s.title}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Quick Links */}
          <motion.div variants={columnVariants}>
            <h4 style={{ fontFamily: 'Syne', color: '#fff', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[...NAV_LINKS, { label: 'Get a Quote', href: '/quote' }].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Contact Details */}
          <motion.div variants={columnVariants}>
            <h4 style={{ fontFamily: 'Syne', color: '#fff', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '12px', fontSize: '13px', lineHeight: 1.5 }}>
                <span style={{ color: '#f97316', fontSize: '16px' }}>📍</span>
                <span>{SITE_ADDRESS}</span>
              </div>
              <a href={`tel:${SITE_PHONE}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#f97316', fontSize: '16px' }}>📞</span>{SITE_PHONE}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#f97316', fontSize: '16px' }}>✉️</span>{SITE_EMAIL}
              </a>
            </div>
            
            {/* Certifications badges */}
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['IATA', 'FIATA', 'FFFAI', 'CHA'].map((c) => (
                <span key={c} style={{
                  fontSize: '10px', padding: '4px 10px', borderRadius: '4px',
                  background: 'rgba(249,115,22,0.1)', color: '#f97316',
                  border: '1px solid rgba(249,115,22,0.2)', fontWeight: 800, letterSpacing: '0.5px'
                }}>{c}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Bar: Copyright & Policies */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
        <div className="container" style={{ 
          padding: '24px', 
          display: 'flex', 
          flexDirection: window.innerWidth < 640 ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '16px', 
          fontSize: '12px', 
          color: 'rgba(255,255,255,0.3)',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <span>© {year} {SITE_NAME} ({SITE_SHORT}). All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" className="footer-link-sub">Privacy</Link>
            <Link to="/terms-of-service" className="footer-link-sub">Terms</Link>
          </div>
        </div>
      </div>

      {/* Global Footer Styles */}
      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #f97316;
          transform: translateX(4px);
        }
        .footer-link-sub {
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link-sub:hover {
          color: #f97316;
        }
      `}</style>
    </footer>
  )
}