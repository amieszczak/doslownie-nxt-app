import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.css';
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import classes from '../../../page.module.css';

export default async function LandingPageBlog() {

    const posts = await getAllPosts();

    // Inner component for the title/main blog post
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function LandingPageBlogTitleUnit({photoSrc, title, content, href}: {photoSrc: string, title?: string, content?: string, href: string}) {
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

    // Inner component for common blog posts
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function LandingPageBlogCommonUnit({photoSrc, title, content, href}: {photoSrc: string, title?: string, content?: string, href: string}) {
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
                    </div>
                
                </Link>
                <Link href={'/blog/'} className='w-full h-15 block border border-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-xl text-white flex items-center justify-center hover:bg-black hover:border-none'>
                    Dowiedz się więcej
                </Link>
            </div>        
        )
    }
    
    return (       
        <div className={classNames({['w-screen h-screen flex flex-col lg:flex-row items-center justify-between pt-10 lg:pt-50 pb-10 lg:pb-25 px-5 lg:px-25 gap-10 lg:gap-25 max-w-[1920px]']:true, [styles.container]:true})}>
            <LandingPageBlogTitleUnit href={'/blog/' + posts[0]?.slug} photoSrc={posts[0]?.featuredImage} title={posts[0]?.title} content={posts[0]?.content}/>        
            <LandingPageBlogCommonUnit href={'/blog/' + posts[1]?.slug} photoSrc={posts[1]?.featuredImage} title={posts[1]?.title} content={posts[1]?.content}/>
        </div>
    )
}