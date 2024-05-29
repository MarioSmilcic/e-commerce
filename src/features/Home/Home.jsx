import Landing from "./components/Landing";
import Presentations from "./components/Presentations";
import Showcase from "./components/Showcase";
import Packages from "./components/Packages";
import ProductInformation from "./components/ProductInformation";
import Recommendations from "./components/Recommendations";
import LastPage from "./components/LastPage";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <Presentations />
      <Showcase />
      <Packages />
      <ProductInformation />
      <Recommendations />
      <LastPage />
      <Footer />
    </>
  );
};

export default Home;
