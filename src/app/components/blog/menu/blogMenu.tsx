import Link from "next/link";
import getCategories from "@/integrations/wordpress/getCategories";
import getTags from "@/integrations/wordpress/getTags";
import classes from '../../../page.module.css';
import classNames from "classnames";

export default async function BlogMenu() {

    const categories = await getCategories();
    const tags = await getTags();

    return (
        <div className={classNames({[classes.blogMenuContainer]: true, ['h-[100vh] flex items-center fixed']:true})}>
            <aside className={'border-l border-black p-[1vw]'}>
                <nav className='h-full flex flex-col gap-[2vw]'>
                    <h2 className='text-3xl font-bold italic'>Kategoria</h2>
                    {categories?.map((category, index) => {
                        if(category?.name.toLowerCase() == 'uncategorized') {
                            return;
                        }
                        return(
                            <div key={index} className='flex flex-col gap-[1vw] ml-[10px]'>
                                <h3 className='text-2xl font-bold'>{category?.name}</h3>                        
                                <div className='flex flex-col gap-[1vw] ml-[10px]'>
                                    {category?.posts?.map((post, index) => {                                        
                                        return(
                                            <Link key={index} href={'/blog/' + post?.slug}>
                                                {post?.title}
                                            </Link>                                                     
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <h2 className='text-3xl font-bold italic'>Tag</h2>
                    <div className='w-1/4 flex gap-1 flex-wrap w-full'>                        
                        {tags?.map((tag, index) => {
                            return(
                                <Link className='border border-black p-2 rounded-md' href={'/blog/' + tag.slug}>
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