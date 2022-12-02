import { Summary } from '../Summary'
import { DataTable } from '../DataTable'
import { Container, DataTables } from './styles'
import { Header } from '../Header'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect } from 'react'
import { handleDebit, handleDebitByMonthAndYear, selectDebit } from '../../actions/DebitsSlice'
import { handleBalance, handleBalanceByMonthAndYear } from '../../actions/balanceSlice'
import { handleEntry, handleEntryByMonthAndYear, selectEntry } from '../../actions/EntriesSlice'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import moment from 'moment'
import { Button } from '@mui/material'

export function Dashboard() {
  const debits = useAppSelector(selectDebit)
  const entries = useAppSelector(selectEntry)
  const dispatch = useAppDispatch()
  const params = {
    month: moment().month(),
    year: moment().year()
  }
  useEffect(() => {
    dispatch(handleDebitByMonthAndYear(params))
    dispatch(handleEntryByMonthAndYear(params))
    dispatch(handleBalanceByMonthAndYear(params))
  }, [])

  return (
    <Container>
      <h2 className="text-5xl font-bold leading-7 mt-12 text-white :truncate sm:tracking-tight flex content-center justify-center">Dashboard</h2>
      <Header  />
      <Summary />
      <DataTables>
        <DataTable title='Entradas' data={entries.entries} icon={incomeImg}/>
        <DataTable title='Saídas' data={debits.debits} icon={outcomeImg}/>
      </DataTables>
    </Container>
  )
}
