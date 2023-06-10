"use client";

import Link from "next/link";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Box h="calc(100vh)">
        <NavBar />
        <Box
          h="calc(87vh)"
          backgroundImage="url('/city.png')"
          backgroundPosition="top"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          opacity={70}
          backdropBlur={30}
        >
          {/* <Box py={{ base: "6", lg: "6" }} px={{ base: "3", lg: "4" }}>
            Text
          </Box> */}
          <Grid
            h="500px"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
          >
            {/* <GridItem colSpan={2} h="10" bg="tomato" /> */}
            <GridItem
              rowStart={2}
              rowEnd={3}
              colStart={2}
              colEnd={7}
              // bg="papayawhip"
            >
              <Text fontSize="25px" color="white">
                At Houst Consulting, our practice is shaped by our
              </Text>
              <Text fontSize="100px" color="white" fontWeight="medium">
                values
              </Text>
              <Text fontSize="40px" color="white">
                of integrity, commitment, and professional ethics.
              </Text>
              <Text fontSize="15px" color="white">
                Since the inception in 2008, the law firm of Houst Consulting
                has been dedicated to providing client services marked by the
                highest quality and value. We value long term relationship with
                our clients and work hard to understand the needs, concerns, and
                expectation of our clients.
              </Text>
            </GridItem>
          </Grid>
        </Box>
        {/* <Image src='/city.jpeg'/> */}
      </Box>
      <Footer />
    </>
  );
}
