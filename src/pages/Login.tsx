import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, AuthRequestDTO } from '../api/UserService'
import Container from '../components/Layout/ContainerAll'
import styled from 'styled-components'
import { Button } from 'dynamix-button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (!email || !senha) {
            toast.error('Email e senha são obrigatórios.')
            return
        }
        try {
            setLoading(true)
            const creds: AuthRequestDTO = { email, senha }
            const user = await login(creds)
            localStorage.setItem('user', JSON.stringify(user))
            toast.success('Autenticado com sucesso!')
            navigate('/')
        } catch (err: any) {
            const msg = err.response?.data || 'Falha na autenticação'
            toast.error(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Entrar</Title>
                <Label>
                    Email
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                    />
                </Label>
                <Label>
                    Senha
                    <Input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="••••••••"
                    />
                </Label>
                <Button
                    onClick={handleSubmit}
                    fullWidth
                    size="lg"
                    backgroundColor="#131518"
                    borderColor='#00c3ffb3'
                    hoverBackgroundColor="#1d2125"
                    activeBackgroundColor="#123788"
                    disabled={!email || !senha || loading}
                    loading={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </Button>
            </Form>
            <ToastContainer position="top-center" />
        </Container>
    )
}

const Form = styled.form`
  background: #0f0f13;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.h2`
  margin: 0 0 1rem;
  color: #00c3ff;
  text-align: center;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #ccc;
  font-size: 0.9rem;
`

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #1a1a23;
  border-radius: 4px;
  background: #1a1a23;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00c3ff;
  }
`