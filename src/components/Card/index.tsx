import { ArrowDownLeft, ArrowUpRight } from 'assets'

export interface ICardProps {
  label: string
  value: string
  percent: string
  Icon: React.FC
}

const Card = ({ label, value, percent, Icon }: ICardProps) => {
  const lose = percent[0] === '-'
  const color = lose ? 'text-red-50' : 'text-green-50'

  return (
    <div className="m-2 flex w-1/4 flex-row justify-between rounded-2xl border border-purple-50 px-4 py-8 sm:w-full">
      <div className="flex flex-col">
        <p className="m-1 font-nunito text-sm2 font-semibold text-primary-100">{label}</p>
        <p className="m-1 font-nunito text-2xl2 font-bold text-black">{value}</p>
        <div className="flex flex-row items-center gap-1">
          {lose ? <ArrowDownLeft /> : <ArrowUpRight />}
          <p className={`m-1 font-nunito text-sm2 ${color}`}>{percent}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="m-4 h-8 w-8">
          <Icon />
        </div>
        <a className="m-1 cursor-pointer font-nunito text-sm1 text-primary underline">View Report</a>
      </div>
    </div>
  )
}

export default Card
