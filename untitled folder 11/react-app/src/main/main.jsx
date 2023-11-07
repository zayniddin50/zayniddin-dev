import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Img from "../assets/img/Group 217.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoTelegram, BiTable } from "react-icons/bi";
import { AiFillInstagram, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

function Main() {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={'20px'}
      >
        <Box display={"flex"} gap={"30px"} alignItems={"center"}>
          <Image src={Img} />
          <Box display={{ base: "none", xl: "block" }}>
            <Text>многоканальный телефон:</Text>
            <Flex align={"center"} gap={5}>
              <Text>(096) 454-45-50</Text>
              <AiOutlineWhatsApp />
              <BiLogoTelegram />
              <AiFillInstagram />
            </Flex>
            <Box>
              <Button>ОБРАТНЫЙ ЗВОНОК</Button>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <AiOutlineUser size={35} />
            <Text display={{ base: "none", xl: "block" }}>Мой кабинет</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <AiOutlineHeart size={35} />
            <Text display={{ base: "none", xl: "block" }}>Избранное </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <BiTable size={35} />
            <Text display={{ base: "none", xl: "block" }}>Корзина</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Main;
