export type AllPostsType = {
    content: string;
    date: string;
    excerpt: string;
    title: string;
    slug: string;
    featuredImage: {
      node: {
        id: string;
        sourceUrl: string;
      }
    } 
    author: {
      node: {
        name: string;        
      }
    }
}