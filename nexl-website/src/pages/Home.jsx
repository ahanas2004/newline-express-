import { motion } from 'framer-motion'
// Home Components
import HeroSection      from '@/components/home/HeroSection'
import StatsBar         from '@/components/home/StatsBar'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs      from '@/components/home/WhyChooseUs'
import IndustriesServed from '@/components/home/IndustriesServed'
import HowItWorks       from '@/components/home/HowItWorks'
import ClientLogos      from '@/components/home/ClientLogos'
import Testimonials     from '@/components/home/Testimonials'
import CtaBanner        from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ overflowX: 'hidden' }} // Prevents horizontal scroll on 320px screens
    >
      {/* Above the fold */}
      <HeroSection />
      <StatsBar />

      {/* Narrative & Services */}
      <ServicesOverview />
      <WhyChooseUs />
      
      {/* Interactive Sections */}
      <IndustriesServed />
      <HowItWorks />
      
      {/* Trust & Social Proof */}
      <ClientLogos />
      <Testimonials />
      
      {/* Closing CTA */}
      <CtaBanner />
    </motion.div>
  )
}