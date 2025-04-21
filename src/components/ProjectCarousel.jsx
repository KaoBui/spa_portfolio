import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCarousel = ({ images = [] }) => {
    return (
      <div className='bg-gray rounded-xl p-12'>
      <Swiper
      modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },}}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}         className="rounded-lg overflow-hidden"
>
            <img
              src={src}
              alt={`Project image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    );
  };

  export default ProjectCarousel
