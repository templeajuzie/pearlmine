import AboutUsComp from "@/components/About/AboutUsComp";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/NavbarComp";

const About = () => {
    return (
        <div className="aboutGeneral bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 border-b">
            <Navbar />
            <AboutUsComp />
            <Footer />
        </div>
    );
}

export default About;