import getSinglePost from "@/integrations/wordpress/getSinglePost";
import classes from '../../../page.module.css';
import Image from "next/image";

export default async function Post({params}:{params: Promise<{ slug : string }>}) {

    const slug: string = (await params).slug;
    const post = await getSinglePost(slug);

    return(
        <div>
            <div className={classes.subpageTopMargin}></div>
            <h1>{post?.title}</h1>
            {post?.featuredImage && (
                <Image src={post?.featuredImage} width={100} height={100} alt='zdjecie tytulowe'/>            
            )}
        </div>
    )
}