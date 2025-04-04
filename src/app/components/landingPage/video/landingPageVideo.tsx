'use client';
import Image from "next/image";
import video from '../../../../../public/entryVideo.gif';
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from './landingPageVideo.module.css';
import { useState, useEffect } from "react";

export default function LandingPageVideo() {

    const [titleVisible, setTitleVisible] = useState(true);

    const location = usePathname();

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
        <div className="w-screen h-screen relative">
            <Image alt="animacja tytułowa" className="w-full h-full object-cover fixed z-[-1]" src={video}/>
            <div className={classNames({["fixed bottom-0 text-white"]: true, [styles.hide]: !titleVisible, [styles.show]: titleVisible})}>
                <div className={classNames({["relative border-t-2 border-white h-60 w-[84vw]"]:true,/*  [styles.hide]:!titleVisible */})}>
                    <h1 className="text-[15vw] absolute bottom-0 left-[-1vw] leading-[10vw]">DOSŁOWNIE</h1> 
                    {/* <span className="w-[50vw] border-bottom block border-white"></span> */}
                    <h2 className="text-[5vw] absolute right-0 translate-y-[-100%]">NEUROLOGOPEDIA</h2>
                </div>                
            </div>            
        </div>

    )
}
