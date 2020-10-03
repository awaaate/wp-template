import { Grid } from "@chakra-ui/core";
import { PostPreview } from "../../types/types";
import { PostCard } from "./post.card";

interface PostGridProps {
    posts: PostPreview[];
    cols?: 1 | 2 | 3;
}

export const PostGrid: React.FC<PostGridProps> = ({ posts, cols = 3 }) => {
    return (
        <Grid
            gridTemplateColumns={`repeat(auto-fill, minmax(300px, 1fr))`}
            gap="2"
            
        >
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </Grid>
    );
};
