import Modal from 'react-modal'
import { FormEvent, useState } from 'react'


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Input, Radio } from '@mui/material'

import { Container, Title, TypeTransactionContainer } from './styles'
import { postDebit } from '../../actions/DebitsSlice'
import moment from 'moment'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  // {
  //   id: number,
  //   name: string,
  //   value: number,
  //   date: string,
  //   month: number,
  //   year: number,
  //   authorId: number,
  //   categoryId: number
  // }

  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [date, setDate] = useState(moment().toDate().toISOString())
  const [month, setMonth] = useState(0)
  const [year, setyear] = useState(2022)
  const [authorId, setAuthorId] = useState(2)
  const [categoryId, setCategoryId] = useState(3)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await postDebit({
      id: 0,
      name,
      value,
      date,
      month,
      year,
      authorId,
      categoryId
    })

    onRequestClose()
  }

  return (
    <Modal
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
      <Container onSubmit={handleCreateNewTransaction}>

        <Input
          className='name'
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <Input
          className='value'
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TypeTransactionContainer>
        </TypeTransactionContainer>

        <Input
          className='category'
          type='number'
          placeholder="Categoria"
          value={categoryId}
          onChange={event => setCategoryId(Number(event.target.value))}
        />

        <Input
          className='author'
          type='number'
          placeholder="Autor"
          value={authorId}
          onChange={event => setCategoryId(Number(event.target.value))}
        />

        <Input
          className='month'
          type='number'
          placeholder="Mês"
          value={month}
          onChange={event => setCategoryId(Number(event.target.value))}
        />

        <Input
          className='year'
          type='number'
          placeholder="Ano"
          value={year}
          onChange={event => setCategoryId(Number(event.target.value))}
        />

        <button className='submit' type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
