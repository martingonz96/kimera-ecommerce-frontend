import { Home } from "@/components/home";
import BasicLayout from "@/layout/BasicLayout/BasicLayout";
import Separator from "@/components/shared/Separator";
import { Container } from "semantic-ui-react";
import BarTrust from "@/components/shared/BarTrust";

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastPrinter />
        <Separator height={100} />
        <Container>
          <Home.LatesPrinters title="Ultimos lanzamientos" />
        </Container>
        <Separator height={100} />
        <Separator height={100} />
        <BarTrust />
      </BasicLayout>
    </>
  );
}
