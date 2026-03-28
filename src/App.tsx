import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WorksSection from './components/WorksSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-purple-950">
      <Header />
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
