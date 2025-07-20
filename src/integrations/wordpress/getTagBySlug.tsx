import fetchAPI from "./callout";
import tagBySlug from "./graph-ql-queries/tag-by-slug";
import { TagBySlugQl } from "./graph-ql-types/tag-by-slug";
import { TagBySlugType } from "@/app/types/tag-by-slug";

const getTagBySlug = async (slug: string): Promise<TagBySlugType | null> => {
    const response = await fetchAPI(tagBySlug, {id: slug});
    const tag: TagBySlugQl = response.tag;

    if (!tag) {
        return null;
    }

    return {
        name: tag.name,
        slug: tag.slug,
        posts: tag?.posts?.edges?.map(post => (
            {
            content: post?.node?.content,
            date: post?.node?.date,
            excerpt: post?.node?.excerpt,
            title: post?.node?.title,
            slug: post?.node?.slug,    
            featuredImage: post?.node?.featuredImage?.node?.sourceUrl,
            author: post?.node?.author?.node?.name || 'no author',
            categories: post?.node?.categories?.edges.map(tag => ({
                name: tag.node.name,
                slug: tag.node.slug,
            })),
            tags: post?.node?.tags?.edges.map(tag => ({
                name: tag.node.name,
                slug: tag.node.slug,
            })),
        }))
    }
}

export default getTagBySlug;