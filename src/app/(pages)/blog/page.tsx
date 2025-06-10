import React from "react";
import classes from '../../page.module.css';
import getAllPosts from "@/integrations/wordpress/getAllPosts";
import PostPreview from "@/app/components/blog/postPreview/postPreview";

export default async function BlogPage() {

    const posts = await getAllPosts();   
    console.log('posts:', posts); 

    return(
        <>
            <div className={classes.subpageTopMargin}></div>   
            <div className='flex'>
                <div className='w-200'></div>
                <div className='flex flex-col gap-25 w-full mr-25'>
                    {posts?.map((item, index) => {
                        return(
                            <PostPreview url={'blog/' + item.slug} key={index} title={item.title} content={item.content} photo={item.featuredImage}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}