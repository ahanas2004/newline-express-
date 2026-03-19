import { HOW_IT_WORKS } from '@/lib/constants'
import SectionHeading from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section style={{ 
      padding: 'clamp(60px, 12vw, 96px) 0', 
      background: '#071528', // var(--navy) fallback
      overflow: 'hidden' 
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <SectionHeading
          tag="How It Works"
          title="Ship with Us in 4 Simple Steps"
          subtitle="From enquiry to delivery — a transparent, hassle-free process every time."
          light
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            // Responsive Grid: 1 col on mobile, 2 on small tablets, 4 on desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
            gap: 'clamp(40px, 5vw, 32px)', 
            position: 'relative' 
          }}
        >
          {/* Desktop Connecting Line (Hidden on mobile) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.4), transparent)',
              display: 'var(--display-line, block)',
              transformOrigin: 'left',
              zIndex: 0
            }} 
          />

          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={i}
              variants={stepVariants}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              {/* Step circle with hover/tap animation */}
              <div style={{ 
                position: 'relative', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '24px' 
              }}>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 'clamp(64px, 15vw, 76px)', 
                    height: 'clamp(64px, 15vw, 76px)', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f97316, #c2410c)', // var(--orange)
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne', fontSize: '22px', fontWeight: 800, color: '#fff',
                    boxShadow: '0 10px 25px rgba(249,115,22,0.3)',
                    cursor: 'default'
                  }}
                >
                  {step.step || i + 1}
                </motion.div>
                
                {/* Decorative pulse effect */}
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    border: '1px solid #f97316', zIndex: -1
                  }}
                />
              </div>

              <h3 style={{ 
                fontFamily: 'Syne', 
                fontSize: 'clamp(18px, 4vw, 20px)', 
                fontWeight: 700, 
                color: '#fff', 
                marginBottom: '12px' 
              }}>
                {step.title}
              </h3>
              
              <p style={{ 
                fontSize: '14px', 
                lineHeight: 1.6, 
                color: 'rgba(255,255,255,0.5)', 
                maxWidth: '240px', 
                margin: '0 auto' 
              }}>
                {step.desc}
              </p>

              {/* Mobile Separator (Only shows on mobile between items) */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="mobile-arrow" style={{
                  margin: '20px auto 0',
                  width: '1px',
                  height: '30px',
                  background: 'linear-gradient(to bottom, #f97316, transparent)',
                  display: 'none' // Controlled by CSS media query below
                }} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive adjustments for line and arrows */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-arrow { display: block !important; }
          :root { --display-line: none; }
        }
        @media (max-width: 375px) {
          .container { padding: 0 15px !important; }
        }
      `}</style>
    </section>
  )
}