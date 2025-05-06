import fetchAPI from './callout';
import singlePost from './graph-ql-queries/single-post';


const getSinglePost = async (id: string) => {
    const response = await fetchAPI(singlePost, { id });
    const posts = response?.post;

    return posts;
};

export default getSinglePost;