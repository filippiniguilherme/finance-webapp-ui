import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Content } from './styles';
import { Debit } from '../../actions/DebitsSlice';
import moment from 'moment';
import { Entry } from '../../actions/EntriesSlice';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 30, headerClassName: 'HeaderTable' },
  { field: 'name', headerName: 'Nome', width: 130, headerClassName: 'HeaderTable' },
  { field: 'value', headerName: 'Valor', width: 100, headerClassName: 'HeaderTable', valueFormatter(params) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(params.value)
  }, },
  { field: 'date', headerName: 'Data', type: 'date', width: 130, headerClassName: 'HeaderTable', valueFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY')
  },  },
  { field: 'month', headerName: 'Mês', width: 60, headerClassName: 'HeaderTable' },
  { field: 'year', headerName: 'Ano', width: 60, headerClassName: 'HeaderTable' },
  { field: 'author', headerName: 'Autor', width: 90, headerClassName: 'HeaderTable', valueGetter: (params) => {
    return params.row.author.authorName
  }},
  { field: 'category', headerName: 'Categoria', width: 130, headerClassName: 'HeaderTable', valueGetter: (params) => {
    return params.row.category.categoryName
  }},
];

interface DataTableProps {
  title: String,
  data: [Debit | Entry]
  icon: string
}

export function DataTable({title, data, icon}: DataTableProps) {
  return (
    <Content>
      <div className='title'>
          <header>
            <strong>{title}</strong>
            <img src={icon} alt="Ícone saídas" />
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