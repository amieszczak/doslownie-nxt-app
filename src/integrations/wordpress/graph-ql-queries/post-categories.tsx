const postCategories = `
query getPostCategories {
  categories {
    edges {
      node {
        name
        posts {
          nodes {
            title
            slug
            link
          }
        }
      }
    }
  }
}`;

export default postCategories;