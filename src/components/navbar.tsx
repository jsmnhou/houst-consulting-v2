"use client";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Spacer,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { Logo } from "./Logo";
import { Link } from "@chakra-ui/next-js";
// import logo from "@/img/Logo.png";

export default function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    // <Container py={{ base: "3", lg: "4" }}>
    <Container
      maxW="150ch"
      // pt={{ base: "5", lg: "5" }}
      py={{ base: "6", lg: "6" }}

      px={{ base: "3", lg: "4" }}
      // alignItems="center"
      h="calc(13vh)"
    >
      <Flex px={{ base: "3", lg: "4" }}>
        <Box>
          <Link href="/">
            <Logo />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing="4">
            {isDesktop ? (
              <ButtonGroup variant="tertiary" spacing="1">
                {/* <Button aria-current="page">Dashboard</Button> */}
                <Button>
                  <Link
                    href="/about-us"
                    color="grey"
                    _hover={{ color: "blue.500" }}
                  >
                    <Text fontSize="14px">About Us</Text>
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/services"
                    color="grey"
                    _hover={{ color: "blue.500" }}
                  >
                    <Text fontSize="14px">Services</Text>
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/resources"
                    color="grey"
                    _hover={{ color: "blue.500" }}
                  >
                    <Text fontSize="14px">Resources</Text>
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/contact"
                    color="grey"
                    _hover={{ color: "blue.500" }}
                  >
                    <Text fontSize="14px">Contact</Text>
                  </Link>
                </Button>
              </ButtonGroup>
            ) : (
              <IconButton
                variant="tertiary"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Box>
      </Flex>
    </Container>
    // </Container>
  );
}
