import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Tokenomic() {
  return (
    <Box
      width="100%"
      // minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="tokenomic"
      backgroundRepeat="no-repeat"
      backgroundSize={["cover", "cover"]}
      backgroundPosition={["-70px center", "center"]}
      height={["680px", "650px"]}
      mt={["128px","0px"]}
    >
      <Text
        fontFamily={"shojumaru"}
        fontSize={"40px"}
        align={"center"}
        color={"red.600"}
        mt={"68px"}
        mb={[8]}
      >
        Tokenomic
      </Text>
      <Flex
        justifyContent="space-around"
        alignItems="space-around"
        flexDirection={{ base: "column", md: "row" }}
        // bg="rgba(0, 0, 0, 0.7)"
        borderRadius="md"
        boxShadow="20px"
        width="100%"
        // data-aos="fade-up"
      >
        <Box
         bg={"black"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          alignSelf={"center"}
          textAlign={"center"}
          border={"1.5px solid rgba(239, 73, 15, 1)"}
          padding={12}
          borderRadius={"20px"}
          fontFamily={"zcool"}
          width={["300px", "412px"]}
          height={["264px", "306px"]}
          position="relative"
        >
          <Button
            width={["160px", "190px"]}
            h={["45px", "55px"]}
            position="absolute"
            top={["-10%", "-9%"]}
            borderRadius={"20px"}
            left="50%"
            fontFamily={"shojumaru"}
            transform="translateX(-50%)"
            bgGradient="linear(to-l, #F05733,#ED0137)"
            _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
            color="white"
            zIndex={1}
          >
            Token Details
          </Button>
          <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
            <Text fontSize={["12px", "20px"]} color={"white"}>
              Name
            </Text>
            <Text color={"rgba(223, 24, 10, 1)"}>Saviour</Text>
          </Box>
          <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
            <Text fontSize={["12px", "20px"]} color={"white"}>
              Symbol
            </Text>
            <Text color={"rgba(223, 24, 10, 1)"}>SVR</Text>
          </Box>
          <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
            <Text fontSize={["12px", "20px"]} color={"white"}>
              Total Supply
            </Text>
            <Text color={"rgba(223, 24, 10, 1)"}>1000 Trillion</Text>
          </Box>
          <Box display={"flex"} gap={8} justifyContent={"center"} mt={"1rem"}>
            <Text fontSize={["12px", "20px"]} color={"white"}>
              SDecimals:
            </Text>
            <Text color={"rgba(223, 24, 10, 1)"}>18</Text>
          </Box>
        </Box>

        <Box
          flex="2"
          position="relative"
          maxWidth="600px"
          width="100%"
          height="auto"
          mt={12}

        >
          <img
            src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
            alt="Token Distribution Chart"
            width="380px"
            height="350px"
            align="center"
            mt={12}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Tokenomic;
