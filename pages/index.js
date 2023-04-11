import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Header from '@/components/Home/Header';
import Services from '@/components/Services/Services';
import Newsletter from '@/components/Newsletter/Newsletter';
import Testimonials from '@/components/Testimonials/Testimonials';
import Identity from '@/components/About/Identity';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Header />
      <Identity />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
