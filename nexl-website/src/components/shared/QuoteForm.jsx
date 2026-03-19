import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES_LIST = [
  'Sea Freight (FCL)', 'Sea Freight (LCL)', 'Air Freight',
  'LCL Consolidation', 'Customs Clearance', 'Door-to-Door',
  'Project Cargo', 'Domestic & Coastal', 'Other',
]

const inpStyle = {
  width: '100%', 
  padding: '14px 16px', 
  borderRadius: '12px',
  border: '1px solid rgba(11,31,58,0.12)', 
  background: '#fff',
  color: '#0b1f3a', // var(--navy)
  fontSize: '15px', // 16px prevents iOS zoom-in on focus
  outline: 'none',
  fontFamily: 'inherit', 
  transition: 'all 0.2s ease',
}

export default function QuoteForm() {
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(formRef.current)
    const payload = Object.fromEntries(data.entries())
    
    try {
      // Replace with your actual Formspree ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) { 
        setStatus('success'); 
        formRef.current.reset() 
      } else {
        setStatus('error')
      }
    } catch { 
      setStatus('error') 
    }
  }

  const renderField = (label, name, type = 'text', placeholder = '', required = true) => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <label style={{ 
        display: 'block', 
        fontSize: '13px', 
        fontWeight: 700, 
        marginBottom: '8px', 
        color: '#0b1f3a',
        letterSpacing: '0.3px'
      }}>
        {label} {required && <span style={{ color: '#f97316' }}>*</span>}
      </label>
      <input 
        name={name} 
        type={type} 
        required={required} 
        placeholder={placeholder} 
        style={inpStyle}
        onFocus={e => {
          e.target.style.borderColor = '#f97316'
          e.target.style.boxShadow = '0 0 0 4px rgba(249,115,22,0.1)'
        }}
        onBlur={e => {
          e.target.style.borderColor = 'rgba(11,31,58,0.12)'
          e.target.style.boxShadow = 'none'
        }} 
      />
    </motion.div>
  )

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <div style={{ 
        display: 'grid', 
        // 1 column on mobile, 2 columns on tablet+
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
        gap: '20px' 
      }}>
        {renderField('Full Name', 'name', 'text', 'Rajan Kumar')}
        {renderField('Company Name', 'company', 'text', 'Acme Exports Pvt Ltd')}
        {renderField('Email Address', 'email', 'email', 'you@company.com')}
        {renderField('Phone Number', 'phone', 'tel', '+91 98400 00000')}

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '8px', color: '#0b1f3a' }}>
            Service Required <span style={{ color: '#f97316' }}>*</span>
          </label>
          <select 
            name="service" 
            required 
            style={{ ...inpStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
            onFocus={e => e.target.style.borderColor = '#f97316'}
            onBlur={e => e.target.style.borderColor = 'rgba(11,31,58,0.12)'}
          >
            <option value="">-- Select a Service --</option>
            {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </motion.div>

        {renderField('Origin Port / City', 'origin', 'text', 'Chennai / Mumbai')}
        {renderField('Destination Port / City', 'destination', 'text', 'Dubai / Singapore')}
        {renderField('Cargo Description', 'cargo', 'text', 'Auto parts / Machinery')}
        {renderField('Weight / Volume', 'weight', 'text', '1 x 20ft FCL', false)}

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '8px', color: '#0b1f3a' }}>Additional Notes</label>
          <textarea 
            name="message" 
            rows={4} 
            placeholder="Special requirements, Incoterms, etc."
            style={{ ...inpStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = '#f97316'}
            onBlur={e => e.target.style.borderColor = 'rgba(11,31,58,0.12)'} 
          />
        </motion.div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="btn-primary" 
          disabled={status === 'sending'}
          style={{ 
            width: '100%', 
            justifyContent: 'center', 
            padding: '18px', 
            fontSize: '16px', 
            fontWeight: 700,
            opacity: status === 'sending' ? 0.7 : 1,
            boxShadow: '0 10px 20px rgba(249,115,22,0.15)'
          }}
        >
          {status === 'sending' ? '⏳ Sending Request...' : 'Submit Quote Request →'}
        </motion.button>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }}
            style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', color: '#065f46', border: '1px solid rgba(16,185,129,0.2)', fontSize: '14px', textAlign: 'center', fontWeight: 500 }}
          >
            ✅ Success! Our team will respond within 4 business hours.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }}
            style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: 'rgba(239,68,68,0.1)', color: '#991b1b', border: '1px solid rgba(239,68,68,0.2)', fontSize: '14px', textAlign: 'center', fontWeight: 500 }}
          >
            ❌ Error. Please try again or email us directly.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}