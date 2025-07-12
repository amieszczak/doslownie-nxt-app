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
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;

export default allPosts;