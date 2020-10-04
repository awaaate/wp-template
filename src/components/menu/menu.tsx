import {
    Accordion,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Grid,
    Image,
    Link,
    PseudoBox,
    Stack,
} from "@chakra-ui/core";
import React from "react";
import CUSTOMIZE from "../../customize.json";
import NextLink from "next/link";
import { CategoryType } from "../../types/types";

interface MenuProps {
    categories: CategoryType[];
}

export const Menu: React.FC<MenuProps> = ({ categories }) => {
    return (
        <Box
            maxH="100px"
            w="full"
            padding="20px"
            bg="white"
            color="white"
            borderBottomWidth="2px"
            mb="20px"
        >
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
                            <Image src="/logo.png" maxW="300px" w="100%" h="auto" />
                        </Link>
                    </NextLink>
                </Box>
                <Accordion allowToggle w="100%" maxW="130px" border="0" defaultIndex={[-1]}>
                    <AccordionItem
                        className="bg-primary border-rgba"
                        border="2px solid"
                        borderBottomWidth="4px !important"
                        borderColor="rgba(0,0,0,0.2)"
                        position="relative"
                        zIndex={40}
                        rounded="sm"
                        padding="0"
                    >
                        <AccordionHeader>
                            <Box flex="1" textAlign="left">
                                Menu
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel
                            pb={4}
                            bg="white"
                            position="absolute"
                            shadow="sm"
                            rounded="md"
                        >
                            <Stack>
                                {categories.map((category) => (
                                    <PseudoBox
                                        key={category.id}
                                        p={1}
                                        color="black"
                                        cursor="pointer"
                                        _hover={{
                                            bg: "blue.100",
                                        }}
                                    >
                                        <a>{category.name}</a>
                                    </PseudoBox>
                                ))}
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Box>
    );
};
