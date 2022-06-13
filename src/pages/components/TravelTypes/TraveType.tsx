import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

interface TravelType {
  src: string;
  alt: string;
  description: string;
}

export function TravelType({ src, alt, description }: TravelType) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isWideVersion) {
    return (
      <Flex align="center" gap="1rem">
        <Icon as={FaCircle} fontSize="xx-small" color="yellow.500" />
        <Text as="span" fontWeight={500} fontSize="xl">
          {description}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" align="center" gap="2rem">
      <Image src={src} alt={alt} w="85px" />
      <Text as="span" fontWeight={600} fontSize="2xl">
        {description}
      </Text>
    </Flex>
  );
}
