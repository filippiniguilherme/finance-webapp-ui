import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Content } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Debit, handleDebit, selectDebit } from '../../actions/DebitsSlice';
import moment from 'moment';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'HeaderTable' },
  { field: 'name', headerName: 'Nome', width: 130, headerClassName: 'HeaderTable' },
  { field: 'value', headerName: 'Valor', width: 130, headerClassName: 'HeaderTable', valueFormatter(params) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(params.value)
  }, },
  { field: 'date', headerName: 'Data', type: 'date', width: 130, headerClassName: 'HeaderTable', valueFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY')
  },  },
  { field: 'month', headerName: 'Mês', width: 90, headerClassName: 'HeaderTable' },
  { field: 'year', headerName: 'Ano', width: 90, headerClassName: 'HeaderTable' },
  { field: 'author', headerName: 'Autor', width: 90, headerClassName: 'HeaderTable', valueGetter: (params) => {
    return params.row.author.authorName
  }},
  { field: 'category', headerName: 'Categoria', width: 90, headerClassName: 'HeaderTable', valueGetter: (params) => {
    return params.row.category.categoryName
  }},
];

interface DataTableProps {
  title: String,
  data: [Debit]
}

export function DataTable({title, data}: DataTableProps) {
  return (
    <Content>
      <div className='title'>
          <header>
            <strong>{title}</strong>
            <img src={outcomeImg} alt="Ícone saídas" />
          </header>
        </div>
      <div style={{height: 600, width: '100%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={30}
        />
      </div>
    </Content>
  );
}