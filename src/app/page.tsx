import Footer from "@/components/global/FooterSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import HomeBannerVideo from "@/components/home/HomeBannerVideo";
import OurBlogSection from "@/components/home/OurBlogSection";
import OurClientSection from "@/components/home/OurClientSection";
import OurProductsSection from "@/components/home/OurProductsSection";
import OurProjectSection from "@/components/home/OurProjectSection";
import OurRecentWorkSection from "@/components/home/OurRecentWorkSection";
import OurServiceSection from "@/components/home/OurServiceSection";
import SomeDesignSection from "@/components/home/SomeDesignSection";
import TechnologySection from "@/components/home/TechnologySection";
import WhyUsSection from "@/components/home/WhyUsSection";
import MainPageTemplate from "@/template/MainPageTemplate";


export default function Home() {
  return (
    <MainPageTemplate>
      <HomeBannerVideo/>
      <AboutUsSection/>
      <TechnologySection/>
      <OurServiceSection/>
      <OurProductsSection/>
      <OurProjectSection/>
      <OurClientSection/>
      <WhyUsSection/>
      <OurRecentWorkSection/>
      <SomeDesignSection/>
      <OurBlogSection/>
      <Footer/>
    </MainPageTemplate>
  );
}
