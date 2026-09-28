export type IconName = 'building' | 'box' | 'phone' | 'message' | 'map-pin'

const PATHS: Record<IconName, string> = {
  building:
    'M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16M6 21h12M6 21H4M18 21h2M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1',
  box: 'M3 8l9-5 9 5-9 5-9-5Zm0 0v8l9 5m-9-13 9 5m0 0 9-5m-9 5v8m9-13v8l-9 5',
  phone:
    'M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 18 6 13.5 4.5 7.5A2 2 0 0 1 6.5 3Z',
  message:
    'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  'map-pin':
    'M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z',
}

function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="icon-glyph" aria-hidden="true">
      <path
        d={PATHS[name]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Icon
