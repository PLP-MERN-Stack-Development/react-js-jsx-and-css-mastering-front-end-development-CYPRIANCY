import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TasksPage from './pages/TasksPage'
import ApiPage from './pages/ApiPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  )
}