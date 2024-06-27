import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <>
    <Header />
    <Box className="backInBlack" display="flex" flexDir="column" bg="black" w="100%" h="100vh">
      <Box
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
          <Box display="flex" alignItems="end" gap="6px" mt="130px" ml="120px">
            <Text fontSize="16px" textColor="white" data-aos="fade-down">Ecotec CS</Text>
            <Box w="4px" h="4px" bg="white" borderRadius="4px" mb="4px" data-aos="fade-down"></Box>
            <Text textColor="#F5900D" data-aos="fade-down">Services</Text>
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
            Services
          </Text>
        </Box>
      </Box>
      </Box>
    <Footer />
  </>
  );
};

export default Services;