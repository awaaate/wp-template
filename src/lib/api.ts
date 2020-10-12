import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";
import {
    CategoryWithNameAndSlug,
    PostType,
    CategoryType,
    SimpleCategoryWithId,
} from "../types/types";

const client = new GraphQLClient("https://api.eliminar-cuenta.com/graphql");
const sdk = getSdk(client);

export async function getAllCategories(): Promise<SimpleCategoryWithId[]> {
    const response = await sdk.Categories();
    return response.categories.edges.map(({ node }) => ({
        slug: node.slug,
        id: node.id,
        name: node.name,
    }));
}

export async function getAllPosts() {
    const response = await sdk.Posts();
    return response.posts.edges.map((a) => {
        const post = a.node;
        return { ...post, featuredImage: post.featuredImage.node };
    });
}
export async function getAllPostsWithSlugs() {
    const response = await sdk.PostsWithSlug();

    return response.posts.edges.map((a) => a.node);
}
export async function getCategoryById(id: string) {
    const response = await sdk.CategoryById({ id });
    const rawCategory = response.category;
    let category: CategoryType = {
        slug: rawCategory.slug,
        posts: rawCategory.posts.edges.map(({ node }) => ({
            excerpt: node.excerpt,
            featuredImage: {
                sourceUrl: node.featuredImage.node.sourceUrl,
            },
            id: node.id,
            title: node.title,
            slug: node.slug,
        })),
    };

    return category;
}
export async function getPostBySlug(slug: string): Promise<PostType> {
    const response = await sdk.PostBySlug({ slug });
    const post = response.postBy;
    return {
        content: post.content,
        excerpt: post.excerpt,
        title: post.title,
        slug: post.slug,
        categories: post.categories.edges.map(
            (cat) => cat.node
        ) as CategoryWithNameAndSlug,
        seo: {
            canonical: post.seo.canonical,
            title: post.seo.title,
            metaDesc: post.seo.metaDesc,
        },

        featuredImage: {
            id: post.featuredImage.node.id,
            sourceUrl: post.featuredImage.node.sourceUrl,
        },
    };
}
