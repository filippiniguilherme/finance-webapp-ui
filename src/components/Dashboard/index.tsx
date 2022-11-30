import { Summary } from '../Summary'
import { DataTable } from '../DataTable'
import { Container } from './styles'
import { Header } from '../Header'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect } from 'react'
import { handleDebit, selectDebit } from '../../actions/DebitsSlice'
import { handleBalance } from '../../actions/balanceSlice'
import { handleEntry, selectEntry } from '../../actions/EntriesSlice'

export function Dashboard() {
  const debits = useAppSelector(selectDebit)
  const entries = useAppSelector(selectEntry)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(handleDebit())
    dispatch(handleEntry())
  }, [])

  return (
    <Container>
      <h2 className="text-5xl font-bold leading-7 mt-12 text-white :truncate sm:tracking-tight flex content-center justify-center">Dashboard</h2>
      <Header  />
      <Summary />
      <DataTable title='Entradas' data={entries.entries}/>
      <DataTable title='Saídas' data={debits.debits}/>
    </Container>
  )
}
