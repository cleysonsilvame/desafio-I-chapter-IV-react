import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

interface HeaderProps {
  backTo?: string;
}

export function Header({ backTo }: HeaderProps) {
  return (
    <Box as="header" width="100%" p="3">
      <Flex maxW="1160px" w="100%" mx="auto">
        {backTo && (
          <Link href={backTo} passHref>
            <IconButton
              as="a"
              aria-label="Voltar"
              icon={<IoChevronBackOutline />}
              size={["md", "lg"]}
              mr="-6"
            />
          </Link>
        )}
        <Flex flex={1} justify="center" >
          <Image src="/logo.svg" alt="Logo World Trip" w={["81px", "120px", "fit-content"]} />
        </Flex>
      </Flex>
    </Box>
  );
}
