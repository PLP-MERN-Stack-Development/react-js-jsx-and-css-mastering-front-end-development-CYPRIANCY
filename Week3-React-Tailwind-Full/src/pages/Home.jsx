import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="grid gap-4">
      <Card>
        <h2 className="text-xl font-semibold">Welcome</h2>
        <p className="mt-2 text-sm">This starter demonstrates components, hooks, Tailwind styling, theme switcher, task manager, and API integration.</p>
      </Card>
    </div>
  )
}
