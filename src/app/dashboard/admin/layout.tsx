import React from 'react'

export default function AdminDashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <div id="dashboard">
      {children}
    </div>
  )
}
