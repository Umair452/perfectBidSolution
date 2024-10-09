import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import ContactUs from "./components/ContactUs";
import ServiceCardsScreen from "./screens/ServiceCardsScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/services" element={<ServiceCardsScreen />} />
        <Route path="/portfolio" element={<PortfolioScreen />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
