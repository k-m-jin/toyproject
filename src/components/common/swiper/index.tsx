import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { useMemo } from 'react'

interface Post {
  src: string
  title: string
  description: string
}
export default () => {
  const Posts: Post[] = useMemo(() => {
    return [
      { src: 'https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg', title: '오늘의 1', description: 'asdf' },
      { src: 'https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg', title: '오늘의 2', description: 'asdf' },
      {
        src: 'https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg',
        title: '오늘의 3',
        description: 'dfkadkjfkjd \njkn',
      },
    ]
  }, [])
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ type: 'fraction' }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {Posts.map((element, index) => {
        return (
          <SwiperSlide>
            <div>
              <img src={element.src} alt='slide1' />
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </div>
          </SwiperSlide>
        )
      })}
      {/* <SwiperSlide>
        <div>
          <img src='https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg' alt='slide1'></img>
          <h3>
            오늘상점
            <br />
            today
          </h3>
          <p>
            오늘 상점의 추천 아이템을
            <br /> 24시간동안 <strong>특별한 가격</strong>으로 만나보세요!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src='https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg' alt='slide1'></img>
          <h3>
            오늘상점
            <br />
            today
          </h3>
          <p>
            오늘 상점의 추천 아이템을
            <br /> 24시간동안 <strong>특별한 가격</strong>으로 만나보세요!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src='https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg' alt='slide1'></img>
          <h3>
            오늘상점
            <br />
            today
          </h3>
          <p>
            오늘 상점의 추천 아이템을
            <br /> 24시간동안 <strong>특별한 가격</strong>으로 만나보세요!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src='https://user-images.githubusercontent.com/57033026/190844284-1926b527-d940-4e10-8e3e-ba63603b0dfd.jpg' alt='slide1'></img>
          <h3>
            오늘상점
            <br />
            today
          </h3>
          <p>
            오늘 상점의 추천 아이템을
            <br /> 24시간동안 <strong>특별한 가격</strong>으로 만나보세요!
          </p>
        </div>
      </SwiperSlide> */}
    </Swiper>
  )
}
