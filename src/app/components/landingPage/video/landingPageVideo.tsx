'use client';
import Image from "next/image";
import video from '../../../../../public/entryVideo.gif';
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from './landingPageVideo.module.css';

export default function LandingPageVideo() {

    const location = usePathname();

    return(
        <div className="w-screen h-screen relative">
            <Image alt="animacja tytułowa" className="w-full h-full object-cover" src={video}/>
            <div className={classNames({["absolute bottom-0 text-white"]: true, /* [styles.hide]: location == '/' && window.scrollY == 0 */})}>
                <div className="relative">
                    <h2>NEUROLOGOPEDIA</h2>
                    <span className="w-[50vw] border-bottom block border-white"></span>
                    <h1 className="text-white font-light text-[12vw] absolute bottom-0 left-0">DOSŁOWNIE</h1>            
                </div>                
            </div>            
        </div>
    )
}