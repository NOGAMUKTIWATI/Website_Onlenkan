"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "@/app/components/home/portfolio/card";

const items = [
  {
    id: 1,
    title: "Socialpet.id",
    desc: "Platform aplikasi media sosial untuk pecinta hewan peliharaan",
    image: "./images/portfolio/Social.png",
    category: ["App", "Website"],
  },
  {
    id: 2,
    title: "HIPMI Probolinggo",
    desc: "Aplikasi informasi Himpunan Pengusaha Muda Indonesia (HIPMI) di Kota Probolinggo",
    image: "./images/portfolio/2.png",
    category: ["App"],
  },
  {
    id: 3,
    title: "MPP Kota Probolinggo",
    desc: "Landing page informasi layanan instansi di Kota Probolinggo",
    image: "./images/portfolio/3.png",
    category: ["App", "Website"],
  },
];

const responsive = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

export default function portfolio() {
  return (
    <div className="mt-20 space-y-10">
      <div className="max-w-lg mx-auto text-center space-y-2">
        <p className="text-theme-primary text-xs font-bold uppercase">
          PORTFOLIO
        </p>
        <h2 className="font-bold text-4xl max-w-lg">Recent Featured</h2>
      </div>
      <div className="p-5">
        <Swiper
          spaceBetween={30}
          loop={true}
          breakpoints={responsive}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item, index) => (
            <SwiperSlide>
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                image={item.image}
                category={item.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
