import React from "react";
import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container id="about" maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text fontSize="lg">Pure Water Factory has been dedicated to providing pure, refreshing water to our community for over a decade. Our commitment to quality and sustainability makes us a leader in the water industry.</Text>
      </VStack>
    </Container>
  );
};

export default About;
