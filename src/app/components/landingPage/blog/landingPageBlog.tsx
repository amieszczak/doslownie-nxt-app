import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.scss';

export default async function LandingPageBlog() {

    /* const posts = await getAllPosts(); */


    const unitAppearance:string = 'w-1/3 h-[80%] border border-black bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10';

    return (       
        <div className='w-screen h-screen flex items-center justify-evenly relative z-[10]'>
            <div className={unitAppearance}></div>
            <div className={unitAppearance}></div>                                                
        </div>
    )
}        