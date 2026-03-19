import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHero({ tag, title, subtitle, breadcrumbs = [] }) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section style={{
      position: 'relative', 
      padding: 'clamp(80px, 15vw, 120px) 20px clamp(60px, 10vw, 96px)',
      background: 'linear-gradient(135deg, #071528 0%, #122848 100%)',
      overflow: 'hidden',
    }}>
      {/* Background Polish */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      {/* Animated Glow Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 'clamp(300px, 50vw, 500px)', height: 'clamp(300px, 50vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f97316, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} 
      />

      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Breadcrumb - Optimized for 320px screens */}
        {breadcrumbs.length > 0 && (
          <motion.nav 
            variants={itemVariants}
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', // Ensures it doesn't break on tiny screens
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '12px', 
              color: 'rgba(255,255,255,0.4)', 
              marginBottom: '28px' 
            }}
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ opacity: 0.3 }}>/</span>
                {b.href
                  ? <Link to={b.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{b.label}</Link>
                  : <span style={{ color: '#f97316', fontWeight: 600 }}>{b.label}</span>
                }
              </span>
            ))}
          </motion.nav>
        )}

        {/* Tag/Badge */}
        {tag && (
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '100px',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.2)',
              color: '#f97316',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            {tag}
          </motion.div>
        )}

        {/* Title - Aggressive clamp for mobile 320px-420px */}
        <motion.h1 variants={itemVariants} style={{
          fontFamily: 'Syne, sans-serif', 
          fontSize: 'clamp(30px, 8vw, 64px)', 
          fontWeight: 800, color: '#fff', lineHeight: 1.1,
          marginBottom: '20px', maxWidth: '800px'
        }}>
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p variants={itemVariants} style={{ 
            fontSize: 'clamp(15px, 4vw, 18px)', 
            color: 'rgba(255,255,255,0.6)', 
            lineHeight: 1.6, 
            maxWidth: '620px',
            margin: 0
          }}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}