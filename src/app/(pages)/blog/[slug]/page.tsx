import getSinglePost from "@/integrations/wordpress/getSinglePost";
import classes from '../../../page.module.css';
import Image from "next/image";

export default async function Post({params}:{params: Promise<{ slug : string }>}) {

    const slug: string = (await params).slug;
    const post = await getSinglePost(slug);

    return(
        <div>
            <div className={classes.subpageTopMargin}></div>  
            <div className='w-screen flex flex-col gap-10 items-center'>    
                {post?.featuredImage && (
                    <div className="w-full h-[75vh] overflow-hidden">
                        <Image src={post?.featuredImage} width={1920} height={1080} alt='zdjecie tytulowe' className='w-full h-full object-cover'/>     
                    </div>
                )}
                <div className=''>
                    <h1 className='text-6xl text-center mb-10'>{post?.title}</h1>
                    {post?.content && (
                        <div className='text-xl px-25' dangerouslySetInnerHTML={{ __html: post?.content }} />
                    )}
                </div>
            </div>          
        </div>
    )
}