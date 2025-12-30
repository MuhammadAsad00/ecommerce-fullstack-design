import { recommended } from "../data/Data";
import CategoryGroup from "../ui/CategoryGroup.jsx";
import categoryBg1 from "../../assets/Image/background image/category-back.jpg";
import categoryBg2 from "../../assets/Image/background image/category-back2.png";
import ElectronicsGadgets from "../ui/ElectronicsGadgets.jsx";
import RecommendedItems from "./RecommendedItems.jsx";
import SectionHero from "./SectionHero.jsx";
import SectionDealOffers from "./SectionDealOffers.jsx";
import SectionInquiry from "./SectionInquiry.jsx";
import SectionServices from "./SectionServices.jsx";
import SectionSuppliers from "./SectionSuppliers.jsx";

const Hero = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 space-y-6">
        {/* Section-Hero Component */}
        <SectionHero />
        {/* Deals & Offer Component */}
        <SectionDealOffers />

        {/* CATEGORY (Double Block) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          <CategoryGroup title="Home and outdoor" bgImg={categoryBg1} />
          <ElectronicsGadgets
            title="Consumer electronics"
            bgImg={categoryBg2}
          />
        </div>

        {/* Inquiry Component */}
        <SectionInquiry />

        {/* Recommended Items Component */}
        <RecommendedItems items={recommended} />

        {/* Services Component */}
        <SectionServices />

        {/* Suppliers by Region Component */}
        <SectionSuppliers />
      </main>
    </>
  );
};

export default Hero;
