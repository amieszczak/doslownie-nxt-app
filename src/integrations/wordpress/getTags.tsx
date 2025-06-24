import fetchAPI from "./callout";
import PostTags from "./graph-ql-queries/post-tags";
import { PostTagsQl } from "./graph-ql-types/post-tags";
import { PostTagsType } from "@/app/types/post-tags";

const getTags = async (first = 1000): Promise<PostTagsType[]> => {
    const response: PostTagsQl = await fetchAPI(PostTags, { first });
    const tags = response?.tags?.edges || [];

    return tags.map((edge): PostTagsType => {
        const node = edge.node;

        return {
            name: node.name,
            slug: node.slug,
            posts: node.posts.edges.map(post => ({
                title: post.node.title, 
                slug: post.node.slug,
            }))
        }
    })
}

export default getTags;