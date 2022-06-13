import { Flex } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Item } from "./Item";

export function Carousel() {
  return (
    <Flex
      px={["0", "0", "4"]}
      my={["10", "10", "20"]}
      maxW="1160px"
      w="100%"
      mx="auto"
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Item
            to="/continents/asia"
            backgroundImageURL="/continents/slides/asia-slide.png"
            title="Ásia"
            description="O maior continente do mundo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            to="/continents/europa"
            backgroundImageURL="/continents/slides/europa-slide.png"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
