import { Card } from 'components'
import { data } from './data'

const Analytics = () => {
  return (
    <div className="flex flex-row gap-4 sm:flex-col">
      {data.map(({ key, ...item }) => (
        <Card key={key} {...item} />
      ))}
    </div>
  )
}

export default Analytics
