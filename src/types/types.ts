import { type } from "os";
import { Category, MediaItem, Post, PostTypeSeo } from "../generated/graphql";
import { getAllPosts, getPostBySlug } from "../lib/api";
export interface PostType {
    content: string;
    excerpt: string;
    title: string;
    slug: string;
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
        __typename?: "MediaItem";
    } & Pick<MediaItem, "id" | "sourceUrl">;
    __typename?: "Post";
    slug?: string;
    title?: string;
    id: string;
    excerpt?: string;
};

export type CategoryType = Pick<Category, "id" | "slug" | "name">;
