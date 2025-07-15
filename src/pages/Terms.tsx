import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button } from 'dynamix-button';
import { ArrowLeft } from 'lucide-react';
import AnimatedBackground from '../components/Layout/AnimatedBackground';

export default function TermsOfService() {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <AnimatedBackground variant="minimal" showOverlay={true} />
            <Helmet>
                <title>Termos de Uso – Arthur Garcia Blog</title>
                <meta name="description" content="Termos de Uso do Arthur Garcia Crypto Blog" />
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
                    <Title>Termos de Uso</Title>
                    <LastUpdated>Última atualização: {new Date().toLocaleDateString('pt-BR')}</LastUpdated>

                    <Section>
                        <SectionTitle>1. Aceitação dos Termos</SectionTitle>
                        <Text>
                            Ao acessar e usar o Arthur Garcia Crypto Blog ("Site"), você concorda em cumprir 
                            e estar vinculado aos seguintes termos e condições de uso. Se você não concordar 
                            com qualquer parte destes termos, não use nosso site.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>2. Descrição do Serviço</SectionTitle>
                        <Text>
                            O Arthur Garcia Crypto Blog é um site informativo que oferece:
                        </Text>
                        <List>
                            <ListItem>Conteúdo educacional sobre criptomoedas e blockchain</ListItem>
                            <ListItem>Análises de mercado e tendências</ListItem>
                            <ListItem>Artigos informativos sobre investimentos digitais</ListItem>
                            <ListItem>Vídeos educacionais do YouTube</ListItem>
                            <ListItem>Links para recursos externos relevantes</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>3. Uso Aceitável</SectionTitle>
                        <Text>
                            Você concorda em usar este site apenas para fins legais e de acordo com estes Termos. 
                            É <strong>proibido</strong>:
                        </Text>
                        <List>
                            <ListItem>Usar o site para qualquer propósito ilegal ou não autorizado</ListItem>
                            <ListItem>Tentar acessar áreas restritas do site</ListItem>
                            <ListItem>Interferir ou interromper o funcionamento do site</ListItem>
                            <ListItem>Copiar, reproduzir ou distribuir conteúdo sem autorização</ListItem>
                            <ListItem>Usar o site para spam, phishing ou outras atividades maliciosas</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>4. Propriedade Intelectual</SectionTitle>
                        <Text>
                            Todo o conteúdo do site, incluindo textos, imagens, vídeos, logos e design, 
                            é propriedade do Arthur Garcia Crypto Blog e está protegido por leis de 
                            direitos autorais. É permitido:
                        </Text>
                        <List>
                            <ListItem>Visualizar e navegar pelo conteúdo para uso pessoal</ListItem>
                            <ListItem>Compartilhar links para artigos nas redes sociais</ListItem>
                            <ListItem>Citar trechos do conteúdo com devida atribuição</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>5. Isenção de Responsabilidade</SectionTitle>
                        <WarningBox>
                            <strong>IMPORTANTE:</strong> O conteúdo deste blog é apenas para fins educacionais 
                            e informativos. NÃO constitui aconselhamento financeiro, de investimento ou jurídico.
                        </WarningBox>
                        <Text>
                            <strong>5.1 Riscos de Investimento:</strong><br />
                            Investimentos em criptomoedas são altamente voláteis e arriscados. Você pode 
                            perder todo o capital investido. Sempre faça sua própria pesquisa e consulte 
                            um consultor financeiro qualificado antes de tomar decisões de investimento.
                        </Text>
                        <Text>
                            <strong>5.2 Precisão das Informações:</strong><br />
                            Embora nos esforcemos para fornecer informações precisas e atualizadas, 
                            não garantimos a exatidão, completude ou atualidade de todo o conteúdo.
                        </Text>
                        <Text>
                            <strong>5.3 Links Externos:</strong><br />
                            Nosso site pode conter links para sites de terceiros. Não somos responsáveis 
                            pelo conteúdo ou práticas desses sites externos.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>6. Limitação de Responsabilidade</SectionTitle>
                        <Text>
                            Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, 
                            indiretos, incidentais, especiais ou consequentes resultantes do uso ou 
                            incapacidade de usar este site, incluindo, mas não limitado a:
                        </Text>
                        <List>
                            <ListItem>Perdas financeiras de investimentos</ListItem>
                            <ListItem>Perda de dados ou informações</ListItem>
                            <ListItem>Interrupção de negócios</ListItem>
                            <ListItem>Danos a equipamentos ou software</ListItem>
                        </List>
                    </Section>

                    <Section>
                        <SectionTitle>7. Conteúdo Gerado pelo Usuário</SectionTitle>
                        <Text>
                            Atualmente, este blog não permite comentários ou conteúdo gerado por usuários. 
                            Caso essa funcionalidade seja implementada no futuro, termos específicos 
                            serão adicionados a esta seção.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>8. Modificações do Serviço</SectionTitle>
                        <Text>
                            Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer 
                            parte do site a qualquer momento, sem aviso prévio. Também podemos atualizar 
                            estes Termos de Uso periodicamente.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>9. Lei Aplicável</SectionTitle>
                        <Text>
                            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                            Qualquer disputa será resolvida nos tribunais competentes de São Paulo, SP.
                        </Text>
                    </Section>

                    <Section>
                        <SectionTitle>10. Contato</SectionTitle>
                        <Text>
                            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                        </Text>
                        <ContactInfo>
                            <ContactItem>Email: arthurgarciacrypto@contato.com</ContactItem>
                            <ContactItem>Localização: São Paulo, Brasil</ContactItem>
                        </ContactInfo>
                    </Section>

                    <FinalNote>
                        <Text>
                            <strong>Lembre-se:</strong> Este blog é uma fonte de informação educacional. 
                            Sempre faça sua própria pesquisa e nunca invista mais do que pode perder.
                        </Text>
                    </FinalNote>
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

const WarningBox = styled.div`
    background: rgba(255, 59, 48, 0.1);
    border: 2px solid rgba(255, 59, 48, 0.3);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    color: #ffffff;
    font-weight: 500;
`;

const FinalNote = styled.div`
    background: rgba(34, 211, 238, 0.1);
    border: 1px solid rgba(34, 211, 238, 0.3);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-top: 2rem;
`;
