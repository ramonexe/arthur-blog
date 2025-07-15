import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import PostDetail from './pages/PostDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import styled from 'styled-components'
import ClickSpark from './components/Layout/ClickSpark'
import Login from './pages/Login'
import BasicMenu from './components/Layout/BasicMenu'
import { ToastContainer } from 'react-toastify'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import CursoPage from './pages/CursoPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

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
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curso" element={<CursoPage />} />
        <Route path="/adm" element={<Login />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
      {user && (
        <FixedButton>
          <BasicMenu />
        </FixedButton>
      )}
      <ToastContainer />
      <Footer />
      <ScrollToTop />
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
  bottom: 5.5rem;
  right: 1.5rem;
  z-index: 1000;
`