import FAQComp from "@/components/FAQ/FAQComp";
import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const About = () => {
    return (
        <div className="aboutGeneral">
            <Navbar />
            <FAQComp />
            <Footer />
        </div>
    );
}

export default About;