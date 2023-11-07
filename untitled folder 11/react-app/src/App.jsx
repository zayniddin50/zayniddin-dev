import { Box, Center, Container } from "@chakra-ui/react";
import Header from "./header/header";
import Main from "./main/main";
import Section from "./section/section";
import Main1 from "./main1/main1";
import Prodctus from "./prodctus/prodctus";
import CenterProdctus from "./centerProdctus/centerProdctus";
import PraductCard from "./praductCard/praductCard";
import BigbannerCard from "./bigbannerCard/BigbannerCard";
import Footer from "./footer/footer";
import Footer1 from "./footer1/footer1";

function App() {
  return (
    <Box>
      <Container maxW="container.xl">
        <Header />
        <Main />
        <Section />
        <Main1 />
        <Prodctus />
        <CenterProdctus />
        <PraductCard/>
        <BigbannerCard/>
        <Footer/>
        <Footer1/>
      </Container>
    </Box>
  );
}

export default App;
