import { NavLink } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

export type SidebarGroup = {
  title: string
  icon?: IconName
  items: { label: string; to: string }[]
}

function Sidebar({ groups }: { groups: SidebarGroup[] }) {
  return (
    <aside className="section-sidebar">
      {groups.map((group) => (
        <div className="sidebar-group" key={group.title}>
          <div className="sidebar-group-title">
            {group.icon && <Icon name={group.icon} />}
            <span>{group.title}</span>
          </div>
          <ul>
            {group.items.map((item) =>
              item.to.startsWith('#') ? (
                <li key={item.to}>
                  <a href={item.to}>{item.label}</a>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </aside>
  )
}

export default Sidebar
