import { AllPostsQl } from "./all-posts";

export type TagBySlugQl = {
    name: string;
    slug: string;
    posts: {
        edges: AllPostsQl[];
    };
};