import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/home/header/Header";
import Advertise from "@/components/home/advertise/Advertise";
import Offer from "@/components/home/offer/Offer";
import TermsAndFaq from "@/components/home/TermsAndFaq/TermsAndFaq";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  const backgroundStyles = {
    backgroundImage: `url(https://i.ibb.co/vVdM8xt/header-bg.webp)`,
    backgroundSize: 'auto 575px',
  };

  return (
    <main>
      <div className="h-[575px]" style={backgroundStyles}>
       <div className="lg:max-w-[1200px] lg:mx-auto w-screen">
       <Navbar />
        <Header />
        <Offer />
        <Advertise />
       </div>
        <TermsAndFaq />
       <Footer />
      </div>
    </main>
  );
}
