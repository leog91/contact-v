import React from "react";
import { Box, Divider } from "@chakra-ui/react";

export const ContactList = ({
  filtered,
  selectedContact,
  setSelectedContact,
}) => {
  return (
    <Box>
      {filtered.map((c) => (
        <Box key={c.login.uuid}>
          <Box
            onClick={() => setSelectedContact(c)}
            m={"5px"}
            p={"5px"}
            pl={"20px"}
            boxShadow={"md"}
            cursor={"pointer"}
            bg={
              selectedContact &&
              c.email === selectedContact.email &&
              "blackAlpha.800"
            }
            borderRadius={"full"}
            color={
              selectedContact && c.email === selectedContact.email
                ? "white"
                : "black"
            }
          >
            {c.name.last} {c.name.first}
          </Box>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};
