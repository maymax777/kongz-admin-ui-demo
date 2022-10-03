import { useAccount } from 'wagmi'
import { Pulse } from 'components'
import useKongData from 'hooks/use-kong-data'
import { Body, Header, Helper } from './subcomponens'
import { ISale } from 'types'

export interface IOverviewProps {
  id?: number
}

const Overview = ({ id = 0 }: IOverviewProps) => {
  const { isConnected } = useAccount()
  const { data } = useKongData(id)
  const sales: ISale[] = data ? data.sales : []

  return (
    <div className="h-screen w-full rounded-3xl bg-white">
      <div className="flex h-full flex-col p-12 sm:h-3/4">
        <Header />
        {isConnected ? data ? <Body sales={sales} id={id} /> : <Pulse /> : <Helper />}
      </div>
    </div>
  )
}

export default Overview
