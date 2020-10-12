import { Box, Grid } from "@chakra-ui/core";
import { PostPreview } from "../../types/types";
import { BannerAdd } from "../ads/banner";
import { PostCard } from "./post.card";

interface PostGridProps {
    posts: PostPreview[];
    cols?: 1 | 2 | 3;
}

export const PostGrid: React.FC<PostGridProps> = ({ posts, cols = 3 }) => {
    return (
        <Grid
            gridTemplateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
            gap="2"
            justifyItems="center"
        >
            {posts.map((post, i) => {
                return (i + 3) % 4 === 0 ? (
                    <Box w="full" h="full" bg="gray.100">
                        <BannerAdd />
                        add
                    </Box>
                ) : (
                    <PostCard post={post} key={post.id} />
                );
            })}
        </Grid>
    );
};
