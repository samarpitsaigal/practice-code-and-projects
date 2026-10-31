import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortFolioSection from "./Components/PortFolioSection";
import PriceSection from "./Components/PriceSection";
import Transections from "./Components/Transections";
import INfoCard from "./Components/INfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout titel="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr) ",
          xl: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={{base: 1, xl: 2}}>
          <PortFolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transections />
        </GridItem>
        <GridItem colSpan={1}>
          <INfoCard inverted={false} imgUrl="/dot_bg.svg" text= "Learn more about Loans - Keep your Bitcoin, access it's value without selling it" tagText="Loan" />
        </GridItem>
        <GridItem colSpan={1}> 
          <INfoCard inverted={true} imgUrl="grid_bg.svg" tagText="Contect" text="Learn more about our real state, mortage, and corporate account services"  />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
