import React from "react";
import { Center, Box, Flex } from "@chakra-ui/react";

export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <Center>
      <Flex m={"10px"}>
        {" "}
        {tabs.map((t) => (
          <Box
            cursor={"pointer"}
            onClick={() => setSelectedTab(t)}
            bg={t === selectedTab && "blackAlpha.800"}
            color={t === selectedTab && "white"}
            p={"1px 5px"}
            m={"1"}
            boxShadow={"base"}
            borderRadius={"full"}
            key={t}
            fontWeight={"semibold"}
          >
            {t}
          </Box>
        ))}{" "}
      </Flex>
    </Center>
  );
};
