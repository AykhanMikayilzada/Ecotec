import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <Box className="Header" as="header" bg="transparent" pos="absolute" top="0" w="100%" zIndex="1">
      <Box display="flex" alignItems="center" justifyContent="space-evenly" pos="relative" h="120px" maxW="1440px" m="auto" w="100%">
        <Image
          src="/Header/logo.png"
          style={{ filter: "brightness(0) invert(1) contrast(1.5)" }}
          alt="logo"
          width="200px"
          pos="absolute"
          left="100"
          top="5"
        />
        <Box className="Menu">
          <Box as="ul" display="flex" gap="50px">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Offers", path: "/offers" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Box key={item.name} _hover={{ cursor: "pointer" }}>
                <Text
                  as="span"
                  textColor="white"
                  fontSize="16"
                  _hover={{ textColor: "#f8ac1a" }}
                  transition="color 0.2s ease-in-out"
                  onClick={() => router.push(item.path)}
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
