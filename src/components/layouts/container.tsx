import CUSTOMIZE from "../../customize.json";
import { Box } from "@chakra-ui/core";

interface ContainerProps {
    size?: number;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    size = CUSTOMIZE.container_size,
}) => {
    return (
        <Box maxW={size} w="100%" margin="auto">
            {children}
        </Box>
    );
};
