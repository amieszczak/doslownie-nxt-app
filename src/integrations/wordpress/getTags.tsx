import fetchAPI from "./callout";
import PostTags from "./graph-ql-queries/post-tags";
import { PostTagsQl } from "./graph-ql-types/post-tags";
import { PostTagsType } from "@/app/types/post-tags";

const getTags = async (first = 1000): Promise<PostTagsType[]> => {
    const response: PostTagsQl = await fetchAPI(postCategories, { first });
    const tags = response?.tags?.edges || [];

    /* return tags.map(edge => ()) */
}