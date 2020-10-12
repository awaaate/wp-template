import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { NewsArticleJsonLd, NextSeo } from "next-seo";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { Container } from "../components/layouts/container";
import { Menu } from "../components/menu/menu";
import { PostHeader } from "../components/post/post.header";
import { PostSocialButtons } from "../components/post/post.social.buttons";
import {
    getAllCategories,
    getAllPostsWithSlugs,
    getPostBySlug,
} from "../lib/api";
import { createStaticPaths, parseToLink } from "../lib/util.functions";
import { PostType, SimpleCategoryWithId } from "../types/types";
interface PageProps {
    post: PostType;
    categories: SimpleCategoryWithId[];
}
function PostPage({ post, categories }: PageProps) {
    return (
        <Box position="relative">
            <Head>
                <title>{post.seo.title}</title>
            </Head>
            <PostSocialButtons
                image={post.featuredImage.sourceUrl}
                url={post.seo.canonical}
            />
            <NextSeo
                title={post.title}
                description={post.excerpt}
                canonical={post.seo.canonical}
                
                openGraph={{
                    type: "website",
                    url: post.seo.canonical,
                    title: post.seo.title,
                    description: post.seo.metaDesc,
                    images: [
                        {
                            url: post.featuredImage.sourceUrl,
                            width: 500,
                            height: 500,
                            alt: post.seo.title,
                        },
                    ],
                }}
            />
            <Menu categories={categories} />
            <Container>
                <Box borderRight="5px solid">
                    <PostHeader post={post} />
                    <Box
                        id={parseToLink(post.title)}
                        className="content"
                        p={4}
                        maxW="100%"
                        bg="white"
                        width="100%"
                        dangerouslySetInnerHTML={{
                            __html: post.content,
                        }}
                    ></Box>
                </Box>
            </Container>
        </Box>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // ...
    const slugs = await getAllPostsWithSlugs();
    return {
        paths: createStaticPaths(slugs.map((a) => ({ post_slug: a.slug }))),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    const post = await getPostBySlug(context.params.post_slug as string);
    const categories = await getAllCategories();
    return {
        props: {
            post,
            categories,
        },
    };
};
export default PostPage;
