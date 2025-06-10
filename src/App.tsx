import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import AdminPanel from './pages/AdminPanel'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admin" element={<AdminPanel/>} />
      </Routes>
    </>
  )
}