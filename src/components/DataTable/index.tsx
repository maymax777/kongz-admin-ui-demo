import Table, { Icolumn, Irow, renderFunction } from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css'

export interface IDataTableProps {
  columns: Icolumn[]
  rows: Irow[]
  rowCheck: renderFunction
}

const DataTable = ({ columns, rows, rowCheck }: IDataTableProps) => {
  return (
    <div className="drop-shadow-2x p-2">
      {rows && (
        <Table
          columns={columns}
          rows={rows}
          per_page={5}
          bordered
          striped
          hovered
          show_search={false}
          should_export={false}
          row_render={rowCheck}
        />
      )}
    </div>
  )
}

export default DataTable
