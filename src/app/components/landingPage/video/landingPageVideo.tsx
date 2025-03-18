import Image from "next/image";
import video from '../../../../../public/entryVideo.gif';

export default function LandingPageVideo() {
    return(
        <div className="w-screen h-screen">
            <Image alt="animacja tytułowa" className="w-full h-full object-cover" src={video}/>
        </div>
    )
}