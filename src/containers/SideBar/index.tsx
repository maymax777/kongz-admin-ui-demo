import Overview from 'containers/Overview'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cube'
import { Button, Logo } from 'components'
import { useState } from 'react'
import { KONGZ_TITLE, KONGZ_VX_TITLE } from 'utils/constants'
import { useAccount } from 'wagmi'

const SideBar = () => {
  const { isConnected } = useAccount()
  const [swiper, setSwiper] = useState(null)
  const [page, setPage] = useState<number>(0)

  const onClick = id => {
    if (swiper && isConnected) {
      setPage(id)
      if (id === 0) swiper.slidePrev()
      if (id === 1) swiper.slideNext()
    }
  }

  return (
    <div className="flex h-screen w-screen flex-row bg-primary sm:flex-col">
      <div className="flex h-screen w-1/5 flex-col items-center justify-start sm:h-1/5 sm:w-full">
        <Logo />
        <div className="m-8 flex flex-col sm:hidden">
          <Button onClick={() => onClick(0)} active={page === 0}>
            {KONGZ_TITLE}
          </Button>
          <Button onClick={() => onClick(1)} active={page === 1}>
            {KONGZ_VX_TITLE}
          </Button>
        </div>
      </div>
      <div className="h-screen w-4/5 sm:w-full">
        <Swiper
          modules={[EffectCube]}
          effect={'cube'}
          onSwiper={s => setSwiper(s)}
          onSlideChange={({ activeIndex }) => {
            setPage(activeIndex)
          }}
        >
          <SwiperSlide>
            <Overview id={0} />
          </SwiperSlide>
          <SwiperSlide>
            <Overview id={1} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SideBar
