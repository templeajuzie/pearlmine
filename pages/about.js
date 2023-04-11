import Identity from "@/components/About/Identity";
import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const About = () => {
    return (
        <div className="aboutGeneral">
            <Navbar />
            <Identity />
            <Footer />
        </div>
    );
}

export default About;