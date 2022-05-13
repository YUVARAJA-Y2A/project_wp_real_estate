import Banner from "./Banner";
import BannerAd from "./BannerAd";
import ClientsReview from "./ClientsReview";
import Content from "./Content";
import ContentTitle from "./ContentTitle";
import Footercenter from "./Footercenter";
import Footerend from "./Footerend";
import Footerfinal from "./Footerfinal";
import FooterTop from "./FooterTop";
import NavHead from "./NavHead";
import NavMain from "./NavMain";
import Ourblog from "./Ourblog";
import Pagecontent from "./Pagecontent";


function App() {
  return (
    <div>
      <NavHead />
      <NavMain />
      <Banner />
      <BannerAd />
      <ContentTitle />
      <Content />
      <Pagecontent />
      <ClientsReview />
      <Ourblog />
      <FooterTop />
      <Footercenter />
      <Footerend />
      <Footerfinal />
    </div>
  );
}

export default App;
