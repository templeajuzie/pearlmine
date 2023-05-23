import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/NavbarComp';
import Header from '@/components/Home/Header';
import Services from '@/components/Services/Services';
import Newsletter from '@/components/Newsletter/Newsletter';
import Testimonials from '@/components/Testimonials/Testimonials';
import Header2 from '@/components/Home/Header2';
import AboutUsComp from '@/components/About/AboutUsComp';
import Team from '@/components/Team/Team';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      {/* <Header /> */}
      <Header2 />
      <AboutUsComp />
      <Services />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  )
}
