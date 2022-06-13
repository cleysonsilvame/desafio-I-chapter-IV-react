import {
  Box,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
  useQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "./components/Banner";
import { Carousel } from "./components/Carousel";
import { Header } from "./components/Header";
import { TravelTypes } from "./components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <Header />
      <Banner imageURL="/banner.jpg">
        <Grid
          maxW="1160px"
          mx="auto"
          h="100%"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          alignItems="center"
          px="6"
        >
          <Stack spacing={["4", "6"]}>
            <Heading
              as="h1"
              fontWeight={500}
              color="gray.100"
              size={["md", "md", "xl"]}
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Heading
              as="h2"
              fontWeight={400}
              color="gray.100"
              size={["sm", "sm", "md"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Heading>
          </Stack>

          {isWideVersion && (
            <Image
              src="/airplane.svg"
              alt="Avião com cores amarela e brancas."
              alignSelf="end"
              justifySelf="center"
              mb="-8"
            />
          )}
        </Grid>
      </Banner>

      <TravelTypes />

      <Divider
        w={["60px", "60px", "90px"]}
        mx="auto"
        border="1px"
        borderColor="gray.700"
        opacity="1"
      />

      <Box my={["10", "10", "20"]} textAlign="center">
        <Heading as="h3" fontWeight={500} lineHeight="10" size={["md", "md", "xl"]}>
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Box>

      <Carousel />
    </>
  );
}
