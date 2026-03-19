import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section style={{
      padding: 'clamp(60px, 10vw, 96px) 20px', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #071528 0%, #122848 100%)',
    }}>
      {/* Background Polish */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      
      {/* Animated Glow Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', right: '-10%', top: '20%',
          width: 'clamp(300px, 60vw, 500px)', height: 'clamp(300px, 60vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f97316, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} 
      />

      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            margin: '0 auto 20px', 
            width: 'fit-content',
            background: 'rgba(255,255,255,0.05)',
            padding: '6px 16px',
            borderRadius: '100px',
            fontSize: '14px',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff'
          }}
        >
          🚀 Ready to Ship?
        </motion.div>

        {/* Headline - Optimized for 320px+ */}
        <motion.h2 variants={itemVariants} style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(26px, 7vw, 48px)',
          fontWeight: 800, color: '#fff', lineHeight: 1.1,
          marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px',
        }}>
          Get a Competitive Freight Quote <span style={{color: '#f97316'}}>in Under 4 Hours</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p variants={itemVariants} style={{ 
          fontSize: 'clamp(15px, 4vw, 17px)', 
          color: 'rgba(255,255,255,0.6)', 
          marginBottom: '32px', 
          maxWidth: '500px', 
          margin: '0 auto 32px', 
          lineHeight: 1.6 
        }}>
          Tell us your cargo details and our team will send you the best rates across sea, air, and road.
        </motion.p>

        {/* Buttons - Stack on mobile, side-by-side on 420px+ */}
        <motion.div variants={itemVariants} style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px', 
          justifyContent: 'center', 
          marginBottom: '40px' 
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            width: '100%'
          }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/quote" className="btn-primary" style={{ 
                fontSize: '16px', 
                padding: '14px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
              }}>
                Get a Free Quote
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-outline" style={{ 
                fontSize: '16px', 
                padding: '14px 32px',
                textDecoration: 'none'
              }}>
                Talk to an Expert
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust row - 2x2 grid on very small screens, single line on larger */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, auto))',
            gap: '16px', 
            justifyContent: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {['No hidden charges', 'Response within 4 hrs', 'IATA certified', 'Licensed CHA'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <div style={{
                width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '9px', color: '#f97316', fontWeight: 900,
              }}>✓</div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}