import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import classes from '../../../../../page.module.css';

export default function LandingPageBlogTitleUnit({photoSrc, title, content, href}: {photoSrc: string, title?: string, content?: string, href: string}) {
    return(
        <Link href={href} className='flex flex-col justify-between h-full'>
            <h2 className='text-white text-7xl text-bold text-end font-bold h-25'>BLOG</h2>
            <div className={classNames({['border border-white backdrop-filter backdrop-blur-sm bg-opacity-10']: true, [classes.landingPageBlogContainer]:true})}>                        
                {undefined != photoSrc 
                ?
                <div className='h-2/3 w-full overflow-hidden'>
                    <Image src={photoSrc} alt='zdjecie bloga' width={500} height={500} className='w-full h-full object-cover object-top'/>
                </div>
                :
                null
                }
                <div className={classNames({['w-full p-5 overflow-hidden']: true, ['h-1/3']: undefined != photoSrc })}> 
                    <h3 className='text-white text-xl mb-5 font-semibold'>{title}</h3>
                    <div className='text-white'
                    dangerouslySetInnerHTML={{__html: content ?? ''}}
                    />
                </div>
            </div>
        </Link>        
    )
}