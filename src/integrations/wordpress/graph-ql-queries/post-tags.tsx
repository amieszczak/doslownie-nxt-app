const PostTags = `
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
  }`;

export default PostTags;