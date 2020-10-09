import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
    Link,
    PseudoBox,
    Stack,
} from "@chakra-ui/core";
import { FaBars, FaHamburger } from "react-icons/fa";
import NextLink from "next/link";
import React, { useState } from "react";
import CUSTOMIZE from "../../customize.json";
import { SimpleCategoryWithId } from "../../types/types";

interface MenuProps {
    categories: SimpleCategoryWithId[];
}

export const Menu: React.FC<MenuProps> = ({ categories }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <Box
            maxH="100px"
            w="full"
            padding="20px"
            bg="white"
            color="white"
            borderBottomWidth="2px"
            mb="20px"
            position="fixed"
            top="0"
            left="0"
        >
            <Box
                h="5px"
                position="absolute"
                top="0"
                left="0"
                w="full"
                className="bg-primary"
            />
            <Flex
                margin="auto"
                maxW={CUSTOMIZE.container_size}
                w="full"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Link display="block">
                            <Image
                                src="/logo.png"
                                maxW="300px"
                                w="100%"
                                h="auto"
                            />
                        </Link>
                    </NextLink>
                </Box>
                <Button onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    <FaBars />
                </Button>
                <Drawer
                    isOpen={menuIsOpen}
                    placement="right"
                    onClose={() => setMenuIsOpen(false)}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
                            <Stack>
                                {categories.map((category) => (
                                    <PseudoBox
                                        key={category.id}
                                        p={1}
                                        color="black"
                                        cursor="pointer"
                                    >
                                        <NextLink
                                            href={"/category/" + category.slug}
                                            passHref
                                        >
                                            <Link>{category.name}</Link>
                                        </NextLink>
                                    </PseudoBox>
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
};
