'use client';
import getAllPosts from "@/integrations/wordpress/getAllPosts";
import { useState } from "react";

export default async function useLandingPageBlogData() {
    
    const posts = await getAllPosts();

    console.log('postsFromHook:', posts);

    return posts;

}