import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #071528, #122848)', textAlign: 'center', padding: '60px 24px' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
        <div style={{ fontFamily: 'Syne', fontSize: 'clamp(80px, 18vw, 160px)', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, var(--orange), rgba(249,115,22,0.2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>404</div>
        <h1 style={{ fontFamily: 'Syne', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>This Page Got Lost at Sea</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '40px' }}>
          The page you're looking for may have been moved or never existed. Let's get your shipment back on course.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
          <Link to="/" className="btn-primary">← Back to Home</Link>
          <Link to="/services" className="btn-outline">View Services</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {[['Sea Freight','/services/sea-freight'],['Air Freight','/services/air-freight'],['Get a Quote','/quote'],['About Us','/about']].map(([l,h]) => (
            <Link key={h} to={h} style={{ fontSize: '12px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}
