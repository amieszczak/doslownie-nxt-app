export type PostCategoriesType = {
    name: string;
    slug: string;
    posts: {
      title: string;
      slug: string;
      link: string;
    }[];
  };