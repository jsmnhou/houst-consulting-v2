"use client";

import { Box, Container, Heading, Stack, Flex, Text } from "@chakra-ui/react";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <NavBar />
      <Container maxW="120ch">
        <Box
          as="section"
          bg="bg.surface"
          pt={{ base: "4", md: "8" }}
          pb={{ base: "4", md: "8" }}
          px={{ base: "3", lg: "4" }}
        >
          <Heading size={{ base: "2xl", md: "2xl" }} fontWeight="medium">
            About Us
          </Heading>
        </Box>
        <Box
          as="section"
          bg="bg.surface"
          pt={{ base: "2", md: "2" }}
          pb={{ base: "2", md: "2" }}
          px={{ base: "3", lg: "4" }}
        >
          <Text color="fg.muted">
            Since the inception in 2008, the law firm of Houst Consulting has
            been dedicated to providing client services marked by the highest
            quality and value. Our integrity, commitment, and professional
            ethics deeply shape our practice. We value long term relationship
            with our clients. We work hard to understand the needs, concerns,
            and expectation of our clients.
          </Text>
          <br />

          <Text color="fg.muted">
            Our practice often involves evaluating potential patentability of
            new inventions and obtaining maximal patent rights to the
            inventions. Our practice also involves providing guidance to our
            clients as to how to freely operate technologies and avoid
            infringing rights of competitors.
          </Text>
          <br />

          <Text color="fg.muted">
            The hallmark of our practice is our commitment to providing top
            quality legal services at reasonable rates. We have the experience
            and qualification that is equivalent or superior to those at the
            expensive law firms but our service fee is significantly lower. With
            flexible, reasonable billing arrangement, we can keep costs down
            without compromising the quality of services to our clients. We
            adopt a more personal setting and approach in working with our
            clients.
          </Text>
          <br />

          <Text color="fg.muted">
            We are proud of ourselves on offering prompt, proactive, and
            effective legal solutions to companies in life science and high tech
            industry. We attend details of every matter that each client
            deserves.
          </Text>
          <br />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
