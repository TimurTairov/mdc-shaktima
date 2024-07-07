import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/Home'
import ScrollToTop from './ScrollToTop'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import Blog from '../pages/Blog'
import NeoAdwayta from '../Articles/NeoAdwayta'
import MahaShivaRatri2024 from '../Articles/MahaShivaRatri2024'
import Donate from '../pages/Donate'
import Eventlist2024 from '../Articles/Eventlist2024'
import MainLayout from '../layouts/MainLayout'
import Gallery from '../pages/Gallery'
import MShR2024Photos from '../Gallary/MShR2024Photos'
import MShR2023Photos from '../Gallary/MShR2023Photos'
import BrahmanandaJayanti2024 from '../Gallary/BrahmanandaJayanti2024'
import DattaJayanti2023 from '../Gallary/DattaJayanti2023'
import PaambatiJayanti2023 from '../Gallary/PaambatiJayanti2023'

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="neoadwayta" element={<NeoAdwayta />} />
          <Route path="mahashivaratri2024" element={<MahaShivaRatri2024 />} />
          <Route path="eventlist2024" element={<Eventlist2024 />} />
          <Route path="donate" element={<Donate />} />
          <Route path="gallary" element={<Gallery />} />
          <Route path="mahashivaratriphoto2024" element={<MShR2024Photos />} />
          <Route path="mahashivaratriphoto2023" element={<MShR2023Photos />} />
          <Route path="brahmanandajayantiphoto2024" element={<BrahmanandaJayanti2024 />} />
          <Route path="dattajayantiphoto2023" element={<DattaJayanti2023 />} />
          <Route path="paambatijayantiphoto2023" element={<PaambatiJayanti2023 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
