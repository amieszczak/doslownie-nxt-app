'use client';
import Image from "next/image";
import video from '../../../../../public/entryVideo.gif';
import classNames from "classnames";
import styles from './landingPageVideo.module.css';
import { useState, useEffect } from "react";

export default function LandingPageVideo_1() {

    const [titleVisible, setTitleVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {            
            setTitleVisible(window.scrollY === 0);            
        }

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <div className='w-full h-screen max-h-[1080px] bg-black'>
            <Image alt="animacja tytułowa" className="w-full h-full object-cover" src={video}/> {/* fixed z-[-2] */}
        </div>
    )
}

{/* <div className="w-screen h-screen relative max-w-[1920px] max-h-[1080]">
    <Image alt="animacja tytułowa" className="w-full h-full object-cover fixed z-[-2]" src={video}/>
    <div className={classNames({["fixed bottom-0 text-white"]: true, [styles.hide]: !titleVisible, [styles.show]: titleVisible})}>
        <div className='relative border-t-2 border-white h-60 w-[84vw]'>
            <h1 className="text-[15vw] absolute bottom-0 left-[-1vw] leading-[10vw]">DOSŁOWNIE</h1> 
            <h2 className="text-[5vw] absolute right-0 translate-y-[-100%]">NEUROLOGOPEDIA</h2>
        </div>                
    </div>            
</div> */}