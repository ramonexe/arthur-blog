// src/components/LinkCard.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  margin: 0;
`;

export const ShortUrl = styled.a`
  color: #007bff;
  text-decoration: none;
  display: block;
`;

export const DeleteButton = styled.button`
  margin-top: 0.5rem;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`;