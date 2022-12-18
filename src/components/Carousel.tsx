import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper';
import { map } from 'lodash';
import useResponsive from 'hooks/useResponsive';

const portfolioContent = [
  {
    title: 'Random stage game',
  },
  {
    title: 'Github(Clone)',
  },
  {
    title: 'Kitchen web(Clone)',
  },
  {
    title: 'Shopping mall(Clone)',
  },
  {
    title: 'Starbucks web(Clone)',
  },
  {
    title: 'Slide 5',
  },
  {
    title: 'Slide 6',
  },
];
export default function Carousel() {
  const { WIDTH900 } = useResponsive();
  return (
    <>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        loop={false}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
        {map(portfolioContent, (portfolio, idx) => (
          <SwiperSlide key={idx}>{portfolio.title.toUpperCase()}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
