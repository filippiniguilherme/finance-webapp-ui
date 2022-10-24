
import { useEffect } from 'react'
import { handleBalance, selectBalance } from '../../actions/balanceSlice'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

import { Content } from './styles'

export function Summary() {
  const balance = useAppSelector(selectBalance)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(handleBalance())
  }, [])
  return (
    <>
      <Content>
        <div className="bg-lime-600">
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Ícone entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(balance.entryDetail.totalEntries)}
          </strong>
        </div>

        <div className="bg-red-500">
          <header>
            <p>Saídas</p>
            <img className="fill-white" src={outcomeImg} alt="Ícone saídas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(balance.debitDetail.totalDebits)}
          </strong>
        </div>


        <div className="bg-yellow-900">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Ícone total" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(balance.balanceValue)}
          </strong>
        </div>
      </Content>
    </>
  )
}
