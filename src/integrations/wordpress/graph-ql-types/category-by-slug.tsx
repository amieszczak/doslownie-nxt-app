import { AllPostsQl } from "./all-posts";

export type CategoryBySlugQl = {
    name: string;
    slug: string;
    posts: {
        edges: AllPostsQl[];
    };
};