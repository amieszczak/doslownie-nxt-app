import getAllPosts from "@/integrations/wordpress/getAllPosts";
import Link from "next/link";
import getCategories from "@/integrations/wordpress/getCategories";
import classes from '../../../page.module.css';

export default async function BlogMenu() {

    const posts = await getAllPosts();

    console.log(posts);

    const categories = await getCategories();

    console.log('fetchedCategories:', categories);

    return (
        <>
            <div className={classes.subpageTopMargin}></div>   
            <aside className='fixed border border-black p-[1vw] w-full'>
                <nav className='flex flex-col gap-10'>    
                    {categories?.map((category, index) => {
                        return(
                            <div key={index} className='flex flex-col gap-5'>
                                <h2 className='text-xl'>{category?.name}</h2>                        
                                <div className='flex flex-col gap-10'>
                                    {category?.posts?.map(post => {
                                        return(
                                            <h3>{post?.title}</h3>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}            
                </nav>
            </aside>
        </>
    )
}

{/* {posts?.map((item, index) => {
    return(
        <Link key={index} href='#'>{item.title}</Link>                        
    )
})} */}