import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPieChart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex gap={5}>
          <Text>О компании </Text>
          <Text display={{ base: "none", "2xl": "block" }}>
            {" "}
            Оплата и доставка{" "}
          </Text>
          <Text display={{ base: "none", "2xl": "block" }}>
            Возврат и обмен{" "}
          </Text>
          <Text display={{ base: "none", "2xl": "block" }}>
            Бонусная программа{" "}
          </Text>
          <Text> Контакты</Text>
        </Flex>
        <Box display={{ base: "none", "2xl": "flex" }}>
          <Text>ОТЗЫВЫ(359)</Text>
        </Box>
        <Box
          display={{ base: "none", "2xl": "flex" }}
          alignItems={"center"}
          gap={5}
        >
          <FiPieChart />
          <Text>Работаем ежедневно: 24/7</Text>
          <Text>RU / UA</Text>
        </Box>

        <>
          <Button
            variant={"unstyled"}
            display={{ base: "block", "2xl": "none" }}
            colorScheme="teal"
            onClick={onOpen}
          >
            <CiMenuBurger size={25} />{" "}
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Box>
                  <Grid
                    templateColumns={{
                      base: "auto",
                      sm: "auto auto",
                      md: "auto auto auto",
                      lg: "auto auto auto auto",
                      xl: "auto auto auto auto auto",
                    }}
                  >
                    <Box>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                    </Box>
                    <Box>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                    </Box>
                    <Box>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                    </Box>
                    <Box>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                    </Box>
                    <Box>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                      <GridItem>logo</GridItem>
                    </Box>
                  </Grid>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </div>
  );
}

export default Header;
