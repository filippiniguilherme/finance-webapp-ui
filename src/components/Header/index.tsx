import { Input, Modal } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { handleBalance, handleBalanceByMonthAndYear } from '../../actions/balanceSlice'
import { handleDebit, handleDebitByMonthAndYear } from '../../actions/DebitsSlice'
import { handleEntryByMonthAndYear } from '../../actions/EntriesSlice'
import logoImg from '../../assets/logo.svg'
import { useAppDispatch } from '../../hooks/hooks'
import { NewTransactionModal } from '../NewTransactionModal'
import { Button, Competence, Container, Content } from './styles'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const [paramsDate, setParamsDate] = useState({
    month: moment().month(),
    year: moment().year()
  })
  const dispatch = useAppDispatch();

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleUpdateValue() {
    dispatch(handleDebitByMonthAndYear(paramsDate))
    dispatch(handleEntryByMonthAndYear(paramsDate))
    dispatch(handleBalanceByMonthAndYear(paramsDate))
  }

  function handleCloseNewTransactionModal() {
    handleUpdateValue()
    setIsNewTransactionModalOpen(false)
  }

  function handleCompetence(value: string) {
    setParamsDate({
      month: Number(value.split('-')[1]),
      year: Number(value.split('-')[0])
    })

    handleUpdateValue()
  }

  return (
    <>
      <Content>
        <Button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </Button>
        <Competence>
          <label>
            Competência
          </label>
          <Input
            style={{color: '#fff'}}
            type='month'
            placeholder="Data"
            defaultValue={moment().format('yyyy-MM')}
            fullWidth
            onChange={(e) => {handleCompetence(e.target.value)}}
          />
        </Competence>
      </Content>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}
