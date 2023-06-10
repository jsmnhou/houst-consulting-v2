"use client";

import {
  Icon,
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Hide,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Textarea,
  Input,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
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
          <Stack>
            <Heading size={{ base: "2xl", md: "2xl" }} fontWeight="medium">
              Contact Us
            </Heading>
            <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="light">
              Shoot us a message! We will be in touch shortly.
            </Text>
          </Stack>
        </Box>
        <Box
          as="section"
          bg="bg.surface"
          pt={{ base: "2", md: "2" }}
          pb={{ base: "2", md: "2" }}
          px={{ base: "3", lg: "4" }}
        >
          <Box
            as="form"
            action="https://getform.io/f/b0461622-908c-421b-8d04-bd3867abc829"
            method="post"
            bg="bg.surface"
            boxShadow="sm"
            borderRadius="lg"
          >
            <Stack
              spacing="5"
              px={{ base: "4", md: "6" }}
              py={{ base: "5", md: "6" }}
            >
              <Stack spacing="6" direction={{ base: "column", md: "row" }}>
                <Hide>
                  <Input type="hidden" name="_gotcha" />
                </Hide>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstName" />
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastName" />
                </FormControl>
              </Stack>
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" name="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea rows={3} resize="none" name="message" />
                <FormHelperText>What can we help with?</FormHelperText>
              </FormControl>
            </Stack>
            <Divider />
            <Flex direction="row-reverse" py="4" px={{ base: "4", md: "6" }}>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
