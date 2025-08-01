// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import { ServicePage } from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";
import AIModal from "./Components/AIModal";
import Careers from "./Pages/Careers";
import WorkPage from "./Pages/WorkPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions";
import CustomSoftwareModal from "./Components/CustomSoftwareModal";
import WebDevModal from "./Components/WebDevModal";
import AppDevModal from "./Components/AppDevModal";
import SEOModal from "./Components/SEOModal"; 
import DigitalMarketing from "./Components/DigitalMarketingModel";
import SocialMediaHandling from "./Components/SocialMediaHandling";
// import PaidAdsEmailMarketing from "./Components/PaidAdsEmailMarketing";
import PaidAdsEmailModal from "./Components/PaidAdsEmailMarketing";

// ScrollToTop component inside App.jsx
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Use "smooth" for smooth scroll
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/AIModal" element={<AIModal />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/customsoftwaremodel" element={<CustomSoftwareModal />} />
        <Route path="/webdevmodel" element={<WebDevModal />} />
        <Route path="/appdevmodal" element={<AppDevModal />} />
        <Route path="/seomodel" element={<SEOModal />} />
        <Route path="/digitalmarketingmodel" element={<DigitalMarketing />} />
        <Route path="/socialmediamodel" element={<SocialMediaHandling />} />
        <Route path="/paidads" element={<PaidAdsEmailModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
