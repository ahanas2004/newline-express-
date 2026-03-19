import { useState, useEffect, useCallback } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import SectionHeading from '@/components/shared/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(0) // Track slide direction

  const next = useCallback(() => {
    setDirection(1)
    setActive(p => (p + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActive(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])

  // Framer Motion Variants for the sliding effect
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
    })
  }

  return (
    <section style={{ 
      padding: 'clamp(60px, 10vw, 96px) 0', 
      background: '#fdfbf7', // var(--cream)
      overflow: 'hidden' 
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from businesses that trust us with their most critical shipments."
        />

        <div 
          style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main Card Container */}
          <div style={{ 
            position: 'relative', 
            minHeight: 'clamp(320px, 50vh, 420px)', // Better height management for mobile
            display: 'flex',
            alignItems: 'center'
          }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                // Drag functionality for mobile touch
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x
                  if (swipe < -50) next()
                  else if (swipe > 50) prev()
                }}
                style={{
                  width: '100%',
                  background: '#0b1f3a', // var(--navy)
                  borderRadius: '24px',
                  padding: 'clamp(32px, 8vw, 56px)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                  cursor: 'grab'
                }}
                whileTap={{ cursor: 'grabbing' }}
              >
                {/* Visual Accent */}
                <div style={{ 
                  position: 'absolute', top: 0, right: 0, 
                  width: '150px', height: '150px', 
                  background: 'radial-gradient(circle at top right, rgba(249,115,22,0.1), transparent)',
                  borderRadius: '0 24px 0 100%'
                }} />

                <div style={{ 
                  fontFamily: 'Georgia, serif', 
                  fontSize: 'clamp(60px, 12vw, 80px)', 
                  lineHeight: 1, 
                  color: '#f97316', 
                  opacity: 0.4, 
                  marginBottom: '-20px' 
                }}>"</div>

                <p style={{ 
                  fontSize: 'clamp(15px, 4vw, 18px)', 
                  lineHeight: 1.7, 
                  color: 'rgba(255,255,255,0.9)', 
                  fontStyle: 'italic', 
                  marginBottom: '32px',
                  fontWeight: 400
                }}>
                  {TESTIMONIALS[active].quote}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  flexWrap: 'wrap', 
                  gap: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Syne', fontWeight: 800, fontSize: '14px', color: '#fff',
                    }}>{TESTIMONIALS[active].initials}</div>
                    <div>
                      <p style={{ fontFamily: 'Syne', fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: '0' }}>
                        {TESTIMONIALS[active].name}
                      </p>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                        {TESTIMONIALS[active].role}, {TESTIMONIALS[active].company}
                      </p>
                    </div>
                  </div>
                  <div style={{ color: '#f97316', fontSize: '14px', letterSpacing: '2px' }}>★★★★★</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Positioned for thumb-reach on mobile */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '20px', 
            marginTop: '32px' 
          }}>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={prev} 
              style={{
                width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(11,31,58,0.1)',
                background: '#fff', color: '#0b1f3a', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              ←
            </motion.button>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: active === i ? '#f97316' : 'rgba(11,31,58,0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }} 
                />
              ))}
            </div>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={next} 
              style={{
                width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(11,31,58,0.1)',
                background: '#fff', color: '#0b1f3a', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}