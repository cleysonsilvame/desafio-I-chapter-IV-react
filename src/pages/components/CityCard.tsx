import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CityCardProps {
  city: {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
  };
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Box key={city.cityName} w="256px" borderRadius="4" overflow="hidden">
      <Image
        src={city.cityImage}
        alt={`${city.cityName}, ${city.countryName}`}
        w="100%"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="2px"
        borderColor="yellow.100"
        borderTop="0"
        borderBottomRadius="4"
        bg="white"
      >
        <Stack spacing={3}>
          <Heading as="h3" fontSize="xl" fontWeight="600" >
            {city.cityName}
          </Heading>
          <Text color="gray.500" fontSize="md" fontWeight="500">
            {city.countryName}
          </Text>
        </Stack>

        <Box fontSize="4xl">
          <ReactCountryFlag
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
            countryCode={city.countryCode}
            svg
          />
        </Box>
      </Flex>
    </Box>
  );
}
