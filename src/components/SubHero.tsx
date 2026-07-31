import bannerPhoto from '../assets/photos/banner-welding.jpg'

type SubHeroProps = {
  eyebrow: string
  title: string
  lead?: string
}

function SubHero({ eyebrow, title, lead }: SubHeroProps) {
  return (
    <div className="sub-hero">
      <img src={bannerPhoto} className="sub-hero-photo" alt="" aria-hidden="true" />
      <div className="sub-hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <p className="sub-hero-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="sub-hero-lead">{lead}</p>}
      </div>
    </div>
  )
}

export default SubHero
