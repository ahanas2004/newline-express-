import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import { INDUSTRIES } from '@/lib/constants'

const DETAIL = {
  'Automotive': { 
    detail: 'We handle CKD/CBU vehicles, auto parts, and components with strict damage-prevention protocols. Experienced with T1/T2 supplier logistics for major OEMs.', 
    points: ['CKD & CBU shipments','OEM supplier logistics','Just-in-time delivery','Damage-free guarantee','EXIM documentation'] 
  },
  'Pharmaceuticals': { 
    detail: 'GDP-compliant cold chain logistics for APIs, finished pharmaceuticals, and medical devices. Temperature-controlled throughout with real-time monitoring.', 
    points: ['GDP compliance','Cold chain -20°C to +25°C','Regulatory documentation','Controlled substances','WHO-GMP warehouses'] 
  },
  'Oil & Gas': { 
    detail: 'Hazardous and oversized equipment logistics for upstream and downstream oil & gas. IMDG, ADR, and IATA DGR certified for dangerous goods handling.', 
    points: ['Hazardous cargo (IMDG)','Offshore equipment','Pipeline materials','Rig mobilization','Port agency services'] 
  },
  'Retail & E-commerce': { 
    detail: 'High-volume, time-critical retail logistics with flexible inventory management. Direct-to-store and e-fulfilment capabilities across Indian metros.', 
    points: ['High-volume shipments','Seasonal peak handling','Last-mile delivery','Returns management','Bonded warehousing'] 
  },
  Engineering: { 
    detail: 'Precision logistics for heavy machinery, capital goods, and industrial equipment. ODC clearances, route surveys, and specialized transport.', 
    points: ['ODC permits','Route survey & planning','Crane & rigging','Factory relocation','Project management'] 
  },
  Chemicals: { 
    detail: 'IMDG-compliant logistics for hazardous and non-hazardous chemicals. UN-classified dangerous goods with full regulatory documentation.', 
    points: ['IMDG classification','UN packing groups','MSDS handling','Tank container','Hazmat storage'] 
  },
}

export default function Industries() {
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
    <>
      <PageHero
        tag="Industries"
        title="Sector-Specific Logistics Expertise"
        subtitle="Deep domain knowledge across 6 major industries — because generic logistics isn't enough for specialised cargo."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <section style={{ padding: 'clamp(60px, 10vw, 80px) 0', background: '#fdfbf7' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              // Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', 
              gap: '24px' 
            }}
          >
            {INDUSTRIES.map(ind => {
              const d = DETAIL[ind.name]
              return (
                <motion.div 
                  key={ind.name} 
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  style={{ 
                    background: '#fff', 
                    borderRadius: '24px', 
                    padding: 'clamp(24px, 5vw, 32px)', 
                    border: '1px solid rgba(11,31,58,0.06)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ fontSize: 'clamp(32px, 8vw, 40px)' }}>{ind.icon}</div>
                    <h2 style={{ fontFamily: 'Syne', fontSize: '20px', fontWeight: 800, color: '#0b1f3a' }}>{ind.name}</h2>
                  </div>
                  
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#4a5568', marginBottom: '24px', flex: 1 }}>
                    {d.detail}
                  </p>

                  {/* Bullet points: Switches to 1 column on narrow screens (< 375px) */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                    gap: '12px', 
                    marginBottom: '28px' 
                  }}>
                    {d.points.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#0b1f3a', fontWeight: 500 }}>
                        <span style={{ width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 900, background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>✓</span>
                        <span style={{ lineHeight: 1.3 }}>{p}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/quote" style={{ 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    color: '#f97316', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px' 
                  }}>
                    Get a {ind.name} quote <span>→</span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section style={{ padding: 'clamp(64px, 10vw, 80px) 20px', background: '#071528' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container" 
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Don't see your industry?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px', fontSize: '15px' }}>We handle all types of specialized cargo. Contact our Chennai desk and we'll engineer a specific solution for you.</p>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 36px' }}>Contact Our Team →</Link>
        </motion.div>
      </section>
    </>
  )
}