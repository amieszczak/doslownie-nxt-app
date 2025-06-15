const PostTags = `
query getPostTags {
  tags {
    edges {
      node {
        name
        slug
      }
    }
  }
}`;

export default PostTags;