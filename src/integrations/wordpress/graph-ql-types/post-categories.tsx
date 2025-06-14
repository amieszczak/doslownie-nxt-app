export type PostCategoriesQl = {
    categories: {
      edges: {
        node: {
          name: string;
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