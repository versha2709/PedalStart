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
        <br />
        <br />
        <br />
        <About />
        <br />
        <br />
        <br />
        <br />
        <Community />
        <br /> <br />
        <br />
        <br />
        <Offerings />
        <br />
        <br />
        <br />
        <br />
        <Selection />
        <br />
        <br />
        <br />
        <MentorsAndInvestors />
        <br />
        <br />
        <br />
        <Portfolio />
        <br />
        <br />
        <br />
        <br />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
