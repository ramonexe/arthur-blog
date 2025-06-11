import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import AdminPanel from './pages/AdminPanel'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  )
}