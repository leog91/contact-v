import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";

export const Contact = ({ contact, setSelectedContact }) => {
  return (
    <Center w={"320px"} py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <CloseButton onClick={() => setSelectedContact(null)} size="lg" />

        <Center>
          <Avatar
            size={"2xl"}
            src={contact.picture.large}
            alt={contact.name.last}
            mb={4}
            pos={"relative"}
          />
        </Center>
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {contact.name.title} {contact.name.last} {contact.name.first}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{contact.login.username}
        </Text>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          📍 {contact.location.city}, {contact.location.country}
        </Text>

        <a href={`tel:${contact.phone}`}>
          {" "}
          <Text
            _hover={{
              background: "blackAlpha.200",
              borderRadius: "full",
            }}
            fontWeight={600}
            mb={4}
          >
            ☎️ {contact.phone}{" "}
          </Text>{" "}
        </a>

        <a href={`tel:${contact.cell}`}>
          <Text
            _hover={{
              background: "blackAlpha.200",
              borderRadius: "full",
            }}
            fontWeight={600}
            mb={4}
          >
            📱 {contact.cell}
          </Text>
        </a>

        <a href={`mailto:${contact.email}`}>
          <Text
            _hover={{
              background: "blackAlpha.200",
              borderRadius: "full",
            }}
            fontWeight={600}
            mb={4}
          >
            📧 {contact.email}
          </Text>{" "}
        </a>
      </Box>
    </Center>
  );
};
