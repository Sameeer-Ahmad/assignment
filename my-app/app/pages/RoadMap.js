"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function RoadMap() {
  return (
    <>
      <Box
        position="relative"
        h="612px"
        className="roadmap"
        backgroundRepeat="no-repeat"
        backgroundSize={["cover", "cover"]}
        backgroundPosition={["-70px center", "center"]}
        // height={["auto", "650px"]}
      >
        <Text
          pos={"relative"}
          color="rgba(237, 1, 55, 1)"
          align="center"
          p={4}
          fontSize={["30px", "36px", "52px"]}
          fontFamily="shojumaru"
          textAlign="center"
          mt={5}
          borderRadius="20px"
        >
          Road Map
        </Text>
        <Flex
          justify="center"
          align="center"
          position="relative"
          top="15%"
          gap={12}
        >
          <Box
            position="relative"
            
          >
            <Box
              width={["160px", "210px"]}
              height={["240px", "300px"]}
              borderRadius={"13px"}
              border={"1.5px solid rgba(237, 1, 55, 1)"}
              position="relative"
              overflow="hidden"
              background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
              data-aos="fade-up"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"
                alt="Saviour"
                layout="fill"
                objectFit="cover"
                borderRadius={"13px"}
                background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
                data-aos="flip-left"
              />
              <Box
                position="absolute"
                bottom={4}
                left={4}
                right={4}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                p={2}
              >
                <Text fontSize={["15px", "22px"]} pb={4}>
                  {" "}
                  Phase 1
                </Text>
                <Text
                  fontSize={["13px", "17px"]}
                  color="rgba(174, 177, 184, 1)"
                  fontWeight="400"
                  fontfamily="Manrope"
                >
                  Technical Readiness and Smart Contract Audit
                </Text>
              </Box>
            </Box>
          </Box>
          <Box position="relative">
            <Box
              width={["160px", "210px"]}
              height={["240px", "300px"]}
              borderRadius={"13px"}
              border={"1.5px solid rgba(237, 1, 55, 1)"}
              position="relative"
              overflow="hidden"
              background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
              data-aos="fade-up"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/aa29/8bb9/151666f4ac7fae86b6b63f7e97472d61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZAHaJXiBYfL1h1zgGPIaFE0JavKk6hTn3UOSRgYpS-DqHfNvBX1Zohv99pdXvGSRn2E8qKQy3rUrez0ySAOTwPCu3XeZgk4fsGL8xc-81KN5vvTzjWexDRx4NXnfW6PnIzY8nlwaizp7wImuel-p6v~HAj5yNO4QQQyTkK7Qc8qPTfZ-EK74gDlaMRluU1sJfDwiGihGOhxnVIlyEa~FuAzvJpUmuoERPLFnrrHoRktYitrDFOmbzL41UpIIhJ0qoi6HVz8OPWYXNEAHxe46UXL6RMwmFnwsezpMONedZIB5IboMY7i~3eXxbueFbLgi4yD0~NssIKD~vhbXqHoiw__"
                alt="Saviour"
                layout="fill"
                objectFit="cover"
                borderRadius={"13px"}
                background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
                data-aos="flip-left"
              />
              <Box
                position="absolute"
                bottom={4}
                left={4}
                right={4}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                p={2}
              >
                <Text fontSize={["15px", "22px"]} pb={4}>
                  {" "}
                  Phase 2
                </Text>
                <Text
                  fontSize={["13px", "17px"]}
                  color="rgba(174, 177, 184, 1)"
                  fontWeight="400"
                  fontfamily="Manrope"
                >
                  Increase Liquidity and trading Volume
                </Text>
              </Box>
            </Box>
          </Box>
          <Box position="relative" display={["none", "none", "none", "block"]}>
            <Box
              width={"210px"}
              height={"300px"}
              borderRadius={"13px"}
              border={"1.5px solid rgba(237, 1, 55, 1)"}
              position="relative"
              overflow="hidden"
              bgGradient={[
                "linear(to-t, rgba(0, 0, 0, 0), rgba(10, 28, 61, 0.2), rgba(237, 1, 55, 0.09))",
              ]}
              background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
              data-aos="fade-up"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"
                alt="Saviour"
                layout="fill"
                objectFit="cover"
                borderRadius={"13px"}
                transform="scaleY(-1)"
                background={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))`}
                data-aos="flip-left"
              />
              <Box
                position="absolute"
                bottom={4}
                left={4}
                right={4}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                p={2}
              >
                <Text fontSize="22px" pb={4}>
                  {" "}
                  Phase 3
                </Text>
                <Text
                  fontSize="17px"
                  color="rgba(174, 177, 184, 1)"
                  fontWeight="400"
                  fontfamily="Manrope"
                >
                  Community Building and Marketing
                </Text>
              </Box>
            </Box>
          </Box>
          <Box position="relative" display={["none", "none", "block", "block"]} >
            <Box
              width={"210px"}
              height={"300px"}
              borderRadius={"13px"}
              border={"1.5px solid rgba(237, 1, 55, 1)"}
              position="relative"
              overflow="hidden"
              bgGradient={[
                "linear(to-t, rgba(0, 0, 0, 0), rgba(10, 28, 61, 0.2), rgba(237, 1, 55, 0.09))",
              ]}
              data-aos="fade-up"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/e792/f455/d02fe23b0b95b2461d5ab0db33cfb4b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoHmU4eSMr3BrRCqhZU4684944N4vHk3CFWj4zcV~r2Lwras3ip4Q55mWg8jvJaRoiZfA-lXzDxE6zK0s66seFnh4cFV5bkUCf7oxRmwWosNn4InT3~WxIRVJXTruqzwLeK2Kg467xnwbp9B4tOtff46QCteK6wfLR-A2TpQDBKd2dSfGQEwKRBLeZlKdUMt40PuBXlzS4LJm6yE98HrysbllIqXZlFe7dIXoeHkSkDzrWuiTTvKFYS6qqLSBU5P6RgxzCVewvHf69K24gsKLBHBJMJmHqzS0qOYT8j7teh6KaxoLnLef58tI99B9UdGeJQ4l2sygHUmvubcWJMqJw__"
                alt="Saviour"
                layout="fill"
                objectFit="cover"
                borderRadius={"13px"}
                transform="scaleY(-1)"
                data-aos="flip-left"
              />
              <Box
                position="absolute"
                bottom={4}
                left={4}
                right={4}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                p={2}
              >
                <Text fontSize="22px" pb={4}>
                  {" "}
                  Phase 4
                </Text>
                <Text
                  fontSize="17px"
                  color="rgba(174, 177, 184, 1)"
                  fontWeight="400"
                  fontfamily="Manrope"
                >
                  Ecosystem Expansion and Partnerships
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default RoadMap;
