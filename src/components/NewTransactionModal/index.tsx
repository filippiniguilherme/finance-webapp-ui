import Modal from 'react-modal'
import { Component, FormEvent, ReactNode, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormControl, Input, InputLabel, MenuItem, Radio, Select, TextField } from '@mui/material'

import { Container, Title, TypeTransactionContainer } from './styles'
import { Debit, postDebit } from '../../actions/DebitsSlice'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Author, handleAuthor, selectAuthor } from '../../actions/AuthorSlice';
import { Category, handleCategory, selectCategory } from '../../actions/CategorySlice';

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Debit>();
  const authors = useAppSelector(selectAuthor)
  const categories = useAppSelector(selectCategory)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(handleAuthor())
    dispatch(handleCategory())
    console.log(moment().format('DD/MM/YYYY'))
  }, [])


  async function handleCreateNewTransaction(data: Debit) {

    const date = data.month.toString()
    data.month = Number(date.split('-')[1])
    data.year = Number(date.split('-')[0])
    
    await postDebit(data)

    console.log(data)

    onRequestClose()
  }

  return (
    <Modal
      style={{content: {padding: '2rem 3rem'}}}
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
          <Select className='select' {...register("category.categoryId",{ required: true })}>
            {categories.map(({categoryId, categoryName}, index) => (
              <MenuItem key={index} value={categoryId}>
                {categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className='author'>
          <label>Autor</label>
          <Select className='select' {...register('author.authorId', { required: true})}>
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
