import React, { useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'
import Card from '../components/Card'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All')

  const add = () => {
    if (!text.trim()) return
    setTasks(prev => [{ id: Date.now(), text: text.trim(), done: false }, ...prev])
    setText('')
  }

  const toggle = id => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  const remove = id => setTasks(prev => prev.filter(t => t.id !== id))

  const filtered = useMemo(() => {
    if (filter === 'Active') return tasks.filter(t => !t.done)
    if (filter === 'Completed') return tasks.filter(t => t.done)
    return tasks
  }, [tasks, filter])

  return (
    <Card>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 rounded border" value={text} onChange={e => setText(e.target.value)} placeholder="New task" />
        <Button onClick={add}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {['All','Active','Completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded ${filter===f? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>{f}</button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 && <li className="text-sm text-gray-500">No tasks</li>}
        {filtered.map(task => (
          <li key={task.id} className="flex items-center justify-between p-2 rounded border dark:border-gray-700">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.done} onChange={() => toggle(task.id)} />
              <span className={`${task.done ? 'line-through text-gray-500' : ''}`}>{task.text}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggle(task.id)}>{task.done ? 'Undo' : 'Done'}</Button>
              <Button variant="danger" onClick={() => remove(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
