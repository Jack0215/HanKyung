import type { SidebarGroup } from '../../components/Sidebar'

export const ABOUT_NAV: SidebarGroup[] = [
  {
    title: '회사소개',
    icon: 'building',
    items: [
      { label: 'CEO 인사말', to: '/about' },
      { label: '경영방침', to: '/about/policy' },
      { label: '연혁', to: '/about/history' },
      { label: '조직도', to: '/about/organization' },
      { label: '설비현황', to: '/about/facilities' },
      { label: '오시는 길', to: '/about/location' },
    ],
  },
]
