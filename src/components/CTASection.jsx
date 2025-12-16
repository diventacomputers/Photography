function CTASection() {
  return (
    <section className="cta" id="contacto">
      <div>
        <p className="eyebrow">Contacto directo</p>
        <h2>Conversemos sobre tu próxima sesión</h2>
        <p>
          Agenda en línea o comparte tu idea para recibir una propuesta personalizada. Respondo en español e inglés con
          disponibilidad para viajes.
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
  )
}

export default CTASection
