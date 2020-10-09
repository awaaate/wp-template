import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/core";
import { PostPreview } from "../../types/types";
import NextLink from "next/link";
import { createExcerpt } from "../../lib/util.functions";
interface PostCardProps {
    post: PostPreview;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <NextLink href={`/post/${post.slug}`} passHref>
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

                    <Heading size="xl" padding="2" >
                        {post.title}
                    </Heading>
                    <Text
                    p="2"
                        dangerouslySetInnerHTML={createExcerpt(post.excerpt, 10)}
                    ></Text>
                </Box>
            </Link>
        </NextLink>
    );
};
