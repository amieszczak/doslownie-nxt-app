export type AllPostsType = {
    content: string;
    date: string;
    excerpt: string;
    title: string;
    slug: string;
    featuredImage: string;
    author: string;
    categories: {
        name: string,
        slug: string,
    }[];
    tags: {
        name: string,
        slug: string,
    }[];
}