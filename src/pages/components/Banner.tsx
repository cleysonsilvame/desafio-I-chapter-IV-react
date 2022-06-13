import { Box, Grid, Heading, Image, Stack } from "@chakra-ui/react";

interface BannerProps {
  imageURL: string;
  children: React.ReactNode;
}

export function Banner({ imageURL, children }: BannerProps) {
  return (
    <Box
      backgroundImage={`url(${imageURL})`}
      backgroundSize="cover"
      w="100%"
      backgroundPosition={["0 -6rem", "0 -10rem", "0 -15rem", "0 -25rem"]}
      height={["163px", "163px", "335px"]}
    >
      {children}
    </Box>
  );
}
