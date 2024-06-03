"use client";
import React, { useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";


const Links = ["Home", "IDO", "Tokenomics", "Roadmap"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <>
      <Box
        px={8}
        pt={8}
        backgroundImage={
          "url('https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__')"
        }
        height={"588px"}
        bgRepeat={"no-repeat"}
        bgSize={["none", "cover"]}
        bgPos={["center"]}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={[0, 0, 8]}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"none"}
            color={"white"}
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            mb={[2, 1]}
          />

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
              w={["45px", "50px", "70px", "108px"]}
              h={["60px", "72px", "86px", "117px"]}
              alt="Saviour"
              mt={[4, 6]}
              mr={2}
            />
            <Text
              color={"white"}
              fontSize={["12px", "16px", "20px", "24px"]}
              fontFamily={"zcool"}
              _hover={{ cursor: "pointer" }}
            >
              Saviour
            </Text>
          </Flex>
          <Flex flex={1} justifyContent={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                p={2}
                display={{ base: "none", md: "flex" }}
                alignItems={"center"}
                justifyContent={"center"}
                w={470}
                h={"52px"}
                bg={"black"}
                color={"white"}
                borderRadius={"20px"}
              >
                {Links.map((link) => (
                  <Link
                    fontFamily={"zcool"}
                    fontWeight={"400"}
                    key={link}
                    fontSize={"16px"}
                  >
                    {link}
                  </Link>
                ))}
                <Menu>
                  <MenuButton
                    as={Button}
                    fontFamily={"zcool"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    bg={"black"}
                    _hover={{ bg: "black" }}
                    color={"white"}
                    rightIcon={<ChevronDownIcon />}
                    ml={-4}
                    mr={-4}
                    _focus={{ bg: "black" }}
                    _active={{ bg: "black" }}
                  >
                    Coming Soon
                  </MenuButton>
                  <MenuList bg={"black"} color={"white"}>
                    <MenuItem bg={"black"} color={"white"}>
                     let's start a new journey with us
                    </MenuItem>
                    <MenuItem bg={"black"} color={"white"}>
                     User can be able to see the features
                    </MenuItem>
                    <MenuItem bg={"black"} color={"white"}>
                      New Features will be added
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Button
              w={["90px", "100px", "110px", "127px"]}
              h={["26px", "30px", "36px", "38px"]}
              fontFamily={"poppins"}
              color={"white"}
              bgGradient="linear(to-l, #F05733,#ED0137)"
              _hover={{ bgGradient: "linear(to-l, #ED0137,#F05733)" }}
              borderRadius={"15px"}
              fontSize={["10px", "10px", "12px"]}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            bg={"black"}
            color={"white"}
            borderRadius={"20px"}
            p={4}
            display={{ md: "none" }}
          >
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link fontFamily={"zcool"} key={link}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
        <Text
          data-aos="fade-up"
          bg={["rgba(36, 35, 35, 0.4)", "none"]}
          p={4}
          fontSize={["30px", "36px", "40px"]}
          fontFamily={"shojumaru"}
          color={"white"}
          textAlign={"center"}
          position={"relative"}
          top={["10%", "15%", "20%", "30%"]}
          mt={5}
          borderRadius={"20px"}
        >
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </Text>
      </Box>
    </>
  );
}
