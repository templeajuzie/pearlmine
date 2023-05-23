import AboutUsComp from "@/components/About/AboutUsComp";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/NavbarComp";

const About = () => {
    return (
        <div className="aboutGeneral">
            <Navbar />
            <AboutUsComp />
            <Footer />
        </div>
    );
}

export default About;