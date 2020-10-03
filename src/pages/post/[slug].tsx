import { Box, Image } from "@chakra-ui/core";
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
              <Box m="4">
              <Box>
                    <Image src={ post.featuredImage.sourceUrl} />
                </Box>
                <h1>{post.title} </h1>
                <Box
                    bg="white"
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
