import { Box, Image, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Services = () => {
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
                Services
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
              Services
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
            <Text
              as="span"
              color="#F5900D"
              fontSize="50px"
              fontWeight="bold"
              data-aos="fade"
            >
              Services
            </Text>{" "}
            We’re Providing To Our Customers
          </Text>

          <Box className="cards" display="flex" gap="40px" mb="250px">
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
                mb="0px"
              ></Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="section3"
          as="section"
          display="flex"
          justifyContent="space-between"
          maxW="1440px"
          w="100%"
          m="auto"
        >
          <Box className="leftSide" display="flex" flexDir="column" alignItems="start" data-aos="fade-right">
            <Box className="dot" w="8px" h="8px" bg="#F5900D" borderRadius="8px"></Box>
            <Text fontSize="14px" textColor="#5D5D5D">WHY CHOOSE US</Text>
            <Box display="flex" flexDir="column">
              <Box display="flex" gap="14px">
                <Text fontSize="50px" textColor="white" fontWeight="bold">Providing The</Text>
                <Text fontSize="50px" textColor="#F5900D" fontWeight="bold">Best</Text>
              </Box>
              <Text fontSize="50px" textColor="white" fontWeight="bold" lineHeight="20px">Services</Text>
            </Box>
            <Box className="options" display="flex" flexDir="column" gap="32px" alignItems="start" mt="62px">
              <Box className="option" display="flex" gap="32px">
                <Box bg="#101010" w="56px" h="56px" borderRadius="56px" display="flex" justifyContent="center" alignItems="center">
                  <Image src="./Services/checkIcon.svg" />
                </Box>
                <Box display="flex" flexDir="column">
                  <Text fontSize="20px" textColor="white" fontWeight="bold">We think differently</Text>
                  <Text fontSize="15" textColor="#5D5D5D" maxW="350px">We think differently, constantly pushing the boundaries of innovation and creativity. Our unique approach allows us to turn challenges into opportunities, delivering unparalleled solutions that set us apart. At the heart of our success is a commitment to thinking outside the box and redefining what&rsquo;s possible.</Text>
                </Box>
              </Box>
              <Box className="option" display="flex" gap="32px">
                <Box bg="#101010" w="56px" h="56px" borderRadius="56px" display="flex" justifyContent="center" alignItems="center">
                  <Image src="./Services/checkIcon.svg" />
                </Box>
                <Box display="flex" flexDir="column">
                  <Text fontSize="20px" textColor="white" fontWeight="bold">We work quickly</Text>
                  <Text fontSize="15" textColor="#5D5D5D" maxW="350px">We work quickly, ensuring efficient and timely delivery without compromising on quality. Our agile approach allows us to adapt swiftly to changes, meeting deadlines and exceeding expectations. Speed and precision are at the core of our operations, driving us to achieve remarkable results in record time.</Text>
                </Box>
              </Box>
              <Box className="option" display="flex" gap="32px">
                <Box bg="#101010" w="56px" h="56px" borderRadius="56px" display="flex" justifyContent="center" alignItems="center">
                  <Image src="./Services/checkIcon.svg" />
                </Box>
                <Box display="flex" flexDir="column">
                  <Text fontSize="20px" textColor="white" fontWeight="bold">We are always one step ahead</Text>
                  <Text fontSize="15" textColor="#5D5D5D" maxW="350px">We are always one step ahead, anticipating challenges and seizing opportunities before they arise. Our forward-thinking mindset and innovative strategies keep us at the forefront of our industry. By staying ahead of the curve, we ensure that our clients benefit from the latest advancements and trends, securing a competitive edge in the market.</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="rightSide">
            <Box pos="relative" display="flex" justifyContent="center" alignItems="center" data-aos="fade-left" mt="200px">
              <Image src="./Services/outSideDesign.svg" />
              <Image src="./Services/exampleImage.svg" pos="absolute" filter="grayscale(100%) brightness(50%)" />
            </Box>
          </Box>
        </Box>

        <Box
          className="section4"
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

export default Services;
