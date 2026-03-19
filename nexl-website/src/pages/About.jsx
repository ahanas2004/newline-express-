import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const MILESTONES = [
  { year: '2010', event: 'Founded in Chennai with a focus on sea freight exports from George Town.' },
  { year: '2013', event: 'Obtained IATA accreditation and launched air freight division.' },
  { year: '2016', event: 'Expanded to 5 major Indian ports — Mumbai, JNPT, Kolkata, Kochi, Mundra.' },
  { year: '2019', event: 'Launched project cargo division for ODC and heavy lift movements.' },
  { year: '2022', event: 'Achieved FIATA membership and launched digital tracking portal.' },
  { year: '2024', event: 'Crossed 2,000+ annual shipments with a global agent network in 80+ countries.' },
]

const VALUES = [
  { icon: '🎯', title: 'Mission', desc: 'Deliver reliable, transparent freight solutions that empower businesses globally.' },
  { icon: '🌍', title: 'Vision', desc: 'To be the most trusted freight partner for Indian businesses going global.' },
  { icon: '🤝', title: 'Values', desc: 'Integrity, transparency, and long-term partnerships over transactions.' },
  { icon: '⭐', title: 'Promise', desc: "Every shipment treated with the same care we'd give our own cargo." },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <PageHero
        tag="About Us"
        title="Your Trusted Freight Partner Since 2010"
        subtitle="From a small freight office in George Town, Chennai to a globally connected logistics company — our story is built on trust and expertise."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 1. Our Story & Values */}
      <section style={{ padding: 'clamp(60px, 10vw, 96px) 0', background: '#fdfbf7' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
              gap: 'clamp(40px, 8vw, 80px)', 
              alignItems: 'center' 
            }}
          >
            <motion.div variants={itemVariants}>
              <div className="section-tag" style={{ marginBottom: '16px' }}>Our Story</div>
              <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, color: '#0b1f3a', marginBottom: '24px', lineHeight: 1.1 }}>
                Newline Express Logistics — Passion for Global Trade
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a5568', marginBottom: '20px' }}>
                Founded by <strong>Mohammed Idhirish</strong>, NEXL was born in the historic George Town trading district of Chennai. We have been at the heart of India's import-export ecosystem for over a decade.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a5568', marginBottom: '32px' }}>
                Our personalized approach means you always have direct access to an expert—no call centers, just real people.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>Get in Touch →</Link>
            </motion.div>

            {/* Values Grid - Responsive 1col to 2col */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '16px' 
            }}>
              {VALUES.map(v => (
                <motion.div key={v.title} variants={itemVariants} whileHover={{ y: -5 }} style={{
                  padding: '24px', borderRadius: '16px',
                  background: '#fff', border: '1px solid rgba(11,31,58,0.06)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
                }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '15px', fontWeight: 700, color: '#0b1f3a', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#718096' }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Founder Profile */}
      <section style={{ padding: 'clamp(60px, 10vw, 80px) 0', background: '#071528' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <div style={{
              width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto 24px',
              background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne', fontWeight: 800, fontSize: '28px', color: '#fff',
              boxShadow: '0 0 30px rgba(249,115,22,0.3)'
            }}>MI</div>
            <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Mohammed Idhirish</h3>
            <p style={{ fontSize: '14px', color: '#f97316', marginBottom: '24px', fontWeight: 700, letterSpacing: '1px' }}>FOUNDER & PROPRIETOR</p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              With deep roots in Chennai's trading community, Mohammed Idhirish personally oversees every aspect of NEXL's operations to ensure expert, personalized service.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {['IATA Accredited', 'FIATA Member', 'Licensed CHA', 'ISO 9001'].map(c => (
                <span key={c} style={{
                  fontSize: '11px', padding: '6px 14px', borderRadius: '50px',
                  background: 'rgba(249,115,22,0.1)', color: '#f97316',
                  border: '1px solid rgba(249,115,22,0.2)', fontWeight: 700,
                }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Journey Timeline */}
      <section style={{ padding: 'clamp(60px, 10vw, 96px) 0', background: '#fdfbf7', overflow: 'hidden' }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <SectionHeading tag="Our Journey" title="A Decade of Growth" />
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', left: '23px', top: 0, width: '2px', 
                background: 'linear-gradient(to bottom, #f97316, rgba(249,115,22,0.1))',
                borderRadius: '2px' 
              }} 
            />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {MILESTONES.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', gap: '20px', position: 'relative' }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
                    background: '#071528', border: '3px solid #f97316',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne', fontWeight: 800, fontSize: '12px', color: '#fff',
                    zIndex: 2
                  }}>
                    {m.year.slice(2)}
                  </div>
                  <div style={{ paddingTop: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#f97316', display: 'block', marginBottom: '4px' }}>{m.year}</span>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4a5568' }}>{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}