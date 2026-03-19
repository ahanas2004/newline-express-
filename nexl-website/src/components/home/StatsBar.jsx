import { useRef } from 'react'
import { STATS } from '@/lib/constants'
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function StatItem({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  // Motion value for smooth counting
  const count = useSpring(0, {
    bounce: 0,
    duration: 2000,
    stiffness: 50,
    damping: 20
  })

  const displayValue = useTransform(count, (latest) => 
    Math.floor(latest).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      count.set(value)
    }
  }, [isInView, value, count])

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', padding: '16px 12px' }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'baseline', 
        justifyContent: 'center', 
        gap: '2px', 
        marginBottom: '4px' 
      }}>
        <motion.span style={{ 
          fontFamily: 'Syne, sans-serif', 
          fontSize: 'clamp(32px, 8vw, 48px)', 
          fontWeight: 800, 
          color: '#f97316', // var(--orange)
          lineHeight: 1 
        }}>
          {displayValue}
        </motion.span>
        <span style={{ 
          fontFamily: 'Syne, sans-serif', 
          fontSize: 'clamp(20px, 5vw, 32px)', 
          fontWeight: 800, 
          color: '#f97316', 
          lineHeight: 1 
        }}>
          {suffix}
        </span>
      </div>
      <p style={{ 
        fontSize: 'clamp(11px, 3vw, 13px)', 
        fontWeight: 600, 
        color: 'rgba(255,255,255,0.4)', 
        textTransform: 'uppercase',
        letterSpacing: '1px' 
      }}>
        {label}
      </p>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section style={{ 
      background: '#071528', // var(--navy)
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ padding: '0 10px' }}>
        <div style={{
          display: 'grid',
          // 2 columns on mobile (320px-420px), 4 columns on desktop
          gridTemplateColumns: 'repeat(2, 1fr)',
          padding: 'clamp(32px, 8vw, 64px) 0',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ 
              position: 'relative',
              // Add a border to separate the 2x2 grid on mobile
              borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>

      {/* Media query for desktop reset */}
      <style>{`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          /* Remove mobile borders and add desktop dividers */
          div[style*="border-right"], div[style*="border-bottom"] {
            border-bottom: none !important;
          }
          div[style*="border-right"]:not(:last-child) {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
          }
        }
      `}</style>
    </section>
  )
}