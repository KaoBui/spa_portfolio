import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCarousel = ({ images = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div>
      <div className="rounded-xl bg-gray px-8 py-16 pb-4 lg:px-0">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // 🆕 Save swiper instance
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={56}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1.8 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Project image ${index + 1}`}
                className="h-auto w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative mt-4 flex justify-center gap-4">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom rounded-full border p-2 px-4 transition hover:bg-gray"
          aria-label="Previous slide"
        >
          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z" />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next-custom rounded-full border p-2 px-4 transition hover:bg-gray"
          aria-label="Next slide"
        >
          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
