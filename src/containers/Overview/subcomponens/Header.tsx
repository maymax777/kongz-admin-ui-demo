import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Search } from 'components'

const Header = () => {
  return (
    <div className="flex flex-row justify-between sm:flex-col sm:items-center sm:justify-center">
      <h1 className="font-nunito text-2xl font-bold text-primary-50 sm:m-2">Overview</h1>
      <div className="mx-4 flex flex-row gap-4 sm:flex-col sm:items-center sm:justify-center">
        <Search />
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
