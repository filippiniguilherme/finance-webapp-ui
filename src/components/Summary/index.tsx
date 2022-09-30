
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
        <div>
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

        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Ícone saídas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(balance.debitDetail.totalDebits)}
          </strong>
        </div>

        <div className="highlight-background">
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
