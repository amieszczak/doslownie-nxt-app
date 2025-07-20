export type PostCategoriesQl = {
    categories: {
      edges: {
        node: {
          name: string;
          slug: string;
          posts: {
            nodes: {
              title: string;
              slug: string;
              link: string;
            }[];
          };
        };
      }[];
    };
  };