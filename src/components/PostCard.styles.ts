import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  padding-bottom: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
`;

export const Snippet = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  height: 3.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
