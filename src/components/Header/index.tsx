import { Modal } from '@mui/material'
import { useState } from 'react'
import { handleBalance } from '../../actions/balanceSlice'
import { handleDebit } from '../../actions/DebitsSlice'
import logoImg from '../../assets/logo.svg'
import { useAppDispatch } from '../../hooks/hooks'
import { NewTransactionModal } from '../NewTransactionModal'
import { Button, Container, Content } from './styles'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const dispatch = useAppDispatch();

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    dispatch(handleDebit())
    dispatch(handleBalance())
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Content>
        <Button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </Button>
      </Content>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}
