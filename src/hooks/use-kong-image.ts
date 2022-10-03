import { useAccount } from 'wagmi'
import { KONGZ_META_API, KONGZ_VX_META_API } from 'utils/apis'

// TODO: kongz image url fetcher
export default function useKongImage(id, sales) {
  const { isConnected } = useAccount()
  if (!isConnected || !sales) return []
  if (id === 0) return sales.map(({ token }) => `${KONGZ_META_API}`.replaceAll('tokenId', token.tokenId.slice(-3)))
  return sales.map(({ token }) => `${KONGZ_VX_META_API}`.replaceAll('tokenId', token.tokenId))
}
