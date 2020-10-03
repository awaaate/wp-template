import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";
import { PostType } from "../types/types";

const client = new GraphQLClient("https://eliminar-cuenta.com/graphql");
const sdk = getSdk(client);

export async function getAllCategories() {
    const response = await sdk.Categories();
    return response.data.categories.edges.map((a) => a.node);
}

export async function getAllPosts() {
    const response = await sdk.Posts();
    return response.data.posts.edges.map((a) => {
        const post = a.node;
        return { ...post, featuredImage: post.featuredImage.node };
    });
}
export async function getAllPostsWithSlugs() {
    const response = await sdk.PostsWithSlug();

    return response.data.posts.edges.map((a) => a.node);
}

export async function getPostBySlug(slug: string): Promise<PostType> {
    const response = await sdk.PostBySlug({ slug });
    const post = response.data.postBy;
    return {
        content: post.content,
        excerpt: post.excerpt,
        title: post.title,
        slug: post.slug,
        seo: {
            canonical: post.seo.canonical,
            title: post.seo.title,
            metaDesc: post.seo.metaDesc,
        },

        featuredImage: {
            id: post.featuredImage.node.id,
            slug: post.featuredImage.node.slug,
        },
    };
}

`
content
excerpt
title
slug
featuredImage {
node {
sourceUrl
}
}
seo {
    canonical
    metaDesc
    title
}
}
`;
