import { Box, Image, Input, Text, Textarea } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
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
                Contact
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
              Contact
            </Text>
          </Box>
        </Box>

        <Box
          className="section2"
          as="section"
          display="flex"
          maxW="1130px"
          w="100%"
          m="auto"
          mt="-80px"
          mb="150px"
        >
          <Box
            className="leftSide"
            bg="#201F1F"
            w="50%"
            h="560px"
            display="flex"
            flexDir="column"
            alignItems="center"
            pt="50px"
          >
            <Text fontSize="44px" textColor="white">
              Get in touch with us
            </Text>
            <Text mt="50px" textColor="#CCC6C6" fontSize="14px" w="400px">
              Full Name
            </Text>
            <Input
              bg="#343333"
              border="1px solid #8D8D8D"
              focusBorderColor="#8D8D8D"
              textColor="white"
              mt="5px"
              maxW="400px"
              placeholder="Rachel Joe"
            />
            <Text mt="20px" textColor="#CCC6C6" fontSize="14px" w="400px">
              Email
            </Text>
            <Input
              bg="#343333"
              border="1px solid #8D8D8D"
              focusBorderColor="#8D8D8D"
              textColor="white"
              mt="5px"
              maxW="400px"
              placeholder="racheljoe@gmail.com"
            />
            <Text mt="20px" textColor="#CCC6C6" fontSize="14px" w="400px">
              Message
            </Text>
            <Textarea
              bg="#343333"
              border="1px solid #8D8D8D"
              focusBorderColor="#8D8D8D"
              textColor="white"
              mt="5px"
              maxW="400px"
              h="100px"
              placeholder="racheljoe@gmail.com"
            />
          </Box>
          <Box className="rightName" w="50%">
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026.0368163117316!2d49.860075191355314!3d40.41037165233385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d283e6aef4b%3A0x1adf790e7d3891f3!2sRashmed%20MMC!5e0!3m2!1saz!2saz!4v1719558626878!5m2!1saz!2saz"
              width="100%"
              h="100%"
              style={{
                border: 0,
                backgroundColor: "rgba(30, 30, 30, 0.8)", // Arkaplan rengi (koyu gri tonu)
                filter:
                  "invert(90%) sepia(10%) saturate(500%) hue-rotate(180deg)", // Görüntü filtresi
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
