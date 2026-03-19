import { WHY_US } from '@/lib/constants'
import SectionHeading from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  // Animation variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.21, 1, 0.36, 1] } 
    }
  };

  return (
    <section style={{ 
      padding: 'clamp(60px, 10vw, 96px) 0', 
      background: '#071528', // var(--navy)
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)'
      }} />

      <div className="container" style={{ padding: '0 20px' }}>
        <SectionHeading
          tag="Why Choose Us"
          title="The NEXL Advantage"
          subtitle="We don't just move cargo — we build long-term partnerships based on reliability, transparency, and expertise."
          light
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            display: 'grid', 
            // Responsive grid: 1 col on mobile 320-420px, 2 on tablet, 3-4 on desktop
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', 
            gap: '16px' 
          }}
        >
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                backgroundColor: 'rgba(249,115,22,0.08)',
                borderColor: 'rgba(249,115,22,0.3)' 
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: 'clamp(24px, 5vw, 32px)', 
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{ 
                fontSize: '32px', 
                filter: 'drop-shadow(0 0 10px rgba(249,115,22,0.3))' 
              }}>
                {item.icon}
              </div>

              <div>
                <h3 style={{ 
                  fontFamily: 'Syne, sans-serif', 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: '#fff', 
                  marginBottom: '8px' 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  lineHeight: 1.6, 
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0 
                }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}