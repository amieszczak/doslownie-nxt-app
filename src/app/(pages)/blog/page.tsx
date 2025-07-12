import React from "react";
import classes from '../../page.module.css';
import getAllPosts from "@/integrations/wordpress/getAllPosts";
import PostPreview from "@/app/components/blog/postPreview/postPreview";
import BlogMenu from "@/app/components/blog/menu/blogMenu";
import classNames from "classnames";

export default async function BlogPage() {

    const posts = await getAllPosts();   

    return(
        <>
            <div className={classes.subpageTopMargin}></div>   
            <div className='flex'>
                <div className={classNames({['flex flex-col gap-25 w-full mr-25']: true, [classes.breadcrumbsMargin]: true})}>
                    {posts?.map((item, index) => {
                        return(
                            <PostPreview url={'blog/' + item.slug} key={index} title={item.title} content={item.content} photo={item.featuredImage}/>
                        )
                    })}
                </div>
                <div className='w-200'>
                    <BlogMenu/>
                </div>
            </div>
        </>
    )
}