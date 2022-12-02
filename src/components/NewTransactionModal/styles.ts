import styled from 'styled-components'
// import { darken, transparentize } from 'polished'

export const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--text-title);
  text-align: center;
  margin-bottom: 2rem;
`

export const Container = styled.form`
  display: grid;
  grid-template-areas: 
    "transation transation"
    "name value"
    "category author"
    "date month"
    "submit submit";
  gap: 1rem;

  .name {
    grid-area: name;
  }

  .transation { 
    grid-area: transation;
    display: contents;
  }

  .value {
    grid-area: value;
  }

  .category {
    grid-area: category;
  }

  .submit {
    grid-area: submit;
  }

  .author {
    grid-area: author;
  }

  .date {
    grid-area: date;
  }

  .month {
    grid-area: month;
  }

  .year {
    grid-area: year;
  }

  // background: var(--background);

  .select {
    background-color: #e7e9ee;
  }

  input {
    width: 100%;

    padding: 1.25rem 1.5rem;

    border-radius: 0.3125rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  label {
    color: var(--text-title);
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    margin-left: 0.3rem;
  }

  button[type='submit'] {
    width: 100%;

    border: 0;
    border-radius: 0.3125rem;

    color: #fff;
    font-weight: 600;

    background: var(--green);

    margin-top: 1rem;
    padding: 1.25rem 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TypeTransactionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`