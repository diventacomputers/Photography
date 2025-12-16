import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import GiftCards from '../components/GiftCards'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PackageList from '../components/PackageList'
import PortfolioGrid from '../components/PortfolioGrid'
import SectionHeader from '../components/SectionHeader'
import ThemeShowcase from '../components/ThemeShowcase'
import Timeline from '../components/Timeline'
import { experience, gallery, giftCards, packages, themes } from '../data/content'

function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <main className="layout">
          <Hero />
          <ThemeShowcase items={themes} />

          <section className="section" id="portfolio">
            <SectionHeader
              eyebrow="Portafolio"
              title="Selección reciente"
              lead="Retratos, bodas y marca personal capturados con luz natural y postproducción suave."
            />
            <PortfolioGrid items={gallery} />
          </section>

          <section className="section section--alt" id="experiencia">
            <SectionHeader eyebrow="Experiencia" title="Una mirada consistente" />
            <Timeline items={experience} />
          </section>

          <section className="section" id="paquetes">
            <SectionHeader
              eyebrow="Paquetes"
              title="Opciones curadas para cada historia"
              lead="Incluyen asesoría previa, guía de estilo y entrega digital en galería privada."
            />
            <PackageList items={packages} />
          </section>

          <section className="section section--alt" id="tarjetas">
            <SectionHeader eyebrow="Tarjetas de regalo" title="Regala instantes que perduran" />
            <GiftCards items={giftCards} />
          </section>

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
