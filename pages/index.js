import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Alert } from "flowbite-react";
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Home/Header';
import Team from '@/components/Team/Team';
import Partner from '@/components/Home/Partners';
import Features from '@/components/Home/Features';
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
