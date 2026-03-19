import { Link } from 'react-router-dom'
import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/shared/SectionHeading'
import { motion } from 'framer-motion'

export default function ServicesOverview() {
  // Container variant to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Individual card variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  return (
    <section style={{ 
      padding: 'clamp(60px, 10vw, 96px) 0', 
      background: '#fdfbf7' // var(--cream) fallback
    }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <SectionHeading
          tag="Our Services"
          title="End-to-End Freight Solutions"
          subtitle="From ocean freight to customs clearance — we manage every mile of your cargo's journey with precision."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: 'grid',
            // Optimized grid for 320px - 420px: 1 col on mobile, 2 on tablet, 3+ on desktop
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/services/${service.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  textDecoration: 'none',
                  background: '#fff',
                  borderRadius: '20px',
                  padding: 'clamp(24px, 5vw, 32px)',
                  border: '1px solid rgba(11,31,58,0.06)',
                  boxShadow: '0 10px 30px rgba(11,31,58,0.03)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(11,31,58,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(11,31,58,0.03)'}
              >
                {/* Icon Container */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '24px',
                  background: `${service.color}12`, // Light version of service color
                  color: service.color,
                }}>
                  {service.icon}
                </div>

                <h3 style={{ 
                  fontFamily: 'Syne, sans-serif', 
                  fontSize: '19px', 
                  fontWeight: 700, 
                  color: '#0b1f3a', // var(--navy)
                  marginBottom: '12px' 
                }}>
                  {service.title}
                </h3>

                <p style={{ 
                  fontSize: '14px', 
                  lineHeight: 1.6, 
                  color: '#4a5568', // var(--steel)
                  marginBottom: '24px',
                  flexGrow: 1 // Keeps buttons aligned even if text length varies
                }}>
                  {service.shortDesc}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  color: service.color 
                }}>
                  Learn more
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <Link to="/services" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View All Services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}