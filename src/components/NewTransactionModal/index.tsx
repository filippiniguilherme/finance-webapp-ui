import Modal from 'react-modal'
import React, { Component, FormEvent, ReactNode, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormControl, FormControlLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import { Container, Title, TypeTransactionContainer } from './styles'
import { Debit, postDebit } from '../../actions/DebitsSlice'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Author, handleAuthor, selectAuthor } from '../../actions/AuthorSlice';
import { Category, handleCategory, selectCategory } from '../../actions/CategorySlice';
import { Entry, postEntry } from '../../actions/EntriesSlice';
import { green, red } from '@mui/material/colors';

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Debit | Entry>()
  const authors = useAppSelector(selectAuthor)
  const categories = useAppSelector(selectCategory)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(handleAuthor())
    dispatch(handleCategory())
    console.log(moment().format('DD/MM/YYYY'))
  }, [])

  const [radioTransationValue, setRadioTransationValue] = React.useState('entry');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioTransationValue(event.target.value)
  };

  const controlProps = (item: string) => ({
    checked: radioTransationValue === item,
    onChange: handleChange,
    value: item,
    name: `radio-button-${item}`,
    inputProps: { 'aria-label': item },
  });

  async function handleCreateNewTransaction(data: Debit | Entry) {

    const date = data.month.toString()
    data.month = Number(date.split('-')[1])
    data.year = Number(date.split('-')[0])
    
    switch (radioTransationValue) {
      case 'entry': 
        await postEntry(data)
      break;
      case 'debit': 
        await postDebit(data)
      break;
    }
    onRequestClose()
  }

  return (
    <Modal
      style={{content: {padding: '2rem 3rem', zIndex: 5}}}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content NewTransactionModal"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="ícone fechar" />
      </button>

      <Title>Cadastrar transação</Title>
      <Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <RadioGroup className='transation'>
          <FormControlLabel
            value='Entrada'
            control={
              <Radio {...controlProps('entry')} 
                sx={{
                  color: green['A400'],
                  '&.Mui-checked': {
                    color: green['A700'],
                  },
                }}
              /> 
            }
            label='Entrada'
          />
          <FormControlLabel
            value='Saída'
            control={
              <Radio {...controlProps('debit')} 
                sx={{
                  color: red[600],
                  '&.Mui-checked': {
                    color: red[700],
                  },
                }} 
              /> }
            label='Saída'
          />
        </RadioGroup>

        <div className='name'>
          <label>
            Nome
          </label>
          <Input
            {...register('name',{ required: true })}
            placeholder="Mercado"
            fullWidth
          />
        </div>

        <div className='value'>
          <label>
            Valor
          </label>
          <Input
            {...register('value',{ required: true })}
            className='value'
            type="number"
            placeholder="R$ 9.90"
            fullWidth
          />
        </div>

        <TypeTransactionContainer>
        </TypeTransactionContainer>

        <FormControl className='category'>
          <label>Categoria</label>
          <Select className='select' {...register("category.categoryId",{ required: true })} defaultValue={categories[0].categoryId}>
            {categories.map(({categoryId, categoryName}, index) => (
              <MenuItem key={index} value={categoryId}>
                {categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className='author'>
          <label>Autor</label>
          <Select className='select' {...register('author.authorId', { required: true})} defaultValue={authors[0].authorId}>
            {authors.map(({authorId, authorName}, index) => (
              <MenuItem key={index} value={authorId}>
                {authorName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className='date'>
          <label>
            Data
          </label>
          <Input
            {...register('date',{ required: true })}
            type='date'
            placeholder="Data"
            defaultValue={moment().format('yyyy-MM-DD')}
            fullWidth
          />
        </div>

        <div className='month'>
          <label>
            Competência
          </label>
          <Input
            {...register('month',{ required: true,  })}
            type='month'
            placeholder="Mês"
            defaultValue={moment().format('yyyy-MM')}
            fullWidth
          />
        </div>
        
        <button className='submit' type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
