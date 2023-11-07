import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Group1 from "../assets/img/Group (1).png";
import Group from "../assets/img/Group.png";
import Group228 from "../assets/img/Group 228.png";
import Group2 from "../assets/img/Group (2).png";

function Main1() {
  return (
    <div>
      <Grid
        my={10}
        templateColumns={{
          base: "auto",
          sm: "auto auto",
          lg: "auto auto auto",
          "2xl": "auto auto auto auto",
        }}
        gap={8}
      >
        <Flex alignItems={"center"} gap={3}>
          <Image src={Group1} />
          <Text fontSize={"10px"}>100% оригинальная продукция</Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Image src={Group} />
          <Text fontSize={"10px"}>Бесплатная доставка при заказе от 1000 </Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Image src={Group228} />
          <Text fontSize={"10px"}>
            Гарантированная скидка уже с первого заказа
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
          <Image src={Group2} />
          <Text fontSize={"10px"}>Отправка всеми службами доставки</Text>
        </Flex>
      </Grid>
    </div>
  );
}

export default Main1;
