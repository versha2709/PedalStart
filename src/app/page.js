import About from "@/components/About/About";
import Community from "@/components/Community/Community";
import FAQ from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import MentorsAndInvestors from "@/components/Investors/Investors";
import MainPage from "@/components/MainPage/MainPage";
import Navbar from "@/components/Navbar/Navbar";
import Offerings from "@/components/Offering/Offering";
import Portfolio from "@/components/Porfolio/Porfolio";
import Selection from "@/components/Selection/Selection";

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <MainPage />
        <About />
        <Community />
        <Offerings />
        <Selection />
        <MentorsAndInvestors />
        <Portfolio />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
