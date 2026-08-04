import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import AboutLayout from './pages/about/AboutLayout'
import CeoGreeting from './pages/about/CeoGreeting'
import Policy from './pages/about/Policy'
import History from './pages/about/History'
import Organization from './pages/about/Organization'
import Facilities from './pages/about/Facilities'
import Location from './pages/about/Location'
import Products from './pages/Products'
// import Contact from './pages/Contact' // 문의하기 페이지 임시 비활성화 (추후 사용 예정)
import './App.scss'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<CeoGreeting />} />
          <Route path="policy" element={<Policy />} />
          <Route path="history" element={<History />} />
          <Route path="organization" element={<Organization />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="products" element={<Products />} />
        {/* <Route path="contact" element={<Contact />} /> 문의하기 페이지 임시 비활성화 (추후 사용 예정) */}
      </Route>
    </Routes>
  )
}

export default App
