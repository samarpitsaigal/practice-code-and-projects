import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContectCard from "./components/ContectCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import INfoCard from "../Dashboard/Components/INfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack gap="4rem">
              <SupportCard
        leftCard={<ContectCard />}
        icon={IoMdMail}
        text="          Have a question or just to know more? Feel free to reach out to
          us."
        titel="Contact Us"
      />
      <SupportCard
        leftCard={<INfoCard inverted={true} imgUrl="grid_bg.svg" tagText="Contect" text="Learn more about our real state, mortage, and corporate account services"  />}
        icon={AiTwotoneMessage}
        text="Don't have time to wait for the answer? Chat with us now"
        titel="Live Chat"
      />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
