export type PostCategoriesType = {
    name: string;
    posts: {
      title: string;
      slug: string;
      link: string;
    }[];
  };