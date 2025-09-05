import Production from "@/components/Production";
import Slider from "@/components/Slider";
import AboutPage from "../pages/AboutPage";
import ContactPage from '../pages/ContactPage';

const Home = () => {
  return (
    <>
      <Slider />
      <AboutPage />
      <Production />
      <ContactPage />
    </>
  );
};

export default Home;
