
import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.css';
import classNames from "classnames";
import LandingPageBlogTitleUnit from "./units/title/landingPageBlogTitleUnit";
import LandingPageBlogCommonUnit from "./units/common/landingPageBlogCommonUnit";

export default async function LandingPageBlog() {

    const posts = await getAllPosts();    

    const unitAppearance:string = 'w-1/3 h-[80%] border border-black backdrop-filter backdrop-blur-sm bg-opacity-10';

    return (       
        <div className={classNames({['w-screen flex items-center justify-between pt-50 pb-25 px-25 gap-25']:true, [styles.container]:true})}>
                <LandingPageBlogTitleUnit photoSrc={posts[0]?.node?.featuredImage?.node?.sourceUrl} title={posts[0]?.node?.title} content={posts[0]?.node?.content}/>
                <LandingPageBlogCommonUnit photoSrc={posts[1]?.node?.featuredImage?.node?.sourceUrl} title={posts[1]?.node?.title} content={posts[1]?.node?.content}/>
        </div>
    )
}        