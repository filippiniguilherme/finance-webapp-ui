import styled from 'styled-components'

export const Content = styled.main`
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
  // gap: 2rem;

  flex-grow: 1;

  margin-top: 4.25rem;

  div {
    background: var(--shape);
    color: var(--text-title);
  }

  .title {
    width: 100%;
    background: var(--shape);
    color: var(--text-title);

    border-radius: 0.3125rem;

    padding: 1.3125rem 1.56rem;
    
    margin-bottom: 1.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      font-size: 2rem;
      font-weight: 500;

      margin-top: 0.5rem;

      display: block;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

  }

  .HeaderTable {
    padding: 0 11px !important;
  }
`
