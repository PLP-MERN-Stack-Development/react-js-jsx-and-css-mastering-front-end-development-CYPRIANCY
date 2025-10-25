import React from 'react'
import ApiList from '../parts/ApiList'

export default function ApiPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Public API Data (JSONPlaceholder)</h1>
      <ApiList />
    </div>
  )
}
