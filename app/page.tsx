import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import JourneySection from '@/components/sections/JourneySection'
import DSASection from '@/components/sections/DSASection'
import ContactSection from '@/components/sections/ContactSection'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/ui/LoadingScreen'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#0a0a0b' }}>
      {/* Global overlays */}
      <LoadingScreen />
      <NoiseOverlay />
      <ScrollProgressBar />
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Page sections */}
      <HeroSection />

      <SectionDivider dot />
      <AboutSection />

      <SectionDivider dot />
      <SkillsSection />

      <SectionDivider dot />
      <ProjectsSection />

      <SectionDivider dot />
      <JourneySection />

      <SectionDivider dot />
      <DSASection />

      <SectionDivider dot />
      <ContactSection />

      <SectionDivider />
      <Footer />
    </main>
  )
}
