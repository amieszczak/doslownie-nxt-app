import fetchAPI from './callout';
import allPosts from './graph-ql-queries/all-posts';


const getAllPosts = async (first = 1000) => {
    const response = await fetchAPI(allPosts, { first });
    const posts = response?.posts?.edges;

    return posts;
};

export default getAllPosts;