import React from 'react'
import { Layout } from '../Hoc/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/particles/home'

export const RoutesComponent: React.FC<any> = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </Layout>
  )
}
