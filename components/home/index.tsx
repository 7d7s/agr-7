
import Hero from "@/components/home/hero";
import FeatureCards from "@/components/common/FeatureCard";
import WhyUs from "@/components/home/whyus";
import Contact from "@/components/home/contact";
import FAQs from "@/components/faqs";
import Blogs from "@/components/home/blog";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/services";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeatureCards/>
            <AboutUs/>
            <WhyUs />
            <Services/>
            <Contact/>
            <FAQs/>
            <Blogs/>
        </div>
    );
};  

export default Home;