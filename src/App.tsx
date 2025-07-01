import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import PostDetail from './pages/PostDetail'
import styled from 'styled-components'
import ClickSpark from './components/Layout/ClickSpark'
import Curso from './pages/Curso'
import Login from './pages/Login'
import BasicMenu from './components/Layout/BasicMenu'
import { ToastContainer } from 'react-toastify'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function AppContent() {
  const { user } = useAuth();

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
        </FixedButton>
      )}
      <ToastContainer />
    </ClickSpark>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

const FixedButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
`