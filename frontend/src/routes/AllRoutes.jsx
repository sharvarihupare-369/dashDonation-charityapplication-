import React from 'react'

import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminUsers from '../components/AdminUsers';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminSideBar from '../components/AdminSideBar';
import Home from '../pages/Home';
import Donation from '../pages/Donation'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import PrivateRoutes from '../components/PrivateRoutes'
import DonationList from '../pages/donation'
import DonationModal from '../pages/AddDonation'
import DonationPage from '../pages/DonationData'
import Donation from '../pages/DonationData'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/donation' element={<PrivateRoutes>
        <Donation /></PrivateRoutes>} />
      <Route path='/donationdata' element={<PrivateRoutes><DonationList/></PrivateRoutes>}></Route>
      <Route path="/users/register" element={<SignupPage />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path="/" element={<Home/>} />
  <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/donation" element={<Donation/>} />
      <Route path="/users/register" element={<SignupPage/>} />
      <Route path="/users/login" element={<LoginPage/>} />
    </Routes>
  )
}


export default AllRoutes;
