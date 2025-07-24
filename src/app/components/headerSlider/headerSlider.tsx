'use client';
import styles from './headerSlider.module.css';
import classes from '../../page.module.css';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoOpaqueLight from '../../../../public/main/LOGO_OPAQUE_LIGHT.svg';
import Image from 'next/image';
import { PostTagsType } from '@/app/types/post-tags';

export default function HeaderSlider({tags}: {tags: PostTagsType[] | null}) {

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
                    {tags?.map((item, index) => {
                        return(
                            <SwiperSlide
                            key={index}
                            className={styles.slide}
                            >
                                <div className="flex items-center gap-10">
                                    <Link href={'/blog/tag/' + item.slug} className="text-8xl font-bold whitespace-nowrap uppercase hover:text-gray-800">{item.name}</Link>
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