import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";

function Prodctus() {
  const [stat, setStet] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setStet(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Box>
        <Box display={"flex"} justifyContent={"center"} mb={10}>
          <Text>НОВИНКИ</Text>
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
        >
          {stat.slice(0, 4).map((rasmlar) => (
            <GridItem
              p={"10px"}
              mb={"10px"}
              key={rasmlar.id}
              w={"100%"}
              borderRadius={10}
            >
              <Image borderRadius={10} src={rasmlar.url} />
              <Text textAlign={"center"} fontSize={{ base: "8px",xl:"16px" }}>
                {rasmlar.title}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Prodctus;
