import classes from '../../../../page.module.css';
import styles from './page.module.css';
import classNames from "classnames";
import PostPreview from "@/app/components/blog/postPreview/postPreview";
import BlogMenu from "@/app/components/blog/menu/blogMenu";
import getCategoriesBySlug from "@/integrations/wordpress/getCategoryBySlug";
import { CategoryBySlugType } from "@/app/types/category-by-slug";

export default async function BlogCategory({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const category: CategoryBySlugType | null = await getCategoriesBySlug(slug);

    return(
        <>
            <div className={classes.subpageTopMargin}></div>   
            <div className='flex'>
                <div className={classNames({['flex flex-col w-full']: true, [classes.breadcrumbsMargin]: true, [styles.margin]: true, [styles.gap]: true})}>
                    {category?.posts?.map((item, index) => {                        
                        return(
                            <PostPreview url={'blog/' + item.slug} key={index} title={item.title} content={item.content} photo={item.featuredImage} categories={item.categories} tags={item.tags}/>
                        )
                    })}
                </div>
                <div className='w-200'>
                    <BlogMenu slug={slug}/>
                </div>
            </div>
        </>
    )
}
