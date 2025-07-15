import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { criarPost } from '../api/PostService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'dynamix-button';
import { Editor } from '@tinymce/tinymce-react';

interface CreatePostProps {
  onPostCreated?: () => void;
}

export default function CreatePost({ onPostCreated }: CreatePostProps) {
  const [titulo, setTitulo] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const editorRef = useRef<any>(null);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_TINY_API_KEY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const editorContent = editorRef.current?.getContent() || '';

    if (!titulo || !editorContent.trim()) {
      toast.error('Título e conteúdo são obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      const data_criacao = Date.now();
      await criarPost({ titulo, conteudo: editorContent, youtubeUrl, data_criacao });
      toast.success('Post criado com sucesso!');

      setTitulo('');
      setYoutubeUrl('');
      if (editorRef.current) {
        editorRef.current.setContent('');
      }
      if (onPostCreated) {
        onPostCreated();
      }

      navigate('/');
    } catch (err: any) {
      console.error(err);
      toast.error('Erro ao criar post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>Criar Post</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Título</Label>
          <Input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder='Título do post'
          />
        </InputGroup>

        <InputGroup>
          <Label>Conteúdo</Label>
          <EditorContainer>
            <Editor
              onInit={(_evt, editor) => editorRef.current = editor}
              apiKey={apiKey}
              init={{
                height: 400,
                menubar: false,
                skin: 'oxide-dark',
                content_css: 'dark',
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'table', 'help', 'wordcount', 'emoticons'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | link | code preview | help',
                link_default_target: '_blank',
                content_style: `
                                    body { 
                                        font-family: Helvetica, Arial, sans-serif; 
                                        font-size: 14px;
                                        background-color: #0f0f13;
                                        color: #ffffff;
                                    }
                                    h1, h2, h3, h4, h5, h6 { 
                                        color: #0084ff; 
                                    }
                                    a { 
                                        color: #0084ff; 
                                    }
                                    blockquote {
                                        border-left: 4px solid #0084ff;
                                        background-color: rgba(0, 132, 255, 0.1);
                                        padding: 10px 15px;
                                        margin: 10px 0;
                                    }
                                    code {
                                        background-color: rgba(0, 132, 255, 0.1);
                                        color: #00a6ff;
                                        padding: 2px 4px;
                                        border-radius: 3px;
                                    }
                                    pre {
                                        background-color: rgba(0, 132, 255, 0.1);
                                        border: 1px solid #0084ff;
                                        padding: 10px;
                                        border-radius: 4px;
                                        overflow-x: auto;
                                    }
                                `
              }}
            />
          </EditorContainer>
        </InputGroup>

        <InputGroup>
          <Label>URL do YouTube (opcional)</Label>
          <Input
            type="text"
            value={youtubeUrl}
            onChange={e => setYoutubeUrl(e.target.value)}
            placeholder='https://www.youtube.com/watch?v=...'
          />
        </InputGroup>

        <ButtonsContainer>
          <Button
            backgroundColor="#0084ff"
            hoverBackgroundColor="#0060b9"
            activeBackgroundColor="#004381"
            onClick={() => {
              const event = { preventDefault: () => { } } as React.FormEvent;
              handleSubmit(event);
            }}
            disabled={loading}
            fullWidth
          >
            {loading ? 'Enviando...' : 'Publicar'}
          </Button>

          {onPostCreated && (
            <Button
              backgroundColor="#666666"
              hoverBackgroundColor="#555555"
              activeBackgroundColor="#444444"
              onClick={onPostCreated}
              fullWidth
            >
              Cancelar
            </Button>
          )}
        </ButtonsContainer>
      </Form>
      <ToastContainer />
    </Container>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Container = styled.div`
  padding: 1rem;
  margin: 10px;
  overflow-x: hidden;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(44, 150, 238, 0.5);
  max-width: 900px;
  width: 90vw;
  
  h1 {
    margin-bottom: 1rem;
    color: #0084ff;
  }

    @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
        h1 {
      font-size: 1.5rem;
    }
  }

    @media (max-width: 480px) {
    margin: 0 auto;
    width: 100%;
    }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #ffffff;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #0084ff;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #00a6ff;
    box-shadow: 0 0 0 2px rgba(0, 132, 255, 0.2);
  }

  &::placeholder {
    color: #888;
  }
`;

const EditorContainer = styled.div`
  .tox {
    .tox-editor-header {
      background-color: rgb(15, 16, 20) !important;
      border-color: #0084ff !important;
    }
    
    .tox-toolbar {
      background-color: rgb(15, 16, 20) !important;
      border-color: #0084ff !important;
    }
    
    .tox-edit-area {
      border-color: #0084ff !important;
    }
    
    .tox-edit-area__iframe {
      background-color: rgb(7, 8, 12) !important;
    }
    
    .tox-statusbar {
      background-color: rgb(15, 16, 20) !important;
      border-color: #0084ff !important;
      color: #ffffff !important;
    }
    
    .tox-tbtn {
      color: #ffffff !important;
      
      &:hover {
        background-color: rgba(0, 132, 255, 0.2) !important;
      }
    }
    
    .tox-tbtn--enabled {
      background-color: rgba(0, 132, 255, 0.3) !important;
    }
    
    .tox-tbtn svg {
      fill: #ffffff !important;
    }
    
    .tox-listboxfield .tox-listbox--select {
      background-color: rgb(15, 16, 20) !important;
      border-color: #0084ff !important;
      color: #ffffff !important;
    }
  }
`;