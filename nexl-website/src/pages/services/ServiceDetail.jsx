import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)
  
  if (!service) return <Navigate to="/services" replace />

  const others = SERVICES.filter(s => s.slug !== slug).slice(0, 3)

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* 1. Hero Section */}
      <section style={{
        padding: 'clamp(60px, 10vw, 96px) 0', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #071528 0%, #122848 100%)',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        
        {/* Dynamic Glow Orb */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ 
            position: 'absolute', top: '-60px', right: '-60px', 
            width: '400px', height: '400px', borderRadius: '50%', 
            background: `radial-gradient(circle, ${service.color}, transparent 70%)`, 
            filter: 'blur(40px)', pointerEvents: 'none' 
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
          {/* Breadcrumbs */}
          <motion.nav variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
            <span>/</span>
            <span style={{ color: '#fff' }}>{service.title}</span>
          </motion.nav>

          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              width: 'clamp(64px, 15vw, 80px)', height: 'clamp(64px, 15vw, 80px)', 
              borderRadius: '16px', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
              background: `${service.color}20`, border: `1px solid ${service.color}40`,
            }}>{service.icon}</div>
            <div>
              <div className="section-tag" style={{ marginBottom: '8px', background: `${service.color}20`, color: service.color }}>Expert Logistics</div>
              <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
                {service.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Content & Sidebar */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 0', background: '#fdfbf7' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            // Switches to 1 column on mobile, 2 columns (70/30) on desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
            gap: '40px', 
            alignItems: 'start' 
          }}>

            {/* Main Content Area */}
            <motion.div variants={itemVariants}>
              <h2 style={{ fontFamily: 'Syne', fontSize: '22px', fontWeight: 700, color: '#0b1f3a', marginBottom: '16px' }}>Service Overview</h2>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a5568', marginBottom: '40px' }}>{service.fullDesc}</p>

              <h2 style={{ fontFamily: 'Syne', fontSize: '22px', fontWeight: 700, color: '#0b1f3a', marginBottom: '24px' }}>Key Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '12px', marginBottom: '40px' }}>
                {service.features.map((f, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', 
                      borderRadius: '12px', background: '#fff', border: '1px solid rgba(11,31,58,0.06)' 
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', background: `${service.color}15`, color: service.color }}>✓</div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#0b1f3a' }}>{f}</span>
                  </motion.div>
                ))}
              </div>

              {/* Internal CTA Card */}
              <div style={{ borderRadius: '20px', padding: 'clamp(24px, 5vw, 36px)', background: '#071528', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Why NEXL for {service.title}?</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
                    With a personalised approach, we ensure your {service.title.toLowerCase()} shipments are handled with precision and full compliance.
                  </p>
                  <Link to="/quote" className="btn-primary" style={{ display: 'inline-flex', fontSize: '14px' }}>Request Quote →</Link>
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Stacks below on mobile */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Sidebar: Get Quote */}
              <div style={{ borderRadius: '16px', padding: '24px', background: '#fff', border: `1px solid ${service.color}30`, boxShadow: `0 10px 30px ${service.color}10` }}>
                <h3 style={{ fontFamily: 'Syne', fontSize: '17px', fontWeight: 700, color: '#0b1f3a', marginBottom: '8px' }}>Instant Quote</h3>
                <p style={{ fontSize: '13px', color: '#718096', marginBottom: '20px' }}>Receive a competitive rate within 4 business hours.</p>
                <Link to="/quote" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}>Get a Quote →</Link>
              </div>

              {/* Sidebar: Other Services List */}
              <div style={{ borderRadius: '16px', padding: '24px', background: '#fff', border: '1px solid rgba(11,31,58,0.06)' }}>
                <h3 style={{ fontFamily: 'Syne', fontSize: '16px', fontWeight: 700, color: '#0b1f3a', marginBottom: '16px' }}>Explore More</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {others.map(s => (
                    <Link key={s.slug} to={`/services/${s.slug}`}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', 
                        borderRadius: '10px', fontSize: '14px', fontWeight: 500, color: '#4a5568', 
                        textDecoration: 'none', transition: 'all 0.2s' 
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f7fafc'; e.currentTarget.style.color = service.color }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4a5568' }}
                    >
                      <span style={{ fontSize: '18px' }}>{s.icon}</span>{s.title}
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}