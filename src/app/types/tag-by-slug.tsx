import { AllPostsType } from "./all-posts";

export type TagBySlugType = {
    name: string;
    slug: string;
    posts: AllPostsType[];
}