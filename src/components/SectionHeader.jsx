function SectionHeader({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div className={`section__header section__header--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  )
}

export default SectionHeader
