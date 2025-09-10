'use client';
import Image from "next/image";
import video from '../../../../../public/entryVideo.gif';
import classNames from "classnames";
import styles from './landingPageVideo.module.css';
import { useState, useEffect } from "react";

export default function LandingPageVideo() {
    
    const [titleVisible, setTitleVisible] = useState(true);
    const [componentFullScreen, setComponentFullScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {            
            setTitleVisible(window.scrollY === 0);   
            setComponentFullScreen(window.scrollY > document.documentElement.scrollHeight/2)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const dimensionsInitial = 'max-h-[1080px] max-w-[1920px] h-screen w-screen'; 
    const dimensionsScrolled = 'max-w-[1920px] h-screen w-screen'

    return(
        <div className={classNames({[dimensionsInitial]: !componentFullScreen, [dimensionsScrolled]: componentFullScreen, ['relative']: true})}>
            <div className={classNames({['fixed z-[-1]']: true, [dimensionsInitial]: !componentFullScreen, [dimensionsScrolled]: componentFullScreen})}>
                <Image alt="animacja tytułowa" className="w-full h-full object-cover" src={video}/>
                <div className={classNames({["absolute bottom-0 text-white"]: true, [styles.hide]: !titleVisible, [styles.show]: titleVisible})}>
                    <div className={classNames({['relative border-t-2 border-white w-[84vw]']: true, [styles.titleContainer]: true})}>                       
                        <h1 className={styles.title}>DOSŁOWNIE</h1> 
                        <h2 className={styles.subtitle}>NEUROLOGOPEDIA</h2>
                    </div>  
                </div>
            </div>
        </div>
    )
}