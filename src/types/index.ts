import { IButtonProps } from 'components/Button'
import { IDataTableProps } from 'components/DataTable'
import { ICardProps } from 'components/Card'
import { IAProps } from 'containers/Overview/subcomponens/A'
import { IBodyProps } from 'containers/Overview/subcomponens/Body'
import { IOverviewProps } from 'containers/Overview'

interface ISalePriceAmount {
  native: number
  usd: number
}

interface ISalePrice {
  amount: ISalePriceAmount
}

interface ISaleToken {
  tokenId: string
}

interface ISale {
  token: ISaleToken
  from: string
  to: string
  block: number
  txHash: string
  orderSource: string
  timestamp: number
  price: ISalePrice
}

export type {
  IDataTableProps,
  IButtonProps,
  ICardProps,
  IAProps,
  IBodyProps,
  IOverviewProps,
  ISaleToken,
  ISale,
  ISalePriceAmount,
}
