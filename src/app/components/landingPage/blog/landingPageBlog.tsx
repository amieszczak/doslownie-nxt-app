import getAllPosts from "@/integrations/wordpress/getAllPosts"
import styles from './landingPageBlog.module.css';
import classNames from "classnames";
import LandingPageBlogTitleUnit from "./units/title/landingPageBlogTitleUnit";
import LandingPageBlogCommonUnit from "./units/common/landingPageBlogCommonUnit";

export default async function LandingPageBlog() {

    const posts = await getAllPosts();    
    
    return (       
        <div className={classNames({['w-screen flex items-center justify-between pt-50 pb-25 px-25 gap-25']:true, [styles.container]:true})}>
            <LandingPageBlogTitleUnit href={'/blog/' + posts[0]?.slug} photoSrc={posts[0]?.featuredImage} title={posts[0]?.title} content={posts[0]?.content}/>        
            <LandingPageBlogCommonUnit href={'/blog/' + posts[1]?.slug} photoSrc={posts[1]?.featuredImage} title={posts[1]?.title} content={posts[1]?.content}/>
        </div>
    )
}