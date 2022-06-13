import {
  Box,
  Flex,
  Heading,
  HStack,
  Grid,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Banner } from "../components/Banner";
import { CityCard } from "../components/CityCard";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import continents from "./continents.json";

export default function Continent() {
  const { query } = useRouter();

  const continent = continents.find(c => c.slug === query.slug);

  if (!continent) {
    return null;
  }

  return (
    <>
      <Header backTo="/" />
      <Banner imageURL={continent.bannerImage}>
        <Flex
          h="100%"
          align={["center", "center", "end"]}
          justify={["center", "center", "start"]}
          p="4"
          maxW="1160px"
          w="100%"
          mx="auto"
        >
          <Heading color="gray.100" fontWeight={600} size={["xl", "xl", "3xl"]}>
            {continent.name}
          </Heading>
        </Flex>
      </Banner>

      <Box as="main" p="4" maxW="1160px" w="100%" mx="auto" mb="20">
        <Grid
          gap={["1rem", "1rem", "4rem"]}
          gridTemplateColumns={["1fr", "1fr", "1.4fr 1fr"]}
          my={["0", "0", "20"]}
          mb={["8", "8", "0"]}
        >
          <Text fontSize={["sm", "sm", "24"]} textAlign="justify">
            {continent.description}
          </Text>
          <HStack justify={["space-between", "space-around", "space-between"]}>
            <Info value={continent.numberOfCountries} description="países" />
            <Info value={continent.numberOfLanguages} description="linguas" />
            <Info
              value={continent.amountMostPopularCities}
              description="cidades +100"
            />
          </HStack>
        </Grid>

        <Heading
          as="h1"
          fontWeight={500}
          fontSize={["2xl", "4xl"]}
          color="gray.600"
        >
          Cidades +100
        </Heading>

        <SimpleGrid
          minChildWidth="256px"
          spacing={["6", "6", "8"]}
          mt={["4", "4", "10"]}
        >
          {continent.mostPopularCities.map(city => (
            <CityCard key={city.cityName} city={city} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
