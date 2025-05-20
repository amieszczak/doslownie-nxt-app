
import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.css';
import classNames from "classnames";
import LandingPageBlogUnit from "./unit/lpBlogUnit";
import useLandingPageBlog from "./utils/useLandingPageBlog";

export default async function LandingPageBlog() {

    const posts = await getAllPosts();    

    const sample = useLandingPageBlog();

    const unitAppearance:string = 'w-1/3 h-[80%] border border-black backdrop-filter backdrop-blur-sm bg-opacity-10';

    console.log('useLandingPageBlog:', useLandingPageBlog);

    return (       
        <div className={classNames({['w-screen flex items-center justify-between px-25 gap-25']:true, [styles.container]:true})}>
                <LandingPageBlogUnit photoSrc={posts[0]?.node?.featuredImage?.node?.sourceUrl} title={posts[0]?.node?.title} content={posts[0]?.node?.content} variant={true}/>
                <LandingPageBlogUnit photoSrc={posts[1]?.node?.featuredImage?.node?.sourceUrl} title={posts[1]?.node?.title} content={posts[1]?.node?.content}/>
        </div>
    )
}        