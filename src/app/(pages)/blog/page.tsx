import React from "react";
import classes from '../../page.module.css';
import styles from './page.module.css';
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
                <div className={classNames({['flex flex-col w-full']: true, [classes.breadcrumbsMargin]: true, [styles.margin]: true, [styles.gap]: true})}>
                    {posts && posts.length > 0 ? (
                        posts.map((item, index) => {
                            return(
                                <PostPreview url={'blog/' + item.slug} key={index} title={item.title} content={item.content} photo={item.featuredImage} categories={item.categories} tags={item.tags}/>
                            )
                        })
                    ) : (
                        <div className="text-center py-8">
                            <p>Brak dostępnych postów.</p>
                        </div>
                    )}
                </div>
                <div className='w-200'>
                    <BlogMenu/>
                </div>
            </div>
        </>
    )
}