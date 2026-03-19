import { CLIENT_LOGOS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function ClientLogos() {
  // Triple the logos to ensure there's never a gap during the infinite loop
  const tripled = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section style={{
      padding: 'clamp(40px, 8vw, 56px) 0', 
      overflow: 'hidden',
      background: '#fdfbf7', // var(--cream) fallback
      borderTop: '1px solid rgba(11,31,58,0.06)',
      borderBottom: '1px solid rgba(11,31,58,0.06)',
    }}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          textAlign: 'center', 
          fontSize: '10px', 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          color: '#718096', // var(--steel)
          marginBottom: '32px',
          padding: '0 20px'
        }}
      >
        Trusted by Leading Companies Across India
      </motion.p>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* Responsive Fade Edges: Narrower on mobile so logos are visible */}
        <div style={{ 
          position: 'absolute', left: 0, top: 0, bottom: 0, 
          width: 'clamp(40px, 15vw, 120px)', zIndex: 2, 
          pointerEvents: 'none', 
          background: 'linear-gradient(to right, #fdfbf7, transparent)' 
        }} />
        <div style={{ 
          position: 'absolute', right: 0, top: 0, bottom: 0, 
          width: 'clamp(40px, 15vw, 120px)', zIndex: 2, 
          pointerEvents: 'none', 
          background: 'linear-gradient(to left, #fdfbf7, transparent)' 
        }} />

        {/* The Marquee Track */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} // Adjusted to -50% because we tripled the array
          transition={{ 
            ease: "linear", 
            duration: 25, // Adjust for speed
            repeat: Infinity 
          }}
          style={{ 
            display: 'flex', 
            gap: '16px',
            paddingLeft: '16px' 
          }}
        >
          {tripled.map((logo, i) => (
            <div key={i} style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '12px 24px', 
              borderRadius: '12px',
              background: '#fff', 
              border: '1px solid rgba(11,31,58,0.06)',
              fontFamily: 'Syne, sans-serif', 
              fontWeight: 700, 
              fontSize: '13px',
              color: '#4a5568', 
              minWidth: 'clamp(140px, 40vw, 180px)', 
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            }}>
              {/* If it's an image, replace with <img src={logo} alt="client" /> */}
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}