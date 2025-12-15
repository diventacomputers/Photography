function PortfolioGrid({ items }) {
  return (
    <div className="grid grid--portfolio">
      {items.map((item) => (
        <article className="card card--floating" key={item.title}>
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
  )
}

export default PortfolioGrid
