import DashboardLayout from "../../Components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransectionTable from "./Components/TransectionTable";
import { BsSearch } from "react-icons/bs";

const Transection = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 349,
    },
    {
      name: "Trade",
      count: 500,
    },
  ];

  return (
    <DashboardLayout titel="Transection">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Expport CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between" w="full">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab} display="flex" gap="2">
                  {tab.name}{" "}
                  <Tag borderRadius="full" colorScheme="gray">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <input type="tel" placeholder="enter..." pl="9px"/>
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransectionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transection;
