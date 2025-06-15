import Link from "next/link";
import getCategories from "@/integrations/wordpress/getCategories";
import classes from '../../../page.module.css';
import classNames from "classnames";

export default async function BlogMenu() {

    const categories = await getCategories();

    return (
        <div className={classNames({[classes.blogMenuContainer]: true, ['h-[100vh] w-full flex items-center fixed']:true})}>
            <aside className={'border-l border-black  p-[1vw] w-full'}>
                <nav className='h-full flex flex-col gap-[2vw]'>
                    <h2 className='text-3xl font-bold italic'>Kategoria</h2>
                    {categories?.map((category, index) => {
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
                    
                </nav>
            </aside>            
        </div>
    )
}