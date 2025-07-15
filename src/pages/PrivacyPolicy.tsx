import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button } from 'dynamix-button';
import { ArrowLeft } from 'lucide-react';
import AnimatedBackground from '../components/Layout/AnimatedBackground';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <AnimatedBackground variant="minimal" showOverlay={true} />
            <Helmet>
                <title>Política de Privacidade – Arthur Garcia Blog</title>
                <meta name="description" content="Política de Privacidade do Arthur Garcia Crypto Blog" />
            </Helmet>
            
            <Container>
                <BackButton>
                    <Button 
                        backgroundColor="#0084ff" 
                        hoverBackgroundColor="#0060b9" 
                        activeBackgroundColor="#004381" 
                        icon={<ArrowLeft />} 
                        onClick={() => navigate('/')}
                    >
                        Voltar
                    </Button>
                </BackButton>

                <Content>
                    <Title>Política de Privacidade</Title>
                    <LastUpdated>Última atualização: {new Date().toLocaleDateString('pt-BR')}</LastUpdated>

                    <Section>
                        <SectionTitle>1. Introdução</SectionTitle>
                        <Text>
                            Esta Política de Privacidade descreve como o Arthur Garcia Crypto Blog ("nós", "nosso" ou "blog") 
                            trata as informações quando você visita nosso site. Respeitamos sua privacidade e estamos 
                            comprometidos em proteger seus dados pessoais.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>2. Informações que Coletamos</SectionTitle>
                        <Text>
                            <strong>2.1 Informações Coletadas Automaticamente Pelo Navegador:</strong><br />
                            • Endereço IP<br />
                            • Tipo de navegador e versão<br />
                            • Sistema operacional<br />
                            • Páginas visitadas e tempo de permanência<br />
                            • Data e hora da visita<br />
                            • URL de referência
                        </Text>
                        <Text>
                            <strong>2.2 Cookies:</strong><br />
                            Utilizamos cookies essenciais para o funcionamento básico do site. Você pode configurar 
                            seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                        </Text>
                        <Text>
                            <strong>2.3 Dados Pessoais:</strong><br />
                            Este blog é apenas informativo e <strong>NÃO coleta dados pessoais</strong> como nome, 
                            email, telefone ou qualquer informação de identificação pessoal dos visitantes.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>3. Como Usamos as Informações</SectionTitle>
                        <Text>
                            As informações técnicas coletadas automaticamente são utilizadas apenas para:
                        </Text>
                        <List>
                            <ListItem>Garantir o funcionamento adequado do site</ListItem>
                            <ListItem>Melhorar a experiência do usuário</ListItem>
                            <ListItem>Analisar tendências de uso e otimizar o conteúdo</ListItem>
                            <ListItem>Detectar e prevenir atividades maliciosas</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>4. Compartilhamento de Informações</SectionTitle>
                        <Text>
                            <strong>NÃO compartilhamos, vendemos ou alugamos</strong> qualquer informação dos visitantes 
                            com terceiros, exceto quando:
                        </Text>
                        <List>
                            <ListItem>Exigido por lei ou ordem judicial</ListItem>
                            <ListItem>Necessário para proteger nossos direitos legais</ListItem>
                            <ListItem>Com provedores de serviços que nos ajudam a operar o site (sob acordos de confidencialidade)</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>5. Links Externos</SectionTitle>
                        <Text>
                            Nosso blog pode conter links para sites externos (YouTube, redes sociais, etc.). 
                            Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos 
                            que você leia as políticas de privacidade de cada site que visitar.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>6. Segurança</SectionTitle>
                        <Text>
                            Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                            as informações contra acesso não autorizado, alteração, divulgação ou destruição.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>7. Seus Direitos</SectionTitle>
                        <Text>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                        </Text>
                        <List>
                            <ListItem>Saber quais dados temos sobre você</ListItem>
                            <ListItem>Solicitar a correção de dados incorretos</ListItem>
                            <ListItem>Solicitar a exclusão de seus dados</ListItem>
                            <ListItem>Revogar o consentimento a qualquer momento</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>8. Alterações na Política</SectionTitle>
                        <Text>
                            Esta Política de Privacidade pode ser atualizada ocasionalmente. Quaisquer mudanças 
                            serão publicadas nesta página com a data de atualização. Recomendamos que você 
                            revise esta política periodicamente.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>9. Contato</SectionTitle>
                        <Text>
                            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                        </Text>
                        <ContactInfo>
                            <ContactItem>Email: arthurgarciacrypto@contato.com</ContactItem>
                            <ContactItem>Localização: São Paulo, Brasil</ContactItem>
                        </ContactInfo>
                    </Section>
                </Content>
            </Container>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, rgb(9, 11, 14) 0%, rgb(14, 21, 32) 50%, rgb(9, 11, 14) 100%);
`;

const Container = styled.div`
    position: relative;
    z-index: 10;
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1rem;
    min-height: 100vh;
`;

const BackButton = styled.div`
    margin-bottom: 2rem;
`;

const Content = styled.div`
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.2);
    border-radius: 1rem;
    padding: 3rem 2rem;
    color: #ffffff;

    @media (max-width: 640px) {
        padding: 2rem 1.5rem;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #00c3ff;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

const LastUpdated = styled.p`
    text-align: center;
    color: #9ca3af;
    margin-bottom: 3rem;
    font-style: italic;
`;

const Section = styled.section`
    margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #00c3ff;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(6, 182, 212, 0.3);
    padding-bottom: 0.5rem;
`;

const Text = styled.p`
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #e5e7eb;

    strong {
        color: #ffffff;
        font-weight: 600;
    }
`;

const List = styled.ul`
    margin: 1rem 0;
    padding-left: 2rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.75rem;
    line-height: 1.6;
    color: #e5e7eb;
`;

const ContactInfo = styled.div`
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.3);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-top: 1rem;
`;

const ContactItem = styled.p`
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-weight: 500;

    &:last-child {
        margin-bottom: 0;
    }
`;
