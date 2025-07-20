const categoryBySlug = `
query CategoryBySlug($id: ID!) {
    category(id: $id, idType: SLUG) {
    name
    slug
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
}`;

export default categoryBySlug;