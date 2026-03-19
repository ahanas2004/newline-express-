import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import { SITE_PHONE, SITE_EMAIL } from '@/lib/constants'

export default function Quote() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        tag="Get a Quote"
        title="Request a Freight Quote"
        subtitle="Fill in your shipment details and our team will send you a competitive, transparent quote within 4 business hours."
        breadcrumbs={[{ label: 'Get a Quote' }]}
      />

      <section style={{ 
        padding: 'clamp(40px, 8vw, 80px) 0', 
        background: '#fdfbf7' // var(--cream) 
      }}>
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            // Responsive grid: 1 col on mobile, 2 col (70/30) on desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: 'clamp(32px, 5vw, 48px)', 
            alignItems: 'start' 
          }}>

            {/* Main Form Card */}
            <motion.div 
              variants={itemVariants}
              style={{ 
                background: '#fff', 
                borderRadius: '24px', 
                padding: 'clamp(24px, 6vw, 48px)', 
                border: '1px solid rgba(11,31,58,0.06)', 
                boxShadow: '0 20px 50px rgba(11,31,58,0.04)' 
              }}
            >
              <h2 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 800, color: '#0b1f3a', marginBottom: '8px' }}>Shipment Details</h2>
              <p style={{ fontSize: '14px', color: '#718096', marginBottom: '32px', lineHeight: 1.5 }}>The more details you provide, the more accurate your quote will be.</p>
              <QuoteForm />
            </motion.div>

            {/* Sidebar - Stacks below on mobile */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Trust Features */}
              <div style={{ borderRadius: '20px', padding: '32px', background: '#071528', boxShadow: '0 10px 30px rgba(7,21,40,0.2)' }}>
                <h3 style={{ fontFamily: 'Syne', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>The NEXL Advantage</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Best market rates via carrier contracts',
                    'Transparent pricing — no hidden fees',
                    'Response within 4 business hours',
                    'Expert mode-of-transport advice',
                    'Full door-to-door visibility',
                  ].map(p => (
                    <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>
                      <span style={{ color: '#f97316', fontWeight: 900 }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Contact */}
              <div style={{ borderRadius: '20px', padding: '28px', background: '#fff', border: '1px solid rgba(11,31,58,0.06)' }}>
                <h3 style={{ fontFamily: 'Syne', fontSize: '16px', fontWeight: 700, color: '#0b1f3a', marginBottom: '16px' }}>Prefer to Talk?</h3>
                <p style={{ fontSize: '13px', color: '#718096', marginBottom: '24px', lineHeight: 1.5 }}>Our proprietor, Mohammed Idhirish, is available for direct consultation.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={`tel:${SITE_PHONE}`} 
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600, color: '#0b1f3a', textDecoration: 'none' }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📞</div>
                    {SITE_PHONE}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={`mailto:${SITE_EMAIL}`} 
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600, color: '#0b1f3a', textDecoration: 'none' }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉️</div>
                    {SITE_EMAIL}
                  </motion.a>
                </div>
              </div>

              {/* Badges */}
              <div style={{ borderRadius: '20px', padding: '24px', background: 'rgba(249,115,22,0.04)', border: '1px solid rgba(249,115,22,0.1)' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#f97316', marginBottom: '16px' }}>Accredited Partner</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['IATA', 'FIATA', 'CHA', 'ISO 9001'].map(c => (
                    <span key={c} style={{ fontSize: '11px', padding: '5px 12px', borderRadius: '50px', background: '#fff', color: '#0b1f3a', border: '1px solid rgba(11,31,58,0.1)', fontWeight: 700 }}>{c}</span>
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