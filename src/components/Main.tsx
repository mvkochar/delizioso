import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Checkout, Contact, Home, Menu, OrderOnline, Reservation } from '../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='menu'
        element={<Menu />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='reservation'
        element={<Reservation />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='order-online'
        element={<OrderOnline />}
      />
      <Route
        path='checkout'
        element={<Checkout/>}
      />
    </Routes>
  )
}

export default Main