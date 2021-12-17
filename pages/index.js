import Head from "next/head";
import { useState, useEffect } from "react";

import { Box, Button, Center, Flex, Text, Divider } from "@chakra-ui/react";
import contactsData from "../data/contacts.JSON";
import { sortBySurname } from "../utils/utils";
import { Contact } from "../components/contact";
import { Tabs } from "../components/tabs";
import { ContactList } from "../components/contactList";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // contacts pre-sorted with method in `utils`, I'm asuming this is a contact list and stored sorted.
    setContacts(contactsData.data);

    //if data is coming from an api(unsorted)
    // setContacts(sortBySurname(contactsData.data));
  }, []);

  useEffect(() => {
    //Build tabs based on surname removing duplicates
    contacts &&
      contacts.length > 0 &&
      setTabs([...new Set(contacts.map((c) => c.name.last.charAt(0)))]);
  }, [contacts]);

  useEffect(() => {
    if (selectedTab) {
      setFiltered(
        contacts.filter((c) => c.name.last.charAt(0) === selectedTab)
      );
    } else {
      setFiltered(contacts);
    }
  }, [selectedTab, contacts]);

  return (
    <div>
      <Head>
        <title>Contact-V</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center bg={"blackAlpha.800"}>
          <Text
            fontSize={"4xl"}
            fontWeight={"extrabold"}
            color={"white"}
            m={"5px"}
          >
            {" "}
            Contacts-V{" "}
          </Text>
        </Center>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <Center m={"5px"}>
          <Button
            onClick={() => {
              setSelectedTab(null);
              setSelectedContact(null);
            }}
            bg={"blackAlpha.800"}
            colorScheme={"blackAlpha"}
          >
            Clear Selection
          </Button>
        </Center>
        <Center>
          <Flex>
            <Box m={"10px"} mt={"35px"} w={"180px"} bg={"whiteAlpha.50"}>
              <ContactList
                filtered={filtered}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
            </Box>
            <Box m={"10px"}>
              {selectedContact ? (
                <Contact
                  contact={selectedContact}
                  setSelectedContact={setSelectedContact}
                />
              ) : (
                <Box bg={"whiteAlpha.100"} w={"320px"} h={"654px"}></Box>
              )}
            </Box>
          </Flex>
        </Center>
        <Center bg="blackAlpha.800" w={"100%"} h={"50px"}>
          <Text fontWeight={"semibold"} color={"white"}>
            NL
          </Text>
        </Center>
      </main>
    </div>
  );
}
