import { Box } from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Container } from "../../components/layouts/container";
import { Menu } from "../../components/menu/menu";
import { PostGrid } from "../../components/post/post.grid";
import { getAllCategories, getCategoryById } from "../../lib/api";
import { createStaticPaths } from "../../lib/util.functions";
import { CategoryType, SimpleCategoryWithId } from "../../types/types";

interface PageProps {
    categories: SimpleCategoryWithId[];
    category: CategoryType;
}
function CategoryPage({ categories, category }: PageProps) {
    return (
        <Box>
            <Menu categories={categories}></Menu>
            <Container>
                <PostGrid posts={category.posts} />
            </Container>
        </Box>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllCategories();
    return {
        paths: createStaticPaths(slugs.map((a) => ({ category_slug: a.slug }))),
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const { category_slug } = context.params;

    const categories = await getAllCategories();

    const categoryId = categories.find((cat) => cat.slug === category_slug).id;
    const categoryData = await getCategoryById(categoryId);

    return {
        props: {
            categories: categories,
            category: categoryData,
        },
    };
};
export default CategoryPage;
