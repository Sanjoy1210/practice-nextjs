"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const sliders = [
    {
        title: 'Slider 1',
        id: 'slider-1',
        imageURL: '/images/slider-1.jpg',
    },
    {
        title: 'Slider 2',
        id: 'slider-2',
        imageURL: '/images/slider-2.jpg',
    },
    {
        title: 'Slider 3',
        id: 'slider-3',
        imageURL: '/images/slider-3.jpg',
    }
];

export default function HeroSection() {
  return (
    <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            // breakpoints={{
            //     640: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     768: {
            //         slidesPerView: 4,
            //         spaceBetween: 40,
            //     },
            //     1024: {
            //         slidesPerView: 5,
            //         spaceBetween: 50,
            //     },
            // }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                sliders?.map((slider) => <SwiperSlide key={slider?.id}>
                    
                    {/* <Image
                        src={slider.imageURL}
                        alt="Picture of the author"
                        sizes="100%"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={700} // increase or decrease
                        height={250} // increase or decrease
                    /> */}

                    {/* https://stackoverflow.com/questions/74795804/next-js-responsive-image-with-custom-size */}
                    {/* https://reacthustle.com/blog/how-to-set-nextjs-images-with-auto-width-and-height?expand_article=1 */}
                    {/* https://levelup.gitconnected.com/responsive-image-using-aspect-ratio-no-media-queries-are-needed-2abef1544c96 */}

                    <div className="w-full relative pt-[37%]">
                        <Image
                            src={slider.imageURL}
                            alt="profile"
                            objectFit="contain"
                            fill
                            className="w-full h-full top-0 left-0"
                        />
                    </div>
            </SwiperSlide>)
            }
        </Swiper>
    </div>
  )
}
