import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Box
        className="backInBlack"
        display="flex"
        flexDir="column"
        justifyContent="center"
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
              data-aos="fade-down"
            >
              <Text fontSize="16px" color="white">
                Ecotec CS
              </Text>
              <Box
                w="4px"
                h="4px"
                bg="white"
                borderRadius="4px"
                mb="4px"
              ></Box>
              <Text color="#F5900D">
                About
              </Text>
            </Box>
            <Text
              data-aos="fade-down"
              ml="110px"
              mt="-20px"
              textAlign="start"
              color="white"
              fontSize="105px"
              fontWeight="bold"
            >
              About
            </Text>
          </Box>
        </Box>

        <Box
          className="section2"
          pt="150px"
          as="section"
          display="flex"
          justifyContent="center"
          gap="80px"
          maxW="1440px"
          m="auto"
          w="100%"
        >
          <Box
            className="leftSide"
            pos="relative"
            maxW="650px"
            maxH="650px"
            data-aos="fade-right"
            mt="-30px"
          >
            <Image
              src="/About/orangeDots.svg"
              alt="Orange Dots"
              pos="absolute"
              top="0"
              left="0"
            />
            <Image
              src="/About/leftPicture.svg"
              alt="Left Picture"
              maxW="620px"
              filter="grayscale(100%) brightness(50%)"
            />
          </Box>

          <Box
            className="rightSide"
            display="flex"
            flexDir="column"
            textAlign="start"
            data-aos="fade-left"
            mt="-40px"
          >
            <Box
              className="littleDot"
              w="8px"
              h="8px"
              borderRadius="5px"
              bg="#F5900D"
            ></Box>
            <Text fontSize="14px" color="#5D5D5D" mt="16px">
              ABOUT THE AGENCY
            </Text>
            <Text fontSize="50px" color="white" fontWeight="bold" mt="8px">
              We’re Professional
            </Text>
            <Text
              fontSize="50px"
              color="#F5900D"
              fontWeight="bold"
              lineHeight="40px"
            >
              IT & Programming
            </Text>
            <Text fontSize="50px" color="white" fontWeight="bold">
              Agency
            </Text>
            <Text fontSize="18px" textColor="#F5900D" maxW="580px" mt="32px">
              &quot;ECOTEC CS&quot; LLC is one of the leading companies in the
              Azerbaijani market, offering a wide range of products and services
              through collaborations with international firms. Our offerings
              include system integration, data center solutions, network
              solutions, energy supply and cooling systems, applications, and
              software development.
            </Text>
            <Text fontSize="18px" textColor="#5D5D5D" maxW="630px" mt="32px">
              In the IT and software consulting field, including distribution
              services, corporate and retail sales of equipment, and technical
              support, &quot;ECOTEC CS&quot; LLC has maintained a professional
              business approach for many years. Our commitment to excellence has
              earned high levels of customer satisfaction, positioning us among
              the leading IT companies today.
            </Text>
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
          mt="200px"
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

export default About;
