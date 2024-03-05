import React from "react";
import { Box, Heading, VStack, Container, Text, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container id="contact" maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Text fontSize="lg">Have any questions or need to get in touch with our team? Fill out the form below and we'll respond as soon as possible.</Text>
        <Box w="full" p={8} boxShadow="lg" borderRadius="lg" bg={useColorModeValue("white", "gray.700")}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={5} />
            </FormControl>
            <Button colorScheme={useColorModeValue("blue", "teal")} w="full">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
