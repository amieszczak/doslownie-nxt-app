const postCategories = `
query getPostCategories {
  categories {
    edges {
      node {
        name
        slug
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