import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`  
  margin: 3rem 0 auto;
  padding: 2rem 1rem 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  }
`

export const Button = styled.button`  
  height: 3.5rem;
  border: 0;
  border-radius: 0.3125rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;

  background: var(--shape);
  padding: 0 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
`

export const Competence = styled.div` 
  border: 0;
  border-radius: 0.3125rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;

  background: var(--shape);
  padding: 0 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
`