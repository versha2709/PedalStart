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
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      className="page-container"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Box className="content-wrap" sx={{ flex: 1 }}>
        <MainPage sx={{ mb: 4 }} />
        <About sx={{ mb: 4 }} />
        <Community sx={{ mb: 4 }} />
        <Offerings sx={{ mb: 4 }} />
        <Selection sx={{ mb: 4 }} />
        <MentorsAndInvestors sx={{ mb: 4 }} />
        <Portfolio sx={{ mb: 4 }} />
        <FAQ sx={{ mb: 4 }} />
      </Box>
      <Footer />
    </Box>
  );
}
