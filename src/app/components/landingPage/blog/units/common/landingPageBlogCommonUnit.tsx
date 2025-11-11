import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import classes from '../../../../../page.module.css';

export default function LandingPageBlogCommonUnit({photoSrc, title, /* content, */ href}: {photoSrc: string, title?: string, content?: string, href: string}) {
    return(
        <div className="w-full lg:w-auto h-full flex flex-col justify-between">
            <Link href={href} className={classNames({['border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 relative h-full']: true, [classes.landingPageBlogContainer]:true})}>
                {undefined != photoSrc 
                ?
                <div className='h-4/5 w-full overflow-hidden'>
                    <Image src={photoSrc} alt='zdjecie bloga' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
                :
                null
                }
                <div className={classNames({['w-full p-3 lg:p-5 overflow-hidden']: true, ['h-1/5']: undefined != photoSrc })}> 
                    <h3 className='text-white text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-5 font-semibold'>{title}</h3> 
                    {/* <div className='text-white'
                    dangerouslySetInnerHTML={{__html: content ?? ''}}
                    /> */}
                </div>
            
            </Link>
            <Link href={'/blog/'} className='w-full h-15 block border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-xl text-white flex items-center justify-center hover:bg-black hover:border-none'>
                Dowiedz się więcej
            </Link>
        </div>        
    )
}