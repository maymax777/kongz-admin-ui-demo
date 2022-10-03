import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css'

const DataTable = ({ columns, rows, rowCheck }) => {
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
