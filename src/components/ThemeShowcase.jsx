import { useState } from 'react'

function ThemeShowcase({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const activeItem = items.find((item) => item.id === activeId) ?? items[0]

  return (
    <section className="section section--alt" id="tematicas">
      <div className="theme-nav" role="tablist" aria-label="Temáticas de fotografía">
        {items.map((item) => (
          <button
            key={item.id}
            className={`theme-nav__item ${activeId === item.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(item.id)}
            role="tab"
            aria-selected={activeId === item.id}
            aria-controls={`theme-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="theme-nav__note">Winter Minis</div>

      {activeItem && (
        <div
          id={`theme-${activeItem.id}`}
          className="theme-card"
          role="tabpanel"
          aria-labelledby={activeItem.id}
          style={{ backgroundImage: activeItem.accent }}
        >
          <div className="theme-card__content">
            <p className="eyebrow">{activeItem.label}</p>
            <h3>{activeItem.title}</h3>
            <p className="theme-card__text">{activeItem.description}</p>
            <div className="theme-card__tags">
              {activeItem.highlights?.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
          <div className="theme-card__preview" aria-hidden="true">
            <div className="theme-card__frame">
              <div className="theme-card__frame-inner" />
            </div>
            <div className="theme-card__meta">
              <span>Serie curada</span>
              <span>Edición fina</span>
              <span>Luz natural</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ThemeShowcase
