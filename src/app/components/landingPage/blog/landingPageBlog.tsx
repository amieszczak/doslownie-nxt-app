import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.scss';
import Image from "next/image";

export default async function LandingPageBlog() {

    const posts = await getAllPosts();

    const samplePostDataSource = posts[2]?.node?.featuredImage?.node?.sourceUrl;

    console.log('allPosts:', posts);
    console.log('sampleUrl:', samplePostDataSource);

    const unitAppearance:string = 'w-1/3 h-[80%] border border-black bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10';

    return (       
        <div className='w-screen h-screen flex items-center justify-evenly relative z-[10]'>
            <div className={unitAppearance}>
                <div className='h-1/2 w-full overflow-hidden'>
                    <Image src={samplePostDataSource} alt='przykładowe zdjęcie bloga' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className={unitAppearance}></div>                                                
        </div>
    )
}        