import { useState } from 'react'
import { Link } from 'react-router-dom'
import { INDUSTRIES } from '@/lib/constants'
import SectionHeading from '@/components/shared/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'

export default function IndustriesServed() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ 
      padding: 'clamp(60px, 10vw, 96px) 0', 
      background: '#fdfbf7', // var(--cream) fallback
      overflow: 'hidden' 
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <SectionHeading
          tag="Industries"
          title="Built for Every Sector"
          subtitle="Deep industry expertise across the sectors that matter most — ensuring your cargo moves with compliance and care."
        />

        {/* Tab buttons - Now Centered & Scrollable */}
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          padding: '0 20px 12px', // Added side padding for scroll breathing room
          marginBottom: '32px',
          gap: '10px', 
          // Centering logic:
          justifyContent: 'safe center', // 'safe' prevents clipping if content overflows
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '10px 18px', 
                borderRadius: '50px',
                fontSize: '14px', 
                fontWeight: 600, 
                cursor: 'pointer',
                whiteSpace: 'nowrap', 
                flexShrink: 0, // CRITICAL: Prevents buttons from squishing to fit
                border: active === i ? '1px solid #f97316' : '1px solid rgba(11,31,58,0.1)',
                background: active === i ? '#f97316' : '#fff',
                color: active === i ? '#fff' : '#0b1f3a',
                transition: 'background 0.3s, color 0.3s',
                boxShadow: active === i ? '0 8px 16px rgba(249,115,22,0.2)' : 'none',
              }}
            >
              <span style={{ fontSize: '16px' }}>{ind.icon}</span>
              {ind.name}
            </motion.button>
          ))}
        </div>

        {/* Content panel with AnimatePresence */}
        <div style={{ position: 'relative', minHeight: '420px', maxWidth: '640px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{
                background: '#fff', 
                borderRadius: '24px', 
                padding: 'clamp(32px, 8vw, 64px) clamp(20px, 6vw, 48px)',
                textAlign: 'center',
                border: '1px solid rgba(11,31,58,0.07)',
                boxShadow: '0 20px 60px rgba(11,31,58,0.07)',
                width: '100%',
              }}
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                style={{ fontSize: 'clamp(48px, 10vw, 64px)', marginBottom: '16px' }}
              >
                {INDUSTRIES[active].icon}
              </motion.div>

              <h3 style={{ 
                fontFamily: 'Syne, sans-serif', 
                fontSize: 'clamp(22px, 5vw, 28px)', 
                fontWeight: 800, 
                color: '#0b1f3a', 
                marginBottom: '16px' 
              }}>
                {INDUSTRIES[active].name} Logistics
              </h3>

              <p style={{ 
                fontSize: 'clamp(14px, 4vw, 15px)', 
                lineHeight: 1.7, 
                color: '#4a5568', 
                marginBottom: '32px' 
              }}>
                {INDUSTRIES[active].desc}
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/quote" className="btn-primary" style={{ 
                  justifyContent: 'center', 
                  width: '100%',
                  fontSize: '15px' 
                }}>
                  Get a Quote for {INDUSTRIES[active].name} →
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Hide scrollbar CSS */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}