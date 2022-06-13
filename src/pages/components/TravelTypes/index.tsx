import { Flex } from "@chakra-ui/react";
import { TravelType } from "./TraveType";

const travelTypes = [
  {
    src: "/icons/cocktail.svg",
    alt: "Image de uma taça representando uma noite",
    description: "vida noturna",
  },
  {
    src: "/icons/surf.svg",
    alt: "Prancha representando a praia",
    description: "praia",
  },
  {
    src: "/icons/building.svg",
    alt: "Prédio representando um hotel",
    description: "moderno",
  },
  {
    src: "/icons/museum.svg",
    alt: "Museu",
    description: "clássico",
  },
  {
    src: "/icons/earth.svg",
    alt: "Planeta terra",
    description: "e mais...",
  },
];

export function TravelTypes() {
  const withBackButton = true;

  return (
    <Flex
      as="section"
      px="4"
      my="20"
      maxW="1160px"
      w="100%"
      mx="auto"
      justify="space-between"
    >
      {travelTypes.map(travelType => (
        <TravelType key={travelType.src} {...travelType} />
      ))}
    </Flex>
  );
}
