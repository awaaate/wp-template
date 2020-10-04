import { Box, Heading, Image } from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "../../components/layouts/container";
import { Menu } from "../../components/menu/menu";
import {
    getAllCategories,
    getAllPostsWithSlugs,
    getPostBySlug,
} from "../../lib/api";
import { createStaticPaths } from "../../lib/util.functions";
import { CategoryType, PostType } from "../../types/types";

interface PageProps {
    post: PostType;
    categories: CategoryType[];
}
function PostPage({ post, categories }: PageProps) {
    return (
        <div>
            <Menu categories={categories} />
            <Container>
                <Box>
                    <Box
                        position="relative"
                        minH="150px"
                        backgroundImage={`url(${post.featuredImage.sourceUrl})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="white"
                        p={2}
                    >
                        <Heading textAlign="center" zIndex={1}>
                            {post.title}
                        </Heading>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                background: "black",
                                width: "100%",
                                height: "100%",
                                zIndex: 0,
                                opacity: 0.4,
                            }}
                        />
                    </Box>
                    <Box
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
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // ...
    const slugs = await getAllPostsWithSlugs();
    return {
        paths: createStaticPaths(slugs.map((a) => ({ slug: a.slug }))),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    const post = await getPostBySlug(context.params.slug as string);
    const categories = await getAllCategories();
    return {
        props: {
            post,
            categories,
        },
    };
};
export default PostPage;
