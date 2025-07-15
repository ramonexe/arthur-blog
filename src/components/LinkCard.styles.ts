import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  border: 1px solid #0084ff73;
  background:rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Subtitle = styled.h1`
  margin: 0 0 0.5rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h4`
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ShortUrl = styled.a`
  color: #007bff;
  text-decoration: none;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;