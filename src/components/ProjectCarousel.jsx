import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCarousel = ({ images = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // 🆕

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
    <div className="rounded-xl bg-gray py-16">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // 🆕 Save swiper instance
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2.2}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1.5 },
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
      <div className="relative mt-4 flex justify-center gap-4">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom rounded-full border p-2 transition hover:bg-gray-100"
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next-custom rounded-full border p-2 transition hover:bg-gray-100"
          aria-label="Next slide"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
