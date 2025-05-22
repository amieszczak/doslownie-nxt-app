import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import classes from '../../../../../page.module.css';

export default function LandingPageBlogCommonUnit({photoSrc, title, content}: {photoSrc: string, title?: string, content?: string}) {
    return(
        <div className="h-full flex flex-col justify-between">
            <div className={classNames({['border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 relative h-full']: true, [classes.landingPageBlogContainer]:true})}>
                {undefined != photoSrc 
                ?
                <div className='h-2/3 w-full overflow-hidden'>
                    <Image src={photoSrc} alt='zdjecie bloga' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
                :
                null
                }
                <div className={classNames({['w-full p-5 overflow-hidden']: true, ['h-1/3']: undefined != photoSrc })}> 
                    <h3 className='text-white text-xl mb-5'>{title}</h3> 
                    <div className='text-white'
                    dangerouslySetInnerHTML={{__html: content ?? ''}}
                    />
                </div>
            
            </div>
            <Link href={'/blog'} className='w-full h-15 block border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-xl text-white flex items-center justify-center hover:bg-black hover:border-none'>
                Dowiedz się więcej
            </Link>
        </div>        
    )
}