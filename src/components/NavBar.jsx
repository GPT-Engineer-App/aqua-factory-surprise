import React from "react";
import { Box, Flex, Text, Link, Container, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box as="nav" w="full" bg={useColorModeValue("gray.100", "gray.900")} px={4} py={3} shadow="md">
      <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" color={useColorModeValue("blue.600", "teal.300")}>
          Pure Water Factory
        </Text>
        <Flex align="center">
          <Link as={RouterLink} to="/" px={3} py={2} rounded="md" color={useColorModeValue("gray.600", "gray.200")}>
            Home
          </Link>
          <Link as={RouterLink} to="/#about" px={3} py={2} rounded="md" color={useColorModeValue("gray.600", "gray.200")}>
            About
          </Link>
          <Link as={RouterLink} to="/#contact" px={3} py={2} rounded="md" color={useColorModeValue("gray.600", "gray.200")}>
            Contact
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
