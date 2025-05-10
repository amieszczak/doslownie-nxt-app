import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.css';
/* import Image from "next/image"; */
import classNames from "classnames";
import LandingPageBlogUnit from "./unit/lpBlogUnit";

export default async function LandingPageBlog() {

    const posts = await getAllPosts();

    const samplePostDataSource = posts[2]?.node?.featuredImage?.node?.sourceUrl;

    

    console.log('allPosts:', posts);
    console.log('sampleUrl:', samplePostDataSource);
    console.log('currentFeatureImage:', posts[0]?.node?.featuredImage?.node?.sourceUrl);

    const unitAppearance:string = 'w-1/3 h-[80%] border border-black backdrop-filter backdrop-blur-sm bg-opacity-10';

    return (       
        <div className={classNames({['w-screen flex items-center justify-evenly']:true, [styles.container]:true})}>
                <LandingPageBlogUnit photoSrc={posts[2]?.node?.featuredImage?.node?.sourceUrl} title={posts[2]?.node?.title} content={posts[2]?.node?.content} variant={true}/>
                <LandingPageBlogUnit photoSrc={posts[3]?.node?.featuredImage?.node?.sourceUrl} title={posts[3]?.node?.title} content={posts[3]?.node?.content}/>
        </div>
    )
}        

{/* <div className={unitAppearance}>
                <div className='h-1/2 w-full overflow-hidden'>
                    <Image src={samplePostDataSource} alt='przykładowe zdjęcie bloga' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
            </div> */}