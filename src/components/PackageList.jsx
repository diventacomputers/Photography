function PackageList({ items }) {
  return (
    <div className="grid grid--packages">
      {items.map((pack) => (
        <article className="package card--floating" key={pack.name}>
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
            Reservar sesión
          </button>
        </article>
      ))}
    </div>
  )
}

export default PackageList
