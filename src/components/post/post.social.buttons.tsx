import { Grid, Flex, Button, Box, IconButton } from "@chakra-ui/core";
import CUSTOMIZE from "../../customize.json";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import {
    FacebookIcon,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
import { ElementType } from "react";

export interface PostSocialButtonsProps {
    url: string;
    image: string;
}

const SocialIconButton: React.FC<{
    label: string;
    color: string;
}> = ({ children, color, label }) => (
    <Flex
        border="2px solid"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        w="full"
        aria-label={label}
        p={1}
        boxShadow={`3px 3px 0 1px ${color}`}
    >
        {children}
    </Flex>
);
export const PostSocialButtons: React.FC<PostSocialButtonsProps> = ({
    url,
    image,
}) => {
    return (
        <Box
            position="fixed"
            bottom="0"
            justifyContent="center"
            w="full"
            bg="white"
            p="2"
            border="2px solid"
        >
            <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                gap="2"
                color="white"
                w="full"
                maxW={CUSTOMIZE.container_size}
                m="auto"
            >
                <FacebookShareButton url={url}>
                    <SocialIconButton label="share facebook" color="#38559c">
                        <FacebookIcon round size={30} /> Compartir
                    </SocialIconButton>
                </FacebookShareButton>
                <PinterestShareButton url={url} media={image}>
                    <SocialIconButton label="share Pinterest" color="#cb1f20">
                        <PinterestIcon round size={30} /> Guardar
                    </SocialIconButton>
                </PinterestShareButton>
                <TwitterShareButton url={url} title="">
                    <SocialIconButton label="share Twitter" color="#2faaf3">
                        <TwitterIcon round size={30} /> Tweetear
                    </SocialIconButton>
                </TwitterShareButton>
            </Grid>
        </Box>
    );
};
