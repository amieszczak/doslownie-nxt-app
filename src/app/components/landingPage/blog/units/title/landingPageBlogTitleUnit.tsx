import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import classes from '../../../../../page.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LandingPageBlogTitleUnit({photoSrc, title, content, href}: {photoSrc: string, title?: string, content?: string, href: string}) {
    return(
        <div className="w-full lg:w-auto h-full flex flex-col justify-between">
            <h2 className='text-white text-7xl text-bold text-end font-bold h-25'>BLOG</h2>
            <Link href={href} className={classNames({['border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 relative h-[65%]']: true, [classes.landingPageBlogContainer]:true})}>                        
                {undefined != photoSrc 
                ?
                <div className='h-4/5 w-full overflow-hidden'>
                    <Image src={photoSrc} alt='zdjecie bloga' width={500} height={500} className='w-full h-full object-cover object-top'/>
                </div>
                :
                null
                }
                <div className={classNames({['w-full p-3 lg:p-5 overflow-hidden']: true, ['h-1/5']: undefined != photoSrc })}> 
                    <h3 className='text-white text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-5 font-semibold'>{title}</h3>
                </div>
            </Link>
        </div>        
    )
}