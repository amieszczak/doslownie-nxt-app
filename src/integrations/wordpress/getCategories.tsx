import fetchAPI from "./callout";
import postCategories from "./graph-ql-queries/post-categories";
import { PostCategoriesQl } from "./graph-ql-types/post-categories";
import { PostCategoriesType } from "@/app/types/post-categories";

const getCategories = async (first = 1000): Promise<PostCategoriesType[]> => {
  const response: PostCategoriesQl = await fetchAPI(postCategories, { first });
  const categories = response?.categories?.edges || [];

  return categories.map(edge => {
    const node = edge.node;

    return {
      name: node.name,
      slug: node.slug,
      posts: node.posts.nodes.map(post => ({
        title: post.title,
        slug: post.slug,
        link: post.link,
      }))
    };
  });
};

export default getCategories;