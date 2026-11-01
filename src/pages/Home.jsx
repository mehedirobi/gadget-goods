
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import ExclusiveDeals from "../components/ExclusiveDeals";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <ExclusiveDeals />
      <BestSellers />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
    </>
  );
};

export default Home;
