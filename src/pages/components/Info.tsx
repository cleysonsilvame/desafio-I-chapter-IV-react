import { Text } from "@chakra-ui/react";
import React from "react";

interface InfoProps {
  value: number;
  description: string;
}

export function Info({ value, description }: InfoProps) {
  return (
    <Text
      display="flex"
      flexDir="column"
      fontWeight={[400, 400, 600]}
      fontSize={["18", "18", "24"]}
      align={["start", "start", "center"]}
    >
      <Text as="span" color="yellow.400" fontSize={["24", "24", "5xl"]} fontWeight={600}>
        {value}
      </Text>
      {description}
    </Text>
  );
}
