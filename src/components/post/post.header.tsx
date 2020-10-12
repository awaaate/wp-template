import { Flex, Box, Heading, Button, Link, Image, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import { parseToLink } from "../../lib/util.functions";
import { PostType } from "../../types/types";
import { LinkAdd } from "../ads/link";
import { PostSocialButtons } from "./post.social.buttons";

export interface PostHeaderProps {
    post: PostType;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
    return (
        <Flex color="white" alignItems="center" flexWrap="wrap" p={2}>
            <Box my="2" px="2" py="4" border="2px solid">
                <Flex>
                    {post.categories.map((cat) => (
                        <Text color="blue.500" fontWeight="600" key={cat.slug}>
                            <NextLink href={"/category/" + cat.slug} passHref>
                                <Link>{cat.name}</Link>
                            </NextLink>
                        </Text>
                    ))}
                </Flex>
                <Heading
                    zIndex={1}
                    as="h1"
                    size="2xl"
                    color="#3a3648"
                    wordBreak="break-word"
                >
                    {post.title}
                </Heading>

                <Box
                    lineHeight="30px"
                    color="gray.500"
                    fontWeight="500"
                    dangerouslySetInnerHTML={{
                        __html:
                            post.excerpt.split(" ").slice(0, 15).join(" ") +
                            "...",
                    }}
                ></Box>
                <LinkAdd />
                <Button
                    variant="outline"
                    variantColor="black"
                    borderWidth="2px"
                    rounded="0"
                >
                    <Link href={"#" + parseToLink(post.title)}>Leer más</Link>
                </Button>
            </Box>
            <figure>
                <Image
                    src={post.featuredImage.sourceUrl}
                    alt={post.seo.title}
                    objectFit="contain"
                    mr="1"
                    w="auto"
                    h="full"
                    maxH="300px"
                    rounded="md"
                    bg="gray.100"
                />
            </figure>
        </Flex>
    );
};
