import './App.css'
import logo from './assets/tacy-logo.svg'

const gallery = [
  {
    title: 'Retratos editoriales',
    description: 'Iluminación suave y dirección personalizada para resaltar la esencia de cada persona.',
  },
  {
    title: 'Bodas íntimas',
    description: 'Cobertura narrativa que combina detalles, emociones y momentos espontáneos.',
  },
  {
    title: 'Marca personal',
    description: 'Series visuales coherentes para redes, web y campañas con estética cálida y auténtica.',
  },
  {
    title: 'Lifestyle',
    description: 'Historias cotidianas capturadas con sutileza y elegancia minimalista.',
  },
]

const packages = [
  {
    name: 'Esencia',
    price: '$280',
    features: ['Sesión de 1 hora', '15 fotografías editadas', 'Entrega en 5 días', 'Galería privada online'],
  },
  {
    name: 'Luz Natural',
    price: '$520',
    features: ['Sesión de 2.5 horas', '35 fotografías editadas', 'Dirección creativa y moodboard', 'Entrega en 7 días + impresiones 10x15'],
  },
  {
    name: 'Editorial',
    price: '$940',
    features: ['Producción completa', '60+ fotografías editadas', 'Equipo de estilismo y asistencia', 'Entrega en 10 días + álbum artesanal'],
  },
]

const experience = [
  {
    year: '2024',
    detail: 'Exposición "Rosas en pausa" – Galería Bruma. Premio a mejor serie análoga.',
  },
  {
    year: '2022',
    detail: 'Fotógrafa principal en 80+ sesiones de marca personal y bodas boutique.',
  },
  {
    year: '2020',
    detail: 'Certificación en retrato y edición avanzada – Escuela de Imagen Contemporánea.',
  },
]

const giftCards = [
  {
    title: 'Retrato con propósito',
    value: '$150',
    info: 'Perfecto para celebrar logros o lanzar una nueva etapa profesional.',
  },
  {
    title: 'Memorias en pareja',
    value: '$250',
    info: 'Sesión íntima al atardecer con estilismo ligero y guía completa.',
  },
  {
    title: 'Familia en movimiento',
    value: '$320',
    info: 'Cobertura documental de momentos cotidianos en casa o exterior.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="brand">
          <img src={logo} alt="Logo vintage de cámara para Tacy" className="brand__logo" />
          <div>
            <p className="eyebrow">Fotografía por</p>
            <h1>Tacy</h1>
            <p className="tagline">Historias luminosas en tonos pastel, creadas con paciencia y detalle.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contacto">Agenda una llamada</a>
              <a className="button button--ghost" href="#portfolio">Ver portafolio</a>
            </div>
          </div>
        </div>
        <div className="hero__note">
          <p>
            Sesiones personalizadas que combinan dirección artística, luz natural y una edición suave para
            resaltar emociones auténticas.
          </p>
          <div className="pill-group">
            <span className="pill">Retrato</span>
            <span className="pill">Bodas íntimas</span>
            <span className="pill">Marca personal</span>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="portfolio">
          <div className="section__header">
            <p className="eyebrow">Portafolio</p>
            <h2>Selección de trabajos recientes</h2>
            <p className="section__lead">
              Una mezcla de textura análoga y nitidez digital para imágenes que se sienten cercanas, honestas y atemporales.
            </p>
          </div>
          <div className="grid grid--portfolio">
            {gallery.map((item) => (
              <article className="card" key={item.title}>
                <div className="card__header">
                  <div className="card__badge" aria-hidden>
                    <span />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p className="card__text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--alt" id="experiencia">
          <div className="section__header">
            <p className="eyebrow">Experiencia</p>
            <h2>Una mirada cuidadosa y consistente</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline__item" key={item.year}>
                <div className="timeline__year">{item.year}</div>
                <p className="timeline__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="paquetes">
          <div className="section__header">
            <p className="eyebrow">Paquetes</p>
            <h2>Opciones curadas para cada historia</h2>
            <p className="section__lead">
              Todos los paquetes incluyen asesoría previa, guía de estilo y entrega digital en galería privada.
            </p>
          </div>
          <div className="grid grid--packages">
            {packages.map((pack) => (
              <article className="package" key={pack.name}>
                <div className="package__head">
                  <h3>{pack.name}</h3>
                  <p className="package__price">{pack.price}</p>
                </div>
                <ul className="package__list">
                  {pack.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className="button button--primary" type="button">
                  Reservar
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--alt" id="tarjetas">
          <div className="section__header">
            <p className="eyebrow">Tarjetas de regalo</p>
            <h2>Regala instantes que perduran</h2>
          </div>
          <div className="grid grid--gifts">
            {giftCards.map((card) => (
              <article className="gift" key={card.title}>
                <h3>{card.title}</h3>
                <p className="gift__value">{card.value}</p>
                <p className="gift__text">{card.info}</p>
                <button className="button button--ghost" type="button">
                  Solicitar tarjeta
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="contacto">
          <div>
            <p className="eyebrow">Contacto directo</p>
            <h2>Conversemos sobre tu próxima sesión</h2>
            <p>
              Disponible para proyectos en Ciudad de México y viajes. Envíame tu idea y recibirás una propuesta
              personalizada en menos de 24 horas.
            </p>
          </div>
          <div className="cta__actions">
            <a className="button button--primary" href="mailto:hola@tacyfoto.com">
              Escribir a hola@tacyfoto.com
            </a>
            <a className="button button--ghost" href="tel:+525555551111">
              Llamar +52 555 555 1111
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Tacy – Fotógrafa de retrato y bodas íntimas. Basada en CDMX.</p>
        <p className="footer__small">Disponible en inglés y español · Entrega segura y respaldada.</p>
      </footer>
    </div>
  )
}

export default App
