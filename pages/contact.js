import ContactComp from "@/components/Contact/ContactComp";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Contact = () => {
    return ( 
        <div className="generalConatct">
            <Navbar />
            <ContactComp />
            <Footer/>
        </div>
     );
}
 
export default Contact;