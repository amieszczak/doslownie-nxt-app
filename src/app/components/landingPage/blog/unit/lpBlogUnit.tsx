import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

export default function LandingPageBlogUnit({photoSrc, title, content, variant}: {photoSrc: string, title?: string, content?: string, variant?: boolean}) {
    return(
        <div className={classNames({['w-1/3 border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 relative']: true, ['h-[80%]']:variant, ['h-[60%]']: !variant})}>
            {!variant
            &&
            <h2 className='absolute text-white text-7xl text-bold font-bold translate-y-[-110%]'>BLOG</h2>}
            {undefined != photoSrc 
            ?
            <div className='h-1/2 w-full overflow-hidden'>
                <Image src={photoSrc} alt='zdjecie bloga' width={500} height={500} className='w-full h-full object-cover'/>
            </div>
            :
            null
            }
            <div className='w-full h-1/2 p-5 overflow-hidden'>
                <h3 className='text-white text-xl'>{title}</h3>
                <div className='text-white'
                dangerouslySetInnerHTML={{__html: content ?? ''}}
                />
            </div>
            {!variant &&
            <Link href={'/blog'} className='w-full h-[10%] mt-[10%] block border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-xl text-white flex items-center justify-center hover:bg-black hover:border-none'>
                Dowiedz się więcej
            </Link>}
        </div>
    )
}