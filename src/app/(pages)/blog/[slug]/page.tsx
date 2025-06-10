import getSinglePost from "@/integrations/wordpress/getSinglePost";
import classes from '../../../page.module.css';

export default async function Post({params}:{params: Promise<{ slug : string }>}) {

    const slug: string = (await params).slug;
    const post = await getSinglePost(slug);

    return(
        <div>
            <div className={classes.subpageTopMargin}></div>
            <h1>{post?.title}</h1>
        </div>
    )
}