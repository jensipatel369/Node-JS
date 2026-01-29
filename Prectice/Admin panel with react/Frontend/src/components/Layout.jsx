import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Dashboard from './Dashboard'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <Dashboard />
      </div>
    </div>
  )
}

