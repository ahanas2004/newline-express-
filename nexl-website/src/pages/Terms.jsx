import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'

const SECTIONS = [
  { 
    title: '1. Acceptance of Terms', 
    body: 'By accessing the Newline Express Logistics (NEXL) website or utilizing our logistics services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.' 
  },
  { 
    title: '2. Scope of Services', 
    body: 'NEXL provides freight forwarding, customs clearance, and end-to-end logistics solutions. All specific shipments are subject to the terms of our separate Standard Trading Conditions and Bill of Lading.' 
  },
  { 
    title: '3. Quotations & Rates', 
    body: 'Freight quotes are estimates based on user-supplied data. Final rates are subject to change based on actual cargo dimensions, weight, carrier surcharges, and applicable government duties at the time of shipping.' 
  },
  { 
    title: '4. Limitation of Liability', 
    body: 'Our liability for cargo damage or loss is strictly governed by international conventions (such as Hague-Visby or Warsaw) and the specific limits set forth in our active service agreements.' 
  },
  { 
    title: '5. Governing Law', 
    body: 'These terms are governed by the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.' 
  },
]

export default function Terms() {
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
        title="Terms of Service" 
        breadcrumbs={[{ label: 'Terms of Service' }]} 
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
                  // Visual accent for better mobile scannability
                  borderLeft: '3px solid rgba(11,31,58,0.1)',
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

            {/* Support Footer */}
            <motion.div 
              variants={itemVariants}
              style={{ 
                marginTop: '48px', 
                padding: '24px', 
                background: '#071528',
                borderRadius: '16px',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center'
              }}
            >
              Need clarification on our terms? <br /> 
              <a href="mailto:info@nexllogistics.com" style={{ color: '#f97316', fontWeight: 700, textDecoration: 'none' }}>
                Email our Compliance Team →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}