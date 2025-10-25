import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function ApiList() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [q, setQ] = useState('')
  const perPage = 10

  useEffect(() => {
    let mounted = true
    setLoading(true); setError(null)
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(r => r.json())
      .then(data => { if (mounted) setItems(data) })
      .catch(err => { if (mounted) setError(err.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [page])

  const filtered = items.filter(it => it.title.includes(q) || it.body.includes(q))

  return (
    <Card>
      <div className="mb-4 flex gap-2">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search in page results" className="flex-1 p-2 rounded border" />
        <Button onClick={() => setPage(1)}>Reset</Button>
      </div>

      {loading && <div className="py-6 text-center">Loading...</div>}
      {error && <div className="py-6 text-red-500">{error}</div>}

      <ul className="space-y-3">
        {filtered.map(item => (
          <li key={item.id} className="p-3 border rounded dark:border-gray-700">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm mt-1">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between">
        <Button variant="secondary" onClick={() => setPage(p => Math.max(1, p-1))}>Prev</Button>
        <div>Page {page}</div>
        <Button onClick={() => setPage(p => p+1)}>Next</Button>
      </div>
    </Card>
  )
}
