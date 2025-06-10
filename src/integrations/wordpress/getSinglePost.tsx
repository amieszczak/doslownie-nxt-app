import fetchAPI from './callout';
import singlePost from './graph-ql-queries/single-post';

import { SinglePostType } from '@/app/types/single-post';
import { SinglePostGl } from './graph-ql-types/single-post';


const getSinglePost = async (slug: string): Promise< SinglePostType | null >  => {
    const response = await fetchAPI(singlePost, { id: slug });
    const post: SinglePostGl = response?.post;

    return {
        id: post?.id,
        title: post?.title,
        databaseId: post?.databaseId,
        content: post?.content,
        date: post?.date,
        modified: post?.modified,
        excerpt: post?.excerpt,
        slug: post?.slug,
        featuredImage: post?.featuredImage?.node?.link,
        categoriesName: post?.categories?.nodes?.name,
        categoriesSlug: post?.categories?.nodes?.slug,
        categoriesDatabaseId: post?.categories?.nodes?.databaseId,
        authorName: post?.author?.node?.name,
        authorSlug: post?.author?.node?.slug,
        authorDescription: post?.author?.node?.description,

    }
};

export default getSinglePost;