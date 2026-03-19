import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const orbVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.05, 0.08, 0.05],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #071528 0%, #0d2545 55%, #122848 100%)',
      overflow: 'hidden',
      padding: '0 20px', // Prevents text hitting screen edges on mobile
    }}>
      {/* Background Polish */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      {/* Animated Orbs */}
      <motion.div 
        variants={orbVariants}
        animate="animate"
        style={{
          position: 'absolute', bottom: '-10%', right: '-10%',
          width: 'clamp(300px, 50vw, 600px)', height: 'clamp(300px, 50vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orange), transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} 
      />

      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '60px' }}
      >
        <div style={{ maxWidth: '860px' }}>
          
          {/* Badge */}
          <motion.div variants={itemVariants} style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 12px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '24px',
            fontSize: 'clamp(11px, 3vw, 13px)',
            color: '#fff',
            letterSpacing: '0.5px'
          }}>
            <span style={{ marginRight: '8px' }}>🚢</span> Global Freight Forwarder — Chennai
          </motion.div>

          {/* Headline - Responsive for 320px+ */}
          <motion.h1 variants={itemVariants} style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(32px, 9vw, 80px)', // Drastically better for mobile
            fontWeight: 800, color: '#fff', lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Moving Cargo <br />
            <span style={{ 
              color: 'var(--orange)',
              display: 'inline-block',
              marginTop: '4px' 
            }}>Across the Globe,</span>
            <br /> Seamlessly.
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} style={{
            fontSize: 'clamp(15px, 4vw, 19px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            Sea, air, and customs clearance handled by experts with deep logistics experience from Chennai to the world.
          </motion.p>

          {/* Buttons - Stack on tiny mobile, side-by-side on 420px */}
          <motion.div variants={itemVariants} style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px', 
            marginBottom: '48px' 
          }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/quote" className="btn-primary" style={{ 
                fontSize: '15px', padding: '16px 28px', display: 'flex', alignItems: 'center', gap: '8px' 
              }}>
                Get a Free Quote
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/services" className="btn-outline" style={{ fontSize: '15px', padding: '16px 28px' }}>
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust badges - Grid for small screens */}
          <motion.div variants={itemVariants} style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
            gap: '10px',
            maxWidth: '600px'
          }}>
            {['IATA Certified', 'FIATA Member', 'Licensed CHA', 'Pan-India Network'].map((item) => (
              <div key={item} style={{
                fontSize: '11px', padding: '10px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <span style={{ color: 'var(--orange)' }}>✓</span> {item}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Hint - Only visible if screen is tall enough */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          display: window.innerHeight < 600 ? 'none' : 'flex'
        }}
      >
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--orange), transparent)' }} 
        />
      </motion.div>
    </section>
  );
}