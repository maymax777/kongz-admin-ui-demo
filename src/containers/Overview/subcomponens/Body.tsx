import { DataTable, Pulse } from 'components'
import { Analytics } from 'containers'
import useKongImage from 'hooks/use-kong-image'
import { ISale } from 'types'
import { column, row, rowCheck } from './utils'

export interface IBodyProps {
  sales: ISale[]
  id: number
}

const Body = ({ sales, id }: IBodyProps) => {
  const images: string[] = useKongImage(id, sales)

  const [columns, rows] = [column(), row(sales, images)]
  return (
    <div className="flex h-screen flex-col sm:h-full">
      <div className="h-2/3 overflow-y-scroll sm:h-full sm:overflow-y-scroll sm:bg-white">
        {sales ? <DataTable columns={columns} rows={rows} rowCheck={rowCheck} /> : <Pulse />}
      </div>
      <div className="sm:hidden">
        <Analytics />
      </div>
    </div>
  )
}

export default Body
