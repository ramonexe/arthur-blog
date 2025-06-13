import styled from "styled-components";

export const Container = styled.div`
  background:rgb(7, 8, 12);
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 119, 255, 0.09);
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border: 1px solid #0e1933;
    box-shadow: 0 0 10px rgba(0, 119, 255, 0.49);
    transition: box-shadow 0.2s;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
