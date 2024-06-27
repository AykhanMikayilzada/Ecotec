import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      bgImage="url('./HomePage/footerBgDesign.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      bgColor="#101010"
      pt="80px"
      as="footer"
    >
      <Box maxW="1440px" w="100%" m="auto" display="flex" flexDir="column">
        <Box
          w="100%"
          display="flex"
          justifyContent="space-beetwen"
          pos="relative"
        >
          <Image
            src="./Header/logo.png"
            w="250px"
            _hover={{ cursor: "pointer" }}
          />
          <Box
            className="icons"
            display="flex"
            gap="8px"
            pos="absolute"
            right="0"
            mt="17px"
          >
            <Box
              className="icon"
              w="56px"
              h="56px"
              borderRadius="50px"
              bg="black"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer" }}
            >
              <Image src="./HomePage/twitter.svg" />
            </Box>
            <Box
              className="icon"
              w="56px"
              h="56px"
              borderRadius="50px"
              bg="black"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer" }}
            >
              <Image src="./HomePage/facebook.svg" />
            </Box>
            <Box
              className="icon"
              w="56px"
              h="56px"
              borderRadius="50px"
              bg="black"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer" }}
            >
              <Image src="./HomePage/linkedin.svg" />
            </Box>
            <Box
              className="icon"
              w="56px"
              h="56px"
              borderRadius="50px"
              bg="black"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer" }}
            >
              <Image src="./HomePage/instagram.svg" />
            </Box>
          </Box>
        </Box>

        <Box
          className="border"
          w="100%"
          h="1px"
          bg="#5D5D5D"
          mt="60px"
          mb="80px"
          opacity="15%"
        ></Box>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDir="column">
            <Text fontSize="24px" textColor="#5D5D5D">
              Let’s start working together
            </Text>
            <Text fontSize="60px" textColor="white" fontWeight="bold">
              info@ecotec.az
            </Text>
            <Text fontSize="16px" textColor="#5D5D5D" mt="82px">
              © Copyright 2023 by Ecotec CS
            </Text>
          </Box>
          <Box display="flex" flexDir="column" gap="32px">
            <Box display="flex" gap="32px">
              <Box>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Services
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  About Us
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Offers
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Contact
                </Text>
              </Box>
              <Box>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Networking Services
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Website Development
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Safety Equipment
                </Text>
                <Text fontSize="16px" textColor="#5D5D5D">
                  Product
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex
                as="form"
                width="100%"
                maxW="388px"
                h="64px"
                mx="auto"
                my="4"
                bg="white"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                justifyContent="center"
                alignItems="center"
              >
                <Input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  border="none"
                  textColor="#5D5D5D"
                  _focus={{ outline: "none" }}
                  flex="1"
                  h="100%"
                  outline="none"
                />
                <Button
                  type="submit"
                  bg="#F5900D"
                  color="white"
                  _hover={{ bg: "orange.600" }}
                  borderRadius="0"
                  w="124px"
                  h="100%"
                >
                  Subscribe
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          m="auto"
          gap="16px"
          mt="140px"
          mb="40px"
        >
          <Text textColor="#5D5D5D" fontSize="16px">
            Privacy Policy
          </Text>
          <Box
            className="dot"
            w="4px"
            h="4px"
            bg="#5D5D5D"
            borderRadius="30px"
          ></Box>
          <Text textColor="#5D5D5D" fontSize="16px">
            Ecotec CS
          </Text>
          <Box
            className="dot"
            w="4px"
            h="4px"
            bg="#5D5D5D"
            borderRadius="30px"
          ></Box>
          <Text textColor="#5D5D5D" fontSize="16px">
            Terms & Conditions
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
