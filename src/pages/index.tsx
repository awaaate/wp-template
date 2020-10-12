import { Box, Grid, Link } from "@chakra-ui/core";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import NextLink from "next/link";
import { Container } from "../components/layouts/container";
import { Menu } from "../components/menu/menu";
import { PostGrid } from "../components/post/post.grid";
import { getAllCategories, getAllPosts } from "../lib/api";
import { PostPreview, SimpleCategoryWithId } from "../types/types";

interface PageProps {
    posts: PostPreview[];
    categories: SimpleCategoryWithId[];
}
function Index({ posts, categories }: PageProps) {
    return (
        <Box>
            <NextSeo
                title="▷ Eliminar una cuenta en 【2020 】 guías paso a paso"
                description="Si no sabes ✅ 【cómo eliminar una cuenta】de cualquier sitio, aquí te lo explicamos fe manera fácil con simples pasos para que puedas seguir."
            />
            <Head key="home-page">
                <title>
                    ▷ Eliminar una cuenta en 【2020 】 guías paso a paso
                </title>
            </Head>
            <Menu categories={categories}></Menu>
            <Container>
                <Grid
                    gridTemplateColumns={["repeat(2, 1fr)", "repeat(6, 1fr)"]}
                    gap="2"
                    py="2"
                    mx={4}
                >
                    {categories.slice(0, 6).map((cat) => (
                        <Box
                            key={cat.id}
                            border="2px solid"
                            p={2}
                            textAlign="center"
                            boxShadow="3px -3px 0 1px #3C3C3C"
                        >
                            <NextLink href={`/category/${cat.slug}`}>
                                <Link>{cat.name}</Link>
                            </NextLink>
                        </Box>
                    ))}
                </Grid>
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
