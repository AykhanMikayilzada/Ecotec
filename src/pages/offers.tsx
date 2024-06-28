import { Box, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Offers = () => {
  return (
    <>
      <Header />
      <Box
        className="backInBlack"
        display="flex"
        flexDir="column"
        bg="black"
        w="100%"
      >
        <Box
          className="section1"
          as="section"
          bgImage="/About/backgroundImage.svg"
          bgSize="cover"
          bgPosition="center"
          h="560px"
          color="white"
          textAlign="center"
          pt="120px"
          w="100%"
        >
          <Box maxW="1440px" w="100%" m="auto" display="flex" flexDir="column">
            <Box
              display="flex"
              alignItems="end"
              gap="6px"
              mt="130px"
              ml="120px"
            >
              <Text fontSize="16px" textColor="white" data-aos="fade-down">
                Ecotec CS
              </Text>
              <Box
                w="4px"
                h="4px"
                bg="white"
                borderRadius="4px"
                mb="4px"
                data-aos="fade-down"
              ></Box>
              <Text textColor="#F5900D" data-aos="fade-down">
                Offers
              </Text>
            </Box>
            <Text
              data-aos="fade-down"
              ml="110px"
              mt="-20px"
              textAlign="start"
              textColor="white"
              fontSize="105px"
              fontWeight="bold"
            >
              Offers
            </Text>
          </Box>
        </Box>

        <Box
          className="section2"
          as="section"
          display="flex"
          flexDir="column"
          maxW="1440px"
          w="100%"
          m="auto"
          mt="100px"
          alignItems="center"
        >
          <Box
            className="littleOrangeDot"
            w="8px"
            h="8px"
            borderRadius="5px"
            bg="#F5900D"
            data-aos="fade"
          ></Box>
          <Text mt="16px" textColor="#5D5D5D" fontSize="14px" data-aos="fade">
            WHAT WE’RE OFFERING
          </Text>
          <Text
            textColor="white"
            fontSize="50px"
            fontWeight="bold"
            maxW="614px"
            textAlign="center"
            mt="8px"
            lineHeight="70px"
            mb="40px"
            data-aos="fade"
          >
             <Text
              as="span"
              color="#F5900D"
              fontSize="50px"
              fontWeight="bold"
              data-aos="fade"
            >
              Exclusive Offers
            </Text>{" "} for Our Valued Customers
          </Text>

          <Box className="cards" display="flex" gap="40px" mb="250px" flexWrap="wrap">
            <Box
              className="card"
              display="flex"
              flexDir="column"
              alignItems="center"
              boxSizing="border-box"
              bg="#101010"
              w="290px"
              borderRadius="10px"
              pb="40px"
              data-aos="fade"
            >
              <Image src="./Services/networking.png" mt="48px" w="90px" />
              <Text
                fontSize="18px"
                textColor="white"
                fontWeight="bold"
                maxW="150px"
                textAlign="center"
                mt="24px"
              >
                Networking Services{" "}
              </Text>
              <Box
                className="border"
                w="190px"
                h="1px"
                bg="#5D5D5D"
                opacity="35%"
                mt="24px"
              ></Box>
            </Box>

            <Box
              className="card"
              display="flex"
              flexDir="column"
              alignItems="center"
              boxSizing="border-box"
              bg="#101010"
              w="290px"
              borderRadius="10px"
              pb="40px"
              data-aos="fade"
            >
              <Image src="./Services/safety.png" mt="25px" w="130px" />
              <Text
                fontSize="18px"
                textColor="white"
                fontWeight="bold"
                maxW="150px"
                textAlign="center"
                mt="24px"
              >
                Safety Equipment{" "}
              </Text>
              <Box
                className="border"
                w="190px"
                h="1px"
                bg="#5D5D5D"
                opacity="35%"
                mt="24px"
              ></Box>
            </Box>

            <Box
              className="card"
              display="flex"
              flexDir="column"
              alignItems="center"
              boxSizing="border-box"
              bg="#101010"
              w="290px"
              borderRadius="10px"
              pb="40px"
              data-aos="fade"
            >
              <Image src="./HomePage/development.svg" mt="48px" />
              <Text
                fontSize="18px"
                textColor="white"
                fontWeight="bold"
                maxW="150px"
                textAlign="center"
                mt="24px"
              >
                Website Development
              </Text>
              <Box
                className="border"
                w="190px"
                h="1px"
                bg="#5D5D5D"
                opacity="35%"
                mt="24px"
              ></Box>
            </Box>

            <Box
              className="card"
              display="flex"
              flexDir="column"
              alignItems="center"
              boxSizing="border-box"
              bg="#101010"
              w="290px"
              borderRadius="10px"
              pb="40px"
              data-aos="fade"
            >
              <Image src="./Services/product.png" mt="35px" w="110px" />
              <Text
                fontSize="18px"
                textColor="white"
                fontWeight="bold"
                maxW="150px"
                textAlign="center"
                mt="24px"
              >
                Product{" "}
              </Text>
              <Box
                className="border"
                w="190px"
                h="1px"
                bg="#5D5D5D"
                opacity="35%"
                mt="24px"
                mb="0px"
              ></Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="section3"
          as="section"
          display="flex"
          flexDir="column"
          maxW="1440px"
          w="100%"
          m="auto"
          pb="100px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="24px"
            data-aos="fade"
          >
            <Box
              className="border"
              bg="#5D5D5D"
              maxW="544px"
              w="100%"
              h="1px"
              opacity="30%"
            ></Box>
            <Text textAlign="center" color="#5D5D5D" fontSize="13px">
              20+ Brands Trust Us
            </Text>
            <Box
              className="border"
              bg="#5D5D5D"
              maxW="544px"
              w="100%"
              h="1px"
              opacity="30%"
            ></Box>
          </Box>
          <Box
            className="brands"
            display="flex"
            gap="120px"
            justifyContent="center"
            alignItems="center"
            mt="50px"
            data-aos="fade-up"
          >
            <Box className="brand">
              <Image src="/About/biselle.png" alt="Biselle Logo" />
            </Box>
            <Box className="brand">
              <Image src="/About/lara.png" alt="Lara Logo" />
            </Box>
            <Box className="brand">
              <Image src="/About/logman.png" alt="Logman Logo" />
            </Box>
            <Box className="brand">
              <Image src="/About/soffen.png" alt="Soffen Logo" />
            </Box>
            <Box className="brand">
              <Image src="/About/termogas.png" alt="Termogas Logo" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Offers;
