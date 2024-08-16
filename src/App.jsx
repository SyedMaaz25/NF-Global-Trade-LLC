import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./Theme";
import TopHeader from "./components/partials/TopHeader";
import Header from "./components/partials/Header";
import HeroSection from "./components/HeroSection";
import ShopByBrands from "./components/Shop-By-Brands";
import NewArrivals from "./components/NewArrivals";
import OurCollections from "./components/OurCollection";
import Testimonials from "./components/Testimonials";
import TopFooter from "./components/partials/TopFooter";
import Footer from "./components/partials/Footer";
import OnLoad from "./components/OnLoad"

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <TopHeader />
        <Header />
        <HeroSection />
        <ShopByBrands/>
        <NewArrivals/>
        <OurCollections/>
        <Testimonials/>
        <TopFooter/>
        {/* <OnLoad/> */}
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;