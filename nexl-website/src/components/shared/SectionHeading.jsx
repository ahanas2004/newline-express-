import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle, light = false, center = true }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1 
      } 
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ 
        marginBottom: 'clamp(32px, 8vw, 56px)', 
        textAlign: center ? 'center' : 'left',
        maxWidth: '800px',
        margin: center ? '0 auto 48px' : '0 0 48px'
      }}
    >
      {/* 1. The Tag/Badge */}
      {tag && (
        <motion.div 
          variants={childVariants}
          className="section-tag" 
          style={{ 
            marginBottom: '16px',
            display: 'inline-block',
            // Ensuring the tag is always centered if the prop is true
            margin: center ? '0 auto 16px' : '0 0 16px' 
          }}
        >
          {tag}
        </motion.div>
      )}

      {/* 2. The Main Title */}
      <motion.h2 
        variants={childVariants}
        style={{ 
          fontFamily: 'Syne, sans-serif', 
          // Aggressive clamp: 26px on tiny phones, up to 48px on desktops
          fontSize: 'clamp(26px, 6vw, 48px)', 
          fontWeight: 800, 
          color: light ? '#fff' : '#0b1f3a', // var(--navy)
          lineHeight: 1.1, 
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}
      >
        {title}
      </motion.h2>

      {/* 3. The Subtitle */}
      {subtitle && (
        <motion.p 
          variants={childVariants}
          style={{ 
            fontSize: 'clamp(14px, 4vw, 17px)', 
            color: light ? 'rgba(255,255,255,0.55)' : '#4a5568', // var(--steel)
            lineHeight: 1.6, 
            maxWidth: '640px', 
            margin: center ? '0 auto' : '0',
            fontWeight: 400
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}