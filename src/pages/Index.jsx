import React from "react";
import { Box, Container, VStack, Heading, Text, Button, Image, SimpleGrid, GridItem, Icon, useColorModeValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import { FaTint, FaRegLightbulb, FaLeaf, FaPlus } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{text}</Text>
    </VStack>
  );
};

const Index = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl">
        <VStack spacing={10} as="section" my={16}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl">
              Pure Water Factory
            </Heading>
            <Text mt={4} fontSize="lg">
              Quenching your thirst with purity in every drop.
            </Text>
          </Box>

          <Image src="https://images.unsplash.com/photo-1580088899613-487c4051af31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZhY3Rvcnl8ZW58MHx8fHwxNzA5NTk2NjIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Water Factory" borderRadius="lg" boxShadow="lg" maxH="450px" objectFit="cover" />

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <GridItem>
              <Feature icon={FaTint} title="Natural Sources" text="We source our water from the purest springs and aquifers." />
            </GridItem>
            <GridItem>
              <Feature icon={FaRegLightbulb} title="Eco-Friendly Processes" text="Our factory uses renewable energy and sustainable methods." />
            </GridItem>
            <GridItem>
              <Feature icon={FaLeaf} title="Biodegradable Packaging" text="We care for the planet with 100% biodegradable bottles." />
            </GridItem>
            <GridItem>
              <Feature icon={FaPlus} title="Mineral Enrichment" text="Enhanced with essential minerals for optimum health." />
            </GridItem>
          </SimpleGrid>

          <Button leftIcon={<FaTint />} colorScheme={useColorModeValue("blue", "teal")} size="lg" px={10} py={8} shadow="md" borderRadius="full">
            Discover More
          </Button>
          <About />
          <Contact />
        </VStack>
      </Container>
    </>
  );
};

export default Index;
