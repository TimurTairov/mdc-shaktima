import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
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



const AppRouter = () => {
  return (
    <Router >
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='blog' element={<Blog />} />
          <Route path='neoadwayta' element={<NeoAdwayta />} />
          <Route path='mahashivaratri2024' element={<MahaShivaRatri2024 />} />
          <Route path='eventlist2024' element={<Eventlist2024 />} />
          <Route path='donate' element={<Donate />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter