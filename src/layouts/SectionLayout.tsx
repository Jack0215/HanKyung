import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import SubHero from '../components/SubHero'
import Sidebar, { type SidebarGroup } from '../components/Sidebar'

type SectionLayoutProps = {
  eyebrow: string
  title: string
  lead?: string
  sidebarGroups?: SidebarGroup[]
  children?: ReactNode
}

function SectionLayout({ eyebrow, title, lead, sidebarGroups, children }: SectionLayoutProps) {
  return (
    <>
      <SubHero eyebrow={eyebrow} title={title} lead={lead} />
      <div className={`section-body wrap${sidebarGroups ? '' : ' no-sidebar'}`}>
        {sidebarGroups && <Sidebar groups={sidebarGroups} />}
        <div className="section-content">{children ?? <Outlet />}</div>
      </div>
    </>
  )
}

export default SectionLayout
