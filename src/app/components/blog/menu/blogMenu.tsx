import Link from "next/link";
import getCategories from "@/integrations/wordpress/getCategories";
import getTags from "@/integrations/wordpress/getTags";
import classes from '../../../page.module.css';
import classNames from "classnames";

export default async function BlogMenu({ slug }: { slug?: string }) {
    const categories = await getCategories();
    const tags = await getTags();

    return (
        <div className={classNames({[classes.blogMenuContainer]: true, ['h-[100vh] flex items-center fixed']:true})}>
            <aside className={'border-l border-black p-[10px]'}>
                <nav className='h-full flex flex-col gap-[2vw]'>
                    <h2 className='text-3xl font-bold italic'>Kategoria</h2>
                    {categories?.map((category, index) => {
                        if(category?.name.toLowerCase() == 'logopedia') {
                            return;
                        }
                        return(
                            <div key={index} className='flex flex-col gap-[1vw] ml-[10px]'>
                                <Link className='group' href={'/blog/kategoria/' + category?.slug}>                                
                                    <h3 className={classNames({['text-2xl font-bold group-hover:bg-black group-hover:text-white']: true, ['bg-black text-white']: category?.slug == slug})}>{category?.name}</h3>                                    
                                </Link>
                                <div className='flex flex-col gap-[1vw] ml-[10px]'>
                                    {category?.posts?.map((post, index) => {    
                                        if(index < 2) {
                                            return(
                                                <Link className='relative group hover:text-white transition-colors duration-500' key={index} href={'/blog/' + post?.slug}>
                                                    {post?.title}
                                                    <span className='group-hover:bg-black absolute z-[-10] left-[-30px] top-[50%] transform translate-y-[-50%] w-200 h-[130%] bg-white transition-colors duration-500'></span>
                                                </Link>                                                     
                                            )
                                        }                                    
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <h2 className='text-3xl font-bold italic'>Tag</h2>
                    <div className='w-1/4 flex gap-1 flex-wrap w-full'>                        
                        {tags?.map((tag, index) => {
                            return(
                                <Link key={index} className={classNames({['border border-black p-1 rounded-md hover:bg-black hover:text-white transition-colors duration-500']: true, ['bg-black text-white']: tag?.slug == slug})} href={'/blog/tag/' + tag.slug}>
                                    {tag.name}
                                </Link>            
                            )
                        })}
                    </div>
                </nav>
            </aside>            
        </div>
    )
}