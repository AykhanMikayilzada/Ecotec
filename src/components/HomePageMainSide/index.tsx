import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageMainSide: React.FC = () => {
  const phoneNumber = "+994556943690";

  useEffect(() => {
    AOS.init({
      duration: 1100, 
      once: true, 
    });
  }, []);

  return (
    <>
      <Box className="backInBlack" bg="black" w="100%" h="100%">
        <Box
          className="section1"
          as="section"
          display="flex"
          justifyContent="space-between"
          pb="100px"
          maxW="1440px"
          w="100%"
          m="auto"
        >
          <Box className="leftSide" display="flex" gap="50px">
            <Box
              className="littleContactArea"
              display="flex"
              flexDirection="column"
              gap="350px"
              data-aos="fade-down"
            >
              <Box
                className="socialMedias"
                display="flex"
                flexDirection="column"
                gap="20px"
                pt="150px"
                pl="80px"
              >
                  <Image
                    src="./HomePage/twitter.svg"
                    _hover={{ cursor: "pointer" }}
                  />
                  <Image
                    src="./HomePage/facebook.svg"
                    _hover={{ cursor: "pointer" }}
                    w="17px"
                  />
                  <Image
                    src="./HomePage/linkedin.svg"
                    _hover={{ cursor: "pointer" }}
                  />
                  <Image
                    src="./HomePage/instagram.svg"
                    _hover={{ cursor: "pointer" }}
                  />
              </Box>
              <a
                href={`tel:${phoneNumber}`}
                className="number"
                style={{
                  textDecoration: "none",
                  transform: "rotate(90deg)",
                  display: "block",
                  marginLeft: "15.5px",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "400",
                    letterSpacing: "3px",
                  }}
                >
                  {phoneNumber}
                </span>
              </a>
            </Box>
            <Box display="flex" flexDir="column">
              <Text
                maxW="650px"
                fontSize="85px"
                letterSpacing="-3px"
                lineHeight="80px"
                textColor="white"
                alignItems="start"
                fontWeight="bold"
                pos="absolute"
                zIndex="2"
                top="250px"
                pl="3px"
                data-aos="fade-right"
              >
                More Than Just IT Agency
              </Text>
              <Button
                colorScheme="#F5900D"
                bg="#F5900D"
                _hover={{ bg: "#F7AC19", transition: "0.2s ease-in-out" }}
                w="214px"
                h="64px"
                mt="500px"
                textColor="white"
                data-aos="fade-right"
              >
                Discover More
              </Button>
            </Box>
          </Box>
          <Box
            className="rightSide"
            display="flex"
            gap="80px"
            justifyContent="space-between"
            pos="relative"
            zIndex="0"
          >
            <Image
              src="./HomePage/background1.svg"
              filter="grayscale(100%) brightness(50%)"
              data-aos="fade-down"
            />
            <Image
              src="./HomePage/background2.svg"
              filter="grayscale(100%) brightness(50%)"
              data-aos="fade-down"
            />
          </Box>
        </Box>

        <Box
          className="section2"
          as="section"
          display="flex"
          pt="100px"
          justifyContent="center"
          gap="40px"
          pb="200px"
          maxW="1440px"
          w="100%"
          m="auto"
        >
          <Box
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
            className="card"
            pos="relative"
            display="flex"
            justifyContent="center"
            w="400px"
            h="300px"
            transition="transform 0.3s ease-in-out"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
            data-aos="flip-down"
          >
            <Image
              src="./HomePage/cardImage1.svg"
              filter="grayscale(100%) brightness(50%)"
            />
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              boxSizing="border-box"
              pl="32px"
              textColor="white"
              fontSize="22px"
              fontWeight="bold"
              pos="absolute"
              bottom="20px"
              bg="black"
              w="360px"
              h="76px"
              opacity="80%"
            >
              Creative Agency
            </Box>
            <Image
              src="./HomePage/lamp.svg"
              w="56px"
              pos="absolute"
              bottom="65px"
              right="40px"
            />
          </Box>

          <Box
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
            className="card"
            pos="relative"
            display="flex"
            justifyContent="center"
            w="400px"
            h="300px"
            transition="transform 0.3s ease-in-out"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
            data-aos="flip-down"
          >
            <Image
              src="./HomePage/cardImage2.svg"
              filter="grayscale(100%) brightness(50%)"
            />
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              boxSizing="border-box"
              pl="32px"
              textColor="white"
              fontSize="22px"
              fontWeight="bold"
              pos="absolute"
              bottom="20px"
              bg="black"
              w="360px"
              h="76px"
              opacity="80%"
            >
              Quality Work
            </Box>
            <Image
              src="./HomePage/lamp.svg"
              w="56px"
              pos="absolute"
              bottom="65px"
              right="40px"
            />
          </Box>

          <Box
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
            className="card"
            pos="relative"
            display="flex"
            justifyContent="center"
            w="400px"
            h="300px"
            transition="transform 0.3s ease-in-out"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
            data-aos="flip-down"
          >
            <Image
              src="./HomePage/cardImage3.svg"
              filter="grayscale(100%) brightness(50%)"
            />
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              boxSizing="border-box"
              pl="32px"
              textColor="white"
              fontSize="22px"
              fontWeight="bold"
              pos="absolute"
              bottom="20px"
              bg="black"
              w="360px"
              h="76px"
              opacity="80%"
            >
              Professional Team
            </Box>
            <Image
              src="./HomePage/lamp.svg"
              w="56px"
              pos="absolute"
              bottom="65px"
              right="40px"
            />
          </Box>
        </Box>

        <Box
          className="section3"
          as="section"
          display="flex"
          justifyContent="center"
          gap="80px"
          maxW="1440px"
          m="auto"
          w="100%"
        >
          <Box className="leftSide" pos="relative" maxW="650px" maxH="650px" data-aos="fade-right">
            <Image
              src="./HomePage/picture1.svg"
              maxW="620px"
              filter="grayscale(100%) brightness(50%)"
            />
            <Box
              className="orangeDot"
              w="56px"
              h="56px"
              bg="#F5900D"
              borderRadius="30px"
              pos="absolute"
              bottom="0"
              left="0"
            ></Box>
          </Box>

          <Box
            className="rightSide"
            display="flex"
            flexDir="column"
            textAlign="start"
            data-aos="fade-left"
          >
            <Box
              className="littleDot"
              w="8px"
              h="8px"
              borderRadius="5px"
              bg="#F5900D"
            ></Box>
            <Text fontSize="14px" textColor="#5D5D5D" mt="16px">
              ABOUT THE AGENCY
            </Text>
            <Text fontSize="50px" textColor="white" fontWeight="bold" mt="8px">
              We’re Top Notch & Best
            </Text>
            <Text
              fontSize="50px"
              textColor="#F5900D"
              fontWeight="bold"
              lineHeight="40px"
            >
              Web Design & SEO
            </Text>
            <Text fontSize="50px" textColor="white" fontWeight="bold">
              Agency
            </Text>
            <Text fontSize="18px" textColor="#F5900D" maxW="580px" mt="32px">
              Lorem ipsum dolor sit amet consectetur. Metus vitae a aenean mi
              aenean nulla elementum eget viverra. Tellus phasellus velit
              aliquam.
            </Text>
            <Text fontSize="18px" textColor="#5D5D5D" maxW="580px" mt="32px">
              Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et
              tortor sem. Ut tempor velit magna aliquet dignissim in purus
              molestie congue. Imperdiet sit ante urna massa eu. Massa magna
              pellentesque rhoncus ornare ut. Ullamcorper varius.
            </Text>
          </Box>
        </Box>

        <Box
          className="section4"
          as="section"
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxW="1440px"
          w="100%"
          mt="370px"
          pos="relative"
          data-aos="flip-up"
        >
          <Image
            src="./HomePage/picture2.svg"
            filter="grayscale(100%) brightness(50%)"
          />
          <Image src="./HomePage/design.svg" pos="absolute" right="0" />
        </Box>

        <Box
          className="section5"
          as="section"
          display="flex"
          flexDir="column"
          maxW="1440px"
          w="100%"
          m="auto"
          mt="200px"
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
            <Text as="span" color="#F5900D" fontSize="50px" fontWeight="bold" data-aos="fade">
              Services
            </Text>{" "}
            We’re Providing To Our Customers
          </Text>

          <Box className="cards" display="flex" gap="40px">
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
              <Text
                maxW="190px"
                textAlign="center"
                fontSize="14px"
                textColor="#5D5D5D"
                mt="24px"
              >
                Custom website, Seo Services, SMM services, E-mail for your
                business, Hosting Services,
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
                Safety Equipment{" "}
              </Text>
              <Text
                maxW="190px"
                textAlign="center"
                fontSize="14px"
                textColor="#5D5D5D"
                mt="24px"
              >
                Barriers, Bollards, Turnstiles, Video surveillance, Access
                control, Emergency and fire alarms, Metal detector,
                Electromechanical, electromagnetic locks and locks, Identifiers,
                Controllers and readers, Exit buttons, etc.
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
                Product{" "}
              </Text>
              <Text
                maxW="190px"
                textAlign="center"
                fontSize="14px"
                textColor="#5D5D5D"
                mt="24px"
              >
                Restaurant Management System, Tourism Management System, Hotel
                Management System, Fitness & SPA Management System, Clinic
                Management System, Pharmacy Management System, Personnel
                Attendance System, Call Center system
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
                Networking Services{" "}
              </Text>
              <Text
                maxW="190px"
                textAlign="center"
                fontSize="14px"
                textColor="#5D5D5D"
                mt="24px"
              >
                Diagnostics, Technical Support, Equipment Repair, Data Recovery,
                Modernization and Improvement, Complex Project Solutions
                (Configuration, Installation, Commissioning)
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePageMainSide;
