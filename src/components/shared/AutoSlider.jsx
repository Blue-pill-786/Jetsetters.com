import React, { useState } from 'react'
import { Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';

const AutoSlider = ({ data }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-full'>
            <Swiper
                style={{
                    width: "100%",
                }}
                modules={[Scrollbar, A11y, Autoplay, Thumbs]}
                spaceBetween={32}
                slidesPerView={1}
                grabCursor={true}
                scrollbar={{ draggable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => "console.log(swiper)"}
                onSlideChange={() => "console.log('slide change')"}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                }}
            >
                {
                    data.map((img, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
                            <img src={img}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default AutoSlider