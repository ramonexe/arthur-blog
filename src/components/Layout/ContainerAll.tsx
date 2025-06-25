import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 24px;

    @media (max-width: 900px) {
        max-width: 900px;
        padding: 0 16px;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        padding: 0 8px;
    }
`;

export default Container;