import {
  Box,
  Grid,
  Heading, Image, Stack
} from "@chakra-ui/react";

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
      backgroundPosition={["0 -1rem","0 -5rem", "0 -15rem", "0 -25rem"]}
      height="335px"
    >
      {children}
    </Box>
  );
}
