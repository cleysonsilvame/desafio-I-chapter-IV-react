import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface TravelType {
  src: string;
  alt: string;
  description: string;
}

export function TravelType({ src, alt, description }: TravelType) {
  return (
    <Flex flexDir="column" align="center" gap="2rem">
      <Image src={src} alt={alt} w="85px" />
      <Text as="span" fontWeight={600} fontSize="2xl">
        {description}
      </Text>
    </Flex>
  );
}
