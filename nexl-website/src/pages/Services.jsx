import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* FIXED HERO SECTION FOR MOBILE OVERFLOW */}
      <PageHero
        tag="Our Services"
        title={
          <span style={{ 
            fontSize: 'clamp(20px, 6vw, 52px)', // Lowered min from 30px to 24px
            display: 'block',
            lineHeight: 1.1,
            wordBreak: 'break-word', // Safety for very long words
            overflowWrap: 'break-word'
          }}>
            Comprehensive <br className="mobile-only-break" /> Freight Solutions
          </span>
        }
        subtitle={
          <span style={{ 
            display: 'block', 
            maxWidth: '580px', 
            margin: '0 auto', 
            fontSize: 'clamp(14px, 4vw, 17px)', 
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            padding: '0 0px'
          }}>
            Seven core services. One trusted partner. From your factory floor to your customer's door — anywhere in the world.
          </span>
        }
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section style={{ 
        padding: 'clamp(60px, 10vw, 96px) 0', 
        background: '#fdfbf7' 
      }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
            gap: '24px' 
          }}>
            {SERVICES.map(service => (
              <motion.div key={service.slug} variants={cardVariants} whileHover={{ y: -8 }}>
                <Link to={`/services/${service.slug}`}
                  style={{ 
                    display: 'block', 
                    textDecoration: 'none', 
                    background: '#fff', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(11,31,58,0.06)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ height: '6px', background: service.color }} />
                  
                  <div style={{ padding: 'clamp(24px, 5vw, 32px)' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '32px', marginBottom: '24px', 
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}20`
                    }}>{service.icon}</div>

                    <h2 style={{ 
                      fontFamily: 'Syne, sans-serif', 
                      fontSize: '22px', 
                      fontWeight: 800, 
                      color: '#0b1f3a', 
                      marginBottom: '12px' 
                    }}>{service.title}</h2>

                    <p style={{ 
                      fontSize: '14px', 
                      lineHeight: 1.6, 
                      color: '#4a5568', 
                      marginBottom: '24px' 
                    }}>
                      {service.shortDesc || service.fullDesc.substring(0, 100) + '...'}
                    </p>

                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      marginBottom: '28px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '10px' 
                    }}>
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#4a5568', fontWeight: 500 }}>
                          <span style={{ 
                            width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0, 
                            display: 'flex', alignItems: 'center', justifyContent: 'center', 
                            fontSize: '9px', background: `${service.color}20`, color: service.color, fontWeight: 800 
                          }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      color: service.color 
                    }}>
                      View Details <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Essential for fixing the PageHero title overflow */
        .mobile-only-break { display: none; }
        @media (max-width: 480px) {
          .mobile-only-break { display: block; }
        }
      `}</style>
    </motion.div>
  )
}