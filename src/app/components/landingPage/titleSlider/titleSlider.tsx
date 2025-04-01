'use client';
import classes from '../../../page.module.css';
import styles from './titleSlider.module.css';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import { usePathname } from 'next/navigation';
import logoOpaqueLight from '../../../../../public/main/LOGO_OPAQUE_LIGHT.svg';
import Image from 'next/image';

/* const tagData: Array<{name : string}> = [
    {name: 'dosłownie cztery główne specjalizacje'},
    {name: 'dosłownie cztery główne specjalizacje'},
    {name: 'dosłownie cztery główne specjalizacje'},
] */

export default function TitleSlider({slogan}: {slogan : string}) {

    //swiper element requires having more than one element to work properly
    const sliderData: Array<{name: string}> = [
        {name: slogan},
        {name: slogan},
        {name: slogan},
    ]

    return(
        <div className="py-5">
          <div className={classNames({[classes.menuBarHeight]:true, ['w-screen flex items-center']:true})}>
                <Swiper
                    modules={[Autoplay]}
                    speed={5000}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode= {true}
                    >
                    {sliderData.map(item => {
                        return(
                            <SwiperSlide
                            className={styles.slide}>
                                <div className="flex items-center gap-10">
                                    <p className="text-8xl font-thin whitespace-nowrap uppercase hover:text-gray-800">{item.name}</p>
                                    <Image className='h-12' alt="logo" src={logoOpaqueLight}/>
                                </div>                                
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>        
    )
}