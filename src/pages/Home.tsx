import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import CardSection from "../components/CardSection";
import InfoSection from "../components/InfoSection";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <NavBar />
      <HeroImage />
      <CardSection />
      <InfoSection />
    </>
  );
}

export default Home;
