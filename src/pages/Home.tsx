import NavBar from "../components/Global/NavBar";
import HeroImage from "../components/Home/HeroImage";
import CardSection from "../components/Home/CardSection";
import InfoSection from "../components/Info/InfoSection";

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
