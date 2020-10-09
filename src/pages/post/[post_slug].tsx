import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import NextLink from "next/link";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import {
    FacebookShareButton,
    PinterestShareButton,
    TwitterShareButton,
} from "react-share";
import { Container } from "../../components/layouts/container";
import { Menu } from "../../components/menu/menu";
import {
    getAllCategories,
    getAllPostsWithSlugs,
    getPostBySlug,
} from "../../lib/api";
import { createStaticPaths, parseToLink } from "../../lib/util.functions";
import { PostType, SimpleCategoryWithId } from "../../types/types";
interface PageProps {
    post: PostType;
    categories: SimpleCategoryWithId[];
}
function PostPage({ post, categories }: PageProps) {
    return (
        <div>
            <Menu categories={categories} />
            <Container>
                <Box borderRightWidth="5px">
                    <Flex
                        color="white"
                        alignItems="center"
                        flexWrap="wrap"
                        p={2}
                    >
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
                        <Box
                            borderWidth="1px"
                            my="2"
                            px="2"
                            py="4"
                            rounded="md"
                        >
                            <Flex>
                                {post.categories.map((cat) => (
                                    <Text color="blue.500" fontWeight="600">
                                        <NextLink
                                            href={"/category/" + cat.slug}
                                            passHref
                                        >
                                            <a>{cat.name}</a>
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
                                        post.excerpt
                                            .split(" ")
                                            .slice(0, 60)
                                            .join(" ") + "...",
                                }}
                            ></Box>

                            <Button>
                                <Link href={"#" + parseToLink(post.title)}>
                                    Leer más
                                </Link>
                            </Button>
                            <Text>Compartir</Text>
                            <Grid gridTemplateColumns="repeat(4, 1fr)">
                                <FacebookShareButton
                                    quote={post.title}
                                    hashtag="a"
                                    url={window.location.href}
                                >
                                    <Flex
                                        rounded="md"
                                        bg="gray.200"
                                        w="50px"
                                        h="50px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <FaFacebook size="30" />
                                    </Flex>
                                </FacebookShareButton>
                                <PinterestShareButton
                                    url={window.location.href}
                                    media={post.featuredImage.sourceUrl}
                                >
                                    <Flex
                                        rounded="md"
                                        bg="gray.200"
                                        w="50px"
                                        h="50px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <FaPinterest size="30" />
                                    </Flex>
                                </PinterestShareButton>
                                <TwitterShareButton
                                    url={window.location.href}
                                    title=""
                                >
                                    <Flex
                                        rounded="md"
                                        bg="gray.200"
                                        w="50px"
                                        h="50px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <FaTwitter size="30" />
                                    </Flex>
                                </TwitterShareButton>
                            </Grid>
                        </Box>
                    </Flex>
                    <Box
                        id={parseToLink(post.title)}
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
        paths: createStaticPaths(slugs.map((a) => ({ post_slug: a.slug }))),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    const post = await getPostBySlug(context.params.post_slug as string);
    const categories = await getAllCategories();
    return {
        props: {
            post,
            categories,
        },
    };
};
export default PostPage;
