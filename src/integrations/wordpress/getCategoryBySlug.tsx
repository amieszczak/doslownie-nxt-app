import fetchAPI from "./callout";
import categoryBySlug from "./graph-ql-queries/category-by-slug";
import { CategoryBySlugQl } from "./graph-ql-types/category-by-slug";
import { CategoryBySlugType } from "@/app/types/category-by-slug";

const getCategoriesBySlug = async (slug: string): Promise<CategoryBySlugType | null> => {
    const response = await fetchAPI(categoryBySlug, {id: slug});
    const category: CategoryBySlugQl = response.category;

    if (!category) {
        return null;
    }

    return {
        name: category.name,
        slug: category.slug,
        posts: category?.posts?.edges?.map(post => (
            {
            content: post?.node?.content,
            date: post?.node?.date,
            excerpt: post?.node?.excerpt,
            title: post?.node?.title,
            slug: post?.node?.slug,    
            featuredImage: post?.node?.featuredImage?.node?.sourceUrl,
            author: post?.node?.author?.node?.name || 'no author',
            categories: post?.node?.categories?.edges.map(category => ({
                name: category.node.name,
                slug: category.node.slug,
            })),
            tags: post?.node?.tags?.edges.map(category => ({
                name: category.node.name,
                slug: category.node.slug,
            })),
        }))
    }
}

export default getCategoriesBySlug;