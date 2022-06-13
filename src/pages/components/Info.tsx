import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import React from "react";

interface InfoProps {
  value: number;
  description: string;
}

export function Info({ value, description }: InfoProps) {
  return (
    <Flex
      flexDir="column"
      fontWeight={[400, 400, 600]}
      fontSize={["18", "18", "24"]}
      align={["start", "start", "center"]}
    >
      <Text
        as="span"
        color="yellow.400"
        fontSize={["24", "24", "5xl"]}
        fontWeight={600}
      >
        {value}
      </Text>
      <Text>
        {description}
        <Tooltip
          label="100 cidades mais visitadas do mundo"
          closeDelay={1000}
          hasArrow
          placement="top"
        >
          <span>
            <Icon
              cursor="pointer"
              as={RiInformationLine}
              ml="1"
              color="gray.400"
              w={["10px", "16px"]}
              h={["10px", "16px"]}
            />
          </span>
        </Tooltip>
      </Text>
    </Flex>
  );
}
