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
        <Flex h="100%" align="end" p="4" maxW="1160px" w="100%" mx="auto">
          <Heading color="gray.100" fontWeight={600} size="3xl">
            {continent.name}
          </Heading>
        </Flex>
      </Banner>

      <Box as="main" p="4" maxW="1160px" w="100%" mx="auto" mb="20">
        <Grid gap="4rem" gridTemplateColumns="1.4fr 1fr" my="20">
          <Text fontSize="24" textAlign="justify">
            {continent.description}
          </Text>
          <HStack justify="space-between">
            <Text
              display="flex"
              flexDir="column"
              fontWeight={600}
              fontSize="24"
              align="center"
            >
              <Text as="span" color="yellow.400" fontSize="5xl">
                {continent.numberOfCountries}
              </Text>
              países
            </Text>
            <Text
              display="flex"
              flexDir="column"
              fontWeight={600}
              fontSize="24"
              align="center"
            >
              <Text as="span" color="yellow.400" fontSize="5xl">
                {continent.numberOfLanguages}
              </Text>
              linguas
            </Text>
            <Text
              display="flex"
              flexDir="column"
              fontWeight={600}
              fontSize="24"
              align="center"
            >
              <Text as="span" color="yellow.400" fontSize="5xl">
                {continent.amountMostPopularCities}
              </Text>
              cidades +100
            </Text>
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

        <SimpleGrid minChildWidth='256px' spacing="8" mt="10">
          {continent.mostPopularCities.map(city => (
            <CityCard
              key={city.cityName}
              city={city}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
