import SectionLayout from '../../layouts/SectionLayout'
import { ABOUT_NAV } from './aboutNav'

function AboutLayout() {
  return (
    <SectionLayout
      eyebrow="COMPANY"
      title="회사소개"
      lead="품질과 신뢰로 완성하는 소방배관 전문기업"
      sidebarGroups={ABOUT_NAV}
    />
  )
}

export default AboutLayout
