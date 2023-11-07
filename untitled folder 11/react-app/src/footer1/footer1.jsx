import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import Footer from "../assets/img/footer.png";

function Footer1() {
  return (
    <div>
      <Box bg={"black"} my={5}  w={"100%"} borderRadius={10}>
        <Grid
          templateColumns={{
            base: "auto",
            sm: "auto auto",
            md: "auto auto auto",
            lg: "auto auto auto auto",
            xl: "auto auto auto auto auto",
            
          }}
          gap={20}
        >
          <GridItem>
            <Image src={Footer} my={10} mx={1} />
          </GridItem>
          <GridItem>
            <Image src={Footer}  my={10} mx={1}  />
          </GridItem>
          <GridItem>
            <Image src={Footer} my={10} mx={1}  />
          </GridItem>
          <GridItem>
            <Image src={Footer}  my={10} mx={1} />
          </GridItem>
          <GridItem>
            <Image src={Footer} my={10} mx={1}  />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer1;
