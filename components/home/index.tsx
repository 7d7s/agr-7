
import Hero from "@/components/home/hero";
import FeatureCards from "@/components/common/FeatureCard";
import WhyUs from "@/components/home/whyus";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeatureCards/>
            <WhyUs />
        </div>
    );
};  

export default Home;