import BlogComp from "@/components/Blog/BlogComp";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/NavbarComp";


const OurBlog = () => {
    return (
        <div className="blogGenerallg">
            <Navbar />
            <div className="body">
                <BlogComp />
            </div>
            <Footer />
        </div>
    );
}

export default OurBlog;