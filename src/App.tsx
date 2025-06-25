import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import PostDetail from './pages/PostDetail'
import AdminPanel from './pages/AdminPanel'
import { Button } from 'dynamix-button'
import styled from 'styled-components'
import { Bolt } from 'lucide-react'
import ClickSpark from './components/Layout/ClickSpark'
import Curso from './pages/Curso'
import Login from './pages/Login'
import BasicMenu from './components/Layout/BasicMenu'

export default function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const u = localStorage.getItem('user')
    if (u) setUser(JSON.parse(u))
  }, [])
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
        <Route path="/curso" element={<Curso />} />
        <Route path="/adm" element={<Login />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
      {user && (
        <FixedButton>
          <BasicMenu />
          {/*<Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" onClick={() => navigate('/admin')} icon={<Bolt />}>Admin</Button>*/}
        </FixedButton>
      )}
    </ClickSpark>
  )
}

const FixedButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
`