import { Routes, Route, useNavigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import PostDetail from './pages/PostDetail'
import AdminPanel from './pages/AdminPanel'
import { Button } from 'dynamix-button'
import styled from 'styled-components'
import { Bolt } from 'lucide-react'
import ClickSpark from './components/ClickSpark'

export default function App() {
  const navigate = useNavigate()
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <FixedButton>
        <Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" onClick={() => navigate('/admin')} icon={<Bolt />}>Admin</Button>
      </FixedButton>
    </ClickSpark>
  )
}

const FixedButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
`