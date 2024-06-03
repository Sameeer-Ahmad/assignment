import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import IDO from "./pages/IDO";
import Tokenomic from "./pages/Tokenomic";
import RoadMap from "./pages/RoadMap";
import QusAns from "./pages/f&q";
import Footer from "./pages/Footer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Box bg="black">
        
        <Navbar />
        <Intro />
        <IDO />
        <Tokenomic />
        <RoadMap />
        <QusAns />
        <Footer />
      </Box>
    </main>
  );
}
