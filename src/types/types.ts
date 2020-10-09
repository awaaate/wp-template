import { type } from "os";
import { Category, MediaItem, Post, PostTypeSeo } from "../generated/graphql";
import { getAllPosts, getPostBySlug } from "../lib/api";

export type CategoryWithNameAndSlug = Array<{ name: string; slug: string }>;
export interface PostType {
    content: string;
    excerpt: string;
    title: string;
    slug: string;
    categories: Array<{ name: string; slug: string }>;
    featuredImage: {
        sourceUrl: string;
        id: string;
    };
    seo: {
        canonical: string;
        metaDesc: string;
        title: string;
    };
}
export type PostPreview = {
    featuredImage: {
        sourceUrl: string;
    };
    slug?: string;
    title?: string;
    id: string;
    excerpt?: string;
};

export type CategoryType = {
    slug: string;
    posts: PostPreview[];
};
export type SimpleCategoryWithId = {
    id: string;
    slug: string;
    name: string;
};
