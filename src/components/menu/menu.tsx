import { Box, Flex, Grid, Link, Stack } from "@chakra-ui/core";
import CUSTOMIZE from "../../customize.json";

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
                <Box>logo</Box>
                <Box>
                    <Stack isInline>
                        {categories.map((category) => (
                            <Link key={category.id}>{category.name}</Link>
                        ))}
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};
