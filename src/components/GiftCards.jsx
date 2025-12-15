function GiftCards({ items }) {
  return (
    <div className="grid grid--gifts">
      {items.map((card) => (
        <article className="gift card--floating" key={card.title}>
          <div className="gift__circle" aria-hidden />
          <h3>{card.title}</h3>
          <p className="gift__value">{card.value}</p>
          <p className="gift__text">{card.info}</p>
          <button className="button button--ghost" type="button">
            Solicitar tarjeta
          </button>
        </article>
      ))}
    </div>
  )
}

export default GiftCards
