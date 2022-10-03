import useSWR from 'swr'
import { useAccount } from 'wagmi'
import { RESERVOIR_TOOL_API } from 'utils/apis'
import { CYBER_KONGZ, CYBER_KONGZ_VX } from 'utils/contract-addresses'
import { FETCH_MAX_LIMIT } from 'utils/constants'
import useSWRWhenBlockArrive from './use-swr-when-block-arrive'

export default function useKongData(id) {
  const { isConnected } = useAccount()
  const shouldFetch = isConnected
  const contract = id === 0 ? CYBER_KONGZ : CYBER_KONGZ_VX
  const fetcher = url => fetch(url).then(res => res.json())
  const endpoint = `${RESERVOIR_TOOL_API}?contract=${contract}&limit=${FETCH_MAX_LIMIT}`

  const result = useSWR(shouldFetch ? endpoint : null, fetcher)

  useSWRWhenBlockArrive(result.mutate)

  return result
}
