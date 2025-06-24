const PostTags = `
query getPostTags {
 tags {
    edges {
      node {
        name
        slug
        posts {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    }
  }
}`;

export default PostTags;