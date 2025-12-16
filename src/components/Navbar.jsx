import logo from '../assets/tacy-logo.svg'

const links = [
  { label: 'About', href: '#inicio' },
  { label: 'Weddings', href: '#tematicas' },
  { label: 'Family', href: '#tematicas' },
  { label: 'Maternity', href: '#tematicas' },
  { label: 'Newborn', href: '#tematicas' },
  { label: 'Business', href: '#tematicas' },
  { label: 'Gift Cards', href: '#tarjetas' },
  { label: 'Contact', href: '#contacto' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__bar page">
        <div className="brand">
          <img src={logo} alt="Logotipo de Tacy" />
          <span>Tacy Creative</span>
        </div>

        <nav className="nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href="#tematicas">
            Winter Minis
          </a>
        </nav>

        <div className="nav__cta" aria-label="Bolsa de compras">
          <span role="img" aria-hidden="true">
            🛒
          </span>
          Shopping bag
        </div>
      </div>
    </header>
  )
}

export default Navbar
