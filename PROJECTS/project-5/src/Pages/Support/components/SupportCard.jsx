import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const SupportCard = ({ leftCard, icon, titel, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack mxW="24rem">
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {titel}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}{" "}
        </Text>
      </Stack>
      {leftCard}
    </Flex>
  );
};

export default SupportCard;
