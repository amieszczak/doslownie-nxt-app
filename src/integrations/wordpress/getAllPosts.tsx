import fetchAPI from './callout';
import allPosts from './graph-ql-queries/all-posts';
import { AllPostsQl } from './graph-ql-types/all-posts';
import { AllPostsType } from '@/app/types/all-posts';

const getAllPosts = async (first = 1000): Promise<AllPostsType[]> => {
    const response = await fetchAPI(allPosts, { first });
    const posts:AllPostsQl[] = response?.posts?.edges;

    return posts.map((post: AllPostsQl) => ({        
        content: post?.node?.content,
        date: post?.node?.date,
        excerpt: post?.node?.excerpt,
        title: post?.node?.title,
        slug: post?.node?.slug,    
        featuredImage: post?.node?.featuredImage?.node?.sourceUrl,
        author: post?.node?.author?.node?.name || 'no author',
    }));
};

export default getAllPosts;