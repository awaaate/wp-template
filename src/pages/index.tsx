import { Box } from "@chakra-ui/core";
import { GetStaticProps } from "next";
import { Container } from "../components/layouts/container";
import { Menu } from "../components/menu/menu";
import { PostGrid } from "../components/post/post.grid";
import { getAllCategories, getAllPosts } from "../lib/api";
import { SimpleCategoryWithId, PostPreview } from "../types/types";

interface PageProps {
    posts: PostPreview[];
    categories: SimpleCategoryWithId[];
}
function Index({ posts, categories }: PageProps) {
    return (
        <Box>
            <Menu categories={categories}></Menu>
            <Container>
                <PostGrid posts={posts} />
            </Container>
        </Box>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    const posts = await getAllPosts();
    const categories = await getAllCategories();

    return {
        props: {
            posts,
            categories,
        },
    };
};
export default Index;
