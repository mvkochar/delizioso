import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Menu, Reservation } from '../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='menu'
        element={<Menu/>}
      />
      <Route
        path='about'
        element={<About/>}
      />
      <Route
        path='reservation'
        element={<Reservation/>}
      />
    </Routes>
  )
}

export default Main