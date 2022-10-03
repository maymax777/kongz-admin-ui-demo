import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <a className="m-4 p-4">
      <Image src="/images/kongz.png" alt="mythic logo" width={180} height={72} />
    </a>
  )
}

export default Logo
