import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'

const SECTIONS = [
  { 
    title: '1. Information We Collect', 
    body: 'We collect information you provide directly — such as your name, email, phone number, company name, and shipment details when you submit a quote request or contact form.' 
  },
  { 
    title: '2. How We Use It', 
    body: 'Your information is used solely to respond to enquiries, prepare freight quotes, and communicate regarding your shipments. We do not sell or share your data with third parties for marketing purposes.' 
  },
  { 
    title: '3. Cookies', 
    body: 'NEXL uses only essential functional cookies required for site operation. No tracking or advertising cookies are used without your explicit consent.' 
  },
  { 
    title: '4. Data Security', 
    body: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.' 
  },
  { 
    title: '5. Contact', 
    body: 'For privacy-related enquiries or to request data deletion, please email us directly at info@nexllogistics.com' 
  },
]

export default function Privacy() {
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
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <PageHero 
        tag="Legal" 
        title="Privacy Policy" 
        breadcrumbs={[{ label: 'Privacy Policy' }]} 
      />
      
      <section style={{ 
        padding: 'clamp(40px, 8vw, 80px) 0', 
        background: '#fdfbf7' 
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
                letterSpacing: '1.5px',
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
                  borderLeft: '3px solid rgba(249,115,22,0.15)',
                  paddingLeft: '24px'
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
                padding: '24px', 
                background: 'rgba(7, 21, 40, 0.03)',
                borderRadius: '16px',
                fontSize: '14px',
                color: '#718096',
                textAlign: 'center'
              }}
            >
              Have questions about your data? <br /> 
              <a href="mailto:info@nexllogistics.com" style={{ color: '#f97316', fontWeight: 700, textDecoration: 'none' }}>
                Contact our Privacy Desk →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}