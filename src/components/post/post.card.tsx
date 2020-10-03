import { Box, Divider, Heading, Image, Link } from "@chakra-ui/core";
import { PostPreview } from "../../types/types";
import NextLink from "next/link";
interface PostCardProps {
    post: PostPreview;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <NextLink href="/post/[slug]" as={`/post/${post.slug}`} passHref>
            <Link>
                <Box
                    maxW="sm"
                    borderWidth="1px"
                    bg="white"
                    overflow="hidden"
                    w="full"
                    h="full"
                    rounded="md"
                >
                    <Image
                        src={post.featuredImage.sourceUrl}
                        h="250px"
                        w="full"
                        objectFit="cover"
                    />
                    <Divider />
                    <Heading size="xl" padding="2" textAlign="center">
                        {post.title}
                    </Heading>
                </Box>
            </Link>
        </NextLink>
    );
};
