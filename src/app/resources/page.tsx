"use client";

import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Resources() {
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
            Resources
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
            Description of the resources Houst Consulting offers.
          </Text>
          <br />

          <Text color="fg.muted">U.S. and Foreign</Text>
          <br />
          <UnorderedList spacing={2}>
            <ListItem>
              Preparing and prosecuting both U.S. and international patent
              applications, U.S. reissued applications, and reexamination
              applications
            </ListItem>
            <ListItem>Performing patentability studies</ListItem>
            <ListItem>
              Performing freedom to operate and design around studies
            </ListItem>
            <ListItem>
              Providing infringement/non-infringement, validity/non-validity
              opinions
            </ListItem>
            <ListItem>
              Conducting IP portfolio due diligence reviews for various business
              transactions and internal reviews and audits
            </ListItem>
            <ListItem>
              Offering strategic guidance regarding IP protection in both U.S.
              and foreign countries.
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
