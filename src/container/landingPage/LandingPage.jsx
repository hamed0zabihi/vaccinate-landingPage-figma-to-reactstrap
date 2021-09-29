import React from "react";
import HeaderSection from "../../component/landing/header/HeaderSection";
import HeroSection from "../../component/landing/hero/HeroSection";
import StepsToGetVaccinatedSection from "../../component/landing/stepstogetvaccinated/StepsToGetVaccinatedSection";
import AboutVaccinatedSection from "../../component/landing/aboutvaccinated/AboutVaccinatedSection";
import LearnVaccineSection from "../../component/landing/learnvaccine/LearnVaccineSection";
import DownloadAppSection from "../../component/landing/downloadapp/DownloadAppSection";
import BlogSection from "../../component/landing/blog/BlogSection";
import FinalInvitationSection from "../../component/landing/finalinvitation/FinalInvitationSection";
import FooterSection from "../../component/landing/footer/FooterSection";

const LandigPage = () => {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <StepsToGetVaccinatedSection />
      <AboutVaccinatedSection />
      <LearnVaccineSection />
      <DownloadAppSection />
      <BlogSection />
      <FinalInvitationSection />
      <FooterSection />
    </>
  );
};

export default LandigPage;
