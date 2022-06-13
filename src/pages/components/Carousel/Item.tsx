import { Box, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface ItemProps {
  to: string;
  backgroundImageURL: string;
  title: string;
  description: string;
}

export function Item({
  to,
  backgroundImageURL,
  title,
  description,
}: ItemProps) {
  return (
    <Link href={to} passHref>
      <ChakraLink
        display="flex"
        backgroundImage={`url("${backgroundImageURL}")`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="450px"
        alignItems="center"
        justifyContent="center"
        _hover={{
          underline: "none",
        }}
      >
        <Box textAlign="center">
          <Heading as="h4" color="gray.100" size="2xl">
            {title}
          </Heading>
          <Heading as="h5" color="gray.100" fontSize="24" mt="1rem">
            {description}
          </Heading>
        </Box>
      </ChakraLink>
    </Link>
  );
}
