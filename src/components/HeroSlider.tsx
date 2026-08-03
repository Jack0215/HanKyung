import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import heroPhoto from '../assets/photos/hero-skyline.jpg'

const STATS = [
  { value: '2025.11', label: '설립 · 충남 당진 자체공장' },
  { value: '7+', label: '제품 라인업' },
  { value: '280+', label: '프로젝트 시공실적' },
  { value: 'KFI · ISO 9001', label: '품질 인증' },
]

const SLIDES = [
  {
    eyebrow: 'SINCE 2025 · 소방용 분기배관 전문 제조기업',
    title: (
      <>
        안전한 건축을 완성하는
        <br />
        분기배관 전문기업, 한경방재
      </>
    ),
    lead: '용접·나사·확관·그루브·메카니컬 타입은 물론 SP펌프 UNIT, 밸브장치·헷다까지 제공합니다.',
  },
  {
    eyebrow: 'OUR PHILOSOPHY',
    title: <>현장을 아는 기술,{'\n'}결과로 증명합니다</>,
    lead: '빠른 판단과 강한 실행력으로 설계부터 시공, 유지관리까지 전 과정을 주도하며 안전의 새로운 기준을 만들어갑니다.',
  },
  {
    eyebrow: 'QUALITY ASSURANCE',
    title: (
      <>
        KFI 성능인증 · ISO 9001로
        <br />
        검증된 품질
      </>
    ),
    lead: '충남 당진 자체 생산공장에서 원자재 입고부터 출고까지 전 과정을 직접 관리합니다.',
  },
]

function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [])

  const slide = SLIDES[index]

  return (
    <section className="hero">
      <img src={heroPhoto} className="hero-photo" alt="" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p className="hero-lead">{slide.lead}</p>
        <div className="hero-cta">
          <Link to="/products">
            <Button type="primary" size="large">
              제품 카테고리 보기
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="large">문의하기</Button>
          </Link>
        </div>
        <div className="hero-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              className={i === index ? 'active' : undefined}
              aria-label={`슬라이드 ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <dl className="hero-stats">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default HeroSlider
