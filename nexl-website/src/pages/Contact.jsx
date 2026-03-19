import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import { SITE_PHONE, SITE_EMAIL, SITE_ADDRESS, SITE_OWNER } from '@/lib/constants'

export default function Contact() {
  const cards = [
    { icon: '📞', title: 'Call Us', value: SITE_PHONE, href: `tel:${SITE_PHONE}`, sub: 'Mon–Sat, 9am–7pm IST' },
    { icon: '✉️', title: 'Email Us', value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}`, sub: 'Response within 4 hours' },
    { icon: '📍', title: 'Visit Us', value: 'George Town, Chennai', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS)}`, sub: SITE_ADDRESS },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <>
      <PageHero
        tag="Contact"
        title="Get in Touch"
        subtitle="Have a shipment to discuss? Mohammed Idhirish and his team are ready to help — reach out any way that suits you."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section style={{ padding: 'clamp(60px, 10vw, 80px) 0', background: '#fdfbf7' }}>
        <div className="container" style={{ padding: '0 20px' }}>

          {/* 1. Contact Cards - Staggered Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
              gap: '20px', 
              marginBottom: 'clamp(48px, 8vw, 64px)' 
            }}
          >
            {cards.map(c => (
              <motion.a 
                key={c.title} 
                href={c.href} 
                target={c.icon === '📍' ? '_blank' : undefined} 
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none', 
                  background: '#fff', 
                  borderRadius: '20px', 
                  padding: '32px 24px', 
                  textAlign: 'center', 
                  border: '1px solid rgba(11,31,58,0.06)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <div style={{ fontSize: '44px', marginBottom: '20px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Syne', fontSize: '18px', fontWeight: 700, color: '#0b1f3a', marginBottom: '8px' }}>{c.title}</h3>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#f97316', marginBottom: '8px', wordBreak: 'break-word' }}>{c.value}</p>
                <p style={{ fontSize: '13px', color: '#718096', lineHeight: 1.5 }}>{c.sub}</p>
              </motion.a>
            ))}
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
            gap: 'clamp(40px, 8vw, 64px)' 
          }}>
            
            {/* 2. Form Section */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 800, color: '#0b1f3a', marginBottom: '24px' }}>Send Us an Enquiry</h2>
              <div style={{ background: '#fff', borderRadius: '24px', padding: 'clamp(24px, 5vw, 40px)', border: '1px solid rgba(11,31,58,0.06)', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
                <QuoteForm />
              </div>
            </motion.div>

            {/* 3. Map & Office Info Section */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 800, color: '#0b1f3a', marginBottom: '24px' }}>Our Office</h2>
              <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '24px', border: '1px solid rgba(11,31,58,0.06)', height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.874136611584!2d80.2882572!3d13.0967344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f42095f6f3a%3A0x7d9f9f9f9f9f9f9f!2sGeorge%20Town%2C%20Chennai!5e0!3m2!1sen!2sin!4v1647781234567!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  title="NEXL Office Location"
                />
              </div>
              <div style={{ background: '#071528', borderRadius: '24px', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 800, color: '#fff', marginBottom: '24px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#f97316' }}>🏢</span> Chennai Head Office
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ flexShrink: 0 }}>👤</span>
                    <span style={{ lineHeight: 1.5 }}><strong>Proprietor:</strong> {SITE_OWNER}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ flexShrink: 0 }}>📍</span>
                    <span style={{ lineHeight: 1.5 }}>{SITE_ADDRESS}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ flexShrink: 0 }}>🕐</span>
                    <span style={{ lineHeight: 1.5 }}>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}