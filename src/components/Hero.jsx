import logo from '../assets/tacy-logo.svg'

function Hero() {
  return (
    <header className="hero" id="inicio">
      <img src={logo} alt="Logotipo de Tacy" className="hero__logo" />
      <p className="hero__eyebrow">Retrato · Bodas · Marca personal</p>
      <h1>Momentos especiales capturados auténticamente</h1>
      <p className="hero__copy">
        Sesiones de luz natural con dirección cálida, edición delicada y una mirada editorial. Disponible para bodas,
        familia, maternidad y marca personal con desplazamiento para destinos.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#contacto">
          Agendar llamada
        </a>
        <a className="button button--ghost" href="#portfolio">
          Ver portafolio
        </a>
      </div>
      <div className="hero__note">
        <span>Ciudad de México · Destinos</span>
        <span>Entrega en galería privada</span>
        <span>Edición fina</span>
      </div>
    </header>
  )
}

export default Hero
