import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";

function CenterProdctus() {
  const [stete, setStete] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((result) => setStete(result.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={5}
          justifyContent={"center"}
        >
          <Box>
            {" "}
            <Text fontSize={{ base: "8px", xl: "16px" }}>ХИТЫ ПРОДАЖ</Text>
          </Box>
          <Box>
            <Text fontSize={{ base: "8px", xl: "18px" }} color={"red"}>
              {" "}
              Все хиты продаж
            </Text>
          </Box>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={"10px"}
          w={"100%"}
          my={"10px"}
        >
          {stete.slice(0, 4).map((products) => (
            <GridItem p={"10px"} mb={"10px"} key={products.id} w={"100%"}>
              <Image borderRadius={"10px"} src={products.url} />
              <Text fontSize={{ base: "8px", xl: "16px" }} textAlign={"center"}>
                {products.title}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default CenterProdctus;
