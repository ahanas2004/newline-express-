import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'

const SECTIONS = [
  { 
    title: 'What Are Cookies?', 
    body: 'Cookies are small text files stored on your device when you visit a website. They help the site function correctly and improve your overall browsing experience.' 
  },
  { 
    title: 'Cookies We Use', 
    body: 'NEXL uses only essential functional cookies required for secure navigation and quote form submissions. We do not use third-party advertising or tracking cookies.' 
  },
  { 
    title: 'Managing Cookies', 
    body: 'You can disable cookies through your browser settings. However, please note that disabling essential cookies may affect the functionality of the quote request forms.' 
  },
]

export default function Cookies() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <PageHero 
        tag="Legal" 
        title="Cookie Policy" 
        breadcrumbs={[{ label: 'Cookie Policy' }]} 
      />
      
      <section style={{ 
        padding: 'clamp(40px, 8vw, 80px) 0', 
        background: '#fdfbf7' // var(--cream)
      }}>
        <div className="container" style={{ maxWidth: '800px', padding: '0 20px' }}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ 
              background: '#fff', 
              borderRadius: '24px', 
              padding: 'clamp(32px, 8vw, 56px)', 
              border: '1px solid rgba(11,31,58,0.06)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
            }}
          >
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: '12px', 
                fontWeight: 700,
                color: '#f97316', 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '40px' 
              }}
            >
              Last updated: March 2026
            </motion.p>

            {SECTIONS.map((s, i) => (
              <motion.div 
                key={s.title} 
                variants={itemVariants}
                style={{ 
                  marginBottom: i === SECTIONS.length - 1 ? 0 : '32px',
                  borderLeft: '3px solid rgba(249,115,22,0.1)',
                  paddingLeft: '20px'
                }}
              >
                <h2 style={{ 
                  fontFamily: 'Syne, sans-serif', 
                  fontSize: '18px', 
                  fontWeight: 800, 
                  color: '#0b1f3a', 
                  marginBottom: '12px' 
                }}>
                  {s.title}
                </h2>
                <p style={{ 
                  fontSize: '15px', 
                  lineHeight: 1.7, 
                  color: '#4a5568' 
                }}>
                  {s.body}
                </p>
              </motion.div>
            ))}

            <motion.div 
              variants={itemVariants}
              style={{ 
                marginTop: '48px', 
                paddingTop: '32px', 
                borderTop: '1px solid #eee',
                fontSize: '14px',
                color: '#718096'
              }}
            >
              Questions? Reach out at <a href="mailto:info@nexllogistics.com" style={{ color: '#f97316', fontWeight: 600, textDecoration: 'none' }}>info@nexllogistics.com</a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}