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
      <Flex minWidth="max-content" alignItems="center" gap="2" py={{ base: "3", lg: "4" }} px={{ base: "3", lg: "4" }} >
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
                    color="black"
                    _hover={{ color: "blue.500" }}
                  >
                    About Us
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/services"
                    color="black"
                    _hover={{ color: "blue.500" }}
                  >
                    Services
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/resources"
                    color="black"
                    _hover={{ color: "blue.500" }}
                  >
                    Resources
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="/contact"
                    color="black"
                    _hover={{ color: "blue.500" }}
                  >
                    Contact
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
    // </Container>
  );
}
