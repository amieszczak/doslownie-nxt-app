const allPosts = `
query NewQuery {
  posts {
    edges {
      node {
        content
        date
        excerpt
        title
        slug
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
}
`;

export default allPosts;