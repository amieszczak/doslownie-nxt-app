import { AllPostsType } from "./all-posts";

export type CategoryBySlugType = {
    name: string;
    slug: string;
    posts: AllPostsType[];
}