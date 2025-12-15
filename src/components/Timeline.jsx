function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline__item" key={item.year}>
          <div className="timeline__year">{item.year}</div>
          <p className="timeline__detail">{item.detail}</p>
        </div>
      ))}
    </div>
  )
}

export default Timeline
