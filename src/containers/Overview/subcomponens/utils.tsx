import truncateEthAddress from 'truncate-eth-address'
import { CYBER_KONGZ } from 'utils/contract-addresses'
import A from './A'

const truncateEthTx = (tx: string) => tx.slice(0, 8) + '...' + tx.slice(-8)

export const column = () => {
  return [
    { field: 'image', use: 'Image' },
    { field: 'block', use: 'Block' },
    { field: 'txHash', use: 'Transaction' },
    { field: 'from', use: 'From' },
    { field: 'to', use: 'To' },
    { field: 'tokenId', use: 'Token Id' },
    { field: 'priceETH', use: 'Price (ETH)' },
    { field: 'priceUSD', use: 'Price (USD)' },
    { field: 'orderSource', use: 'Marketplace' },
    { field: 'timestamp', use: 'Timestamp' },
  ]
}

export const row = (items, images) => {
  return (
    items &&
    items
      .map((item, index) => ({
        image: images[index],
        block: Number(item.block),
        orderSource: item.orderSource,
        from: item.from,
        to: item.to,
        txHash: item.txHash,
        tokenId: item.token.tokenId,
        timestamp: new Date(item.timestamp * 1000).toLocaleDateString('en-US').toString(),
        priceETH: Number(item.price.amount.native).toFixed(3),
        priceUSD: '$' + Number(item.price.amount.usd).toFixed(3),
      }))
      .sort((a, b) => a.id - b.id)
  )
}

export const rowCheck = (_, column, display_value) => {
  switch (column.field) {
    case 'image':
      return !display_value.includes('preview') ? (
        <img className="h-10 w-10 rounded-full blur-[3px]" src={display_value} alt="" />
      ) : (
        <img className="h-10 w-10 rounded-full" src={display_value} alt="" />
      )
    case 'block':
      return <A href={`https://etherscan.io/block/${display_value}`} value={display_value} />
    case 'from':
    case 'to':
      return <A href={`https://etherscan.io/address/${display_value}`} value={truncateEthAddress(display_value)} />
    case 'txHash':
      return <A href={`https://etherscan.io/tx/${display_value}`} value={truncateEthTx(display_value)} />
    case 'tokenId':
      return <A href={`https://opensea.io/assets/ethereum/${CYBER_KONGZ}/${display_value}`} value={display_value} />
    case 'orderSource':
      return <A href={`https://opensea.io/assets/ethereum/${CYBER_KONGZ}/${display_value}`} value={display_value} />
  }

  return display_value
}
