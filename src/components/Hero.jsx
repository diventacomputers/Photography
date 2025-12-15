import logo from '../assets/tacy-logo.svg'

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero__badge">Fotografía por Tacy</div>
      <div className="hero__layout">
        <div className="hero__intro">
          <img src={logo} alt="Logotipo de Tacy" className="hero__logo" />
          <div>
            <p className="hero__eyebrow">Retrato · Bodas · Marca personal</p>
            <h1>Historias luminosas en tonos suaves</h1>
            <p className="hero__copy">
              Imagen minimalista con dirección cálida y edición delicada. Sesiones diseñadas para que cada gesto se sienta
              auténtico y lleno de intención.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contacto">
                Agendar llamada
              </a>
              <a className="button button--ghost" href="#portfolio">
                Ver portafolio
              </a>
            </div>
          </div>
        </div>
        <div className="hero__note">
          <p>
            Disponible para proyectos en Ciudad de México y viajes. Respuesta en 24 horas con propuesta creativa y guía de
            preparación.
          </p>
          <div className="hero__tags">
            <span>Sesiones editoriales</span>
            <span>Bodas íntimas</span>
            <span>Marca personal</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
