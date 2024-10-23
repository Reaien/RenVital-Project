import NavBar from "../components/Global/NavBar";
import HeroImage from "../components/Home/HeroImage";
import CardSection from "../components/Home/CardSection";
import InfoSection from "../components/Info/InfoSection";

import Footer from "../components/Global/Footer";


type Props = {};

function Home({}: Props) {
  return (
    <>
      <NavBar />
      <HeroImage />
      <CardSection />
      <InfoSection />
      <Footer/>
    </>
  );
}

export default Home;
