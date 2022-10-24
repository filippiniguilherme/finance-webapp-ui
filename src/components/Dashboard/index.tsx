import { Summary } from '../Summary'
import { DataTable } from '../DataTable'
import { Container } from './styles'
import { Header } from '../Header'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect } from 'react'
import { handleDebit, selectDebit } from '../../actions/DebitsSlice'
import { handleBalance } from '../../actions/balanceSlice'

export function Dashboard() {
  const debits = useAppSelector(selectDebit)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(handleDebit())
  }, [])

  return (
    <Container>
      <h2 className="text-5xl font-bold leading-7 mt-12 text-white :truncate sm:tracking-tight flex content-center justify-center">Dashboard</h2>
      <Header  />
      <Summary />
      <DataTable title='Saídas' data={debits.debits}/>
    </Container>
  )
}
