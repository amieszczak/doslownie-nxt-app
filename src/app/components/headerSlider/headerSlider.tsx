'use client';
import styles from './headerSlider.module.css';
import classes from '../../page.module.css';
import classNames from 'classnames';
/* import { Swiper, SwiperSlide } from 'swiper/react'; */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoOpaque from '../../../../public/main/LOGO_OPAQUE.svg';
import sliderDivider from '../../../../public/main/slider_divider.svg';
import logoOpaqueLight from '../../../../public/main/LOGO_OPAQUE_LIGHT.svg';
import Image from 'next/image';

const tagData = [
    {name: 'opóźniony rozwój mowy'},
    {name: 'dyslalia'},
    {name: 'afazja'},
    {name: 'jąkanie'},
    {name: 'dyzartria'},
    {name: 'terapia mowy'},
    {name: 'alogia'},
    {name: 'oligofazja'},
    {name: 'mowa echolaliczna'},
]

export default function HeaderSlider() {

    const location = usePathname();

    return(
        <>
        {location != '/'        
        &&    <div className={classNames({[classes.menuBarHeight]:true, ['w-screen flex items-center']:true})}>
                <Swiper
                    modules={[Autoplay]}
                    speed={28000}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                    }}
                    freeMode= {true}
                    >
                    {tagData.map(item => {
                        return(
                            <SwiperSlide>
                                <div className="flex items-center gap-10">
                                    <Link href='#' className="text-8xl font-bold whitespace-nowrap uppercase hover:text-gray-800">{item.name}</Link>
                                    <Image className='h-12' alt="logo" src={logoOpaqueLight}/>
                                </div>                                
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        }
        </>        
    )
}

  


           /*  <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}                
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

        </Swiper> */