// import Image from 'next/image'
// "use client"
import HomeBanner from '@/components/Home/HomeBanner';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/Newsletter';
import TuitionTypes from '@/components/Home/TuitionTypes';
import SuccessStory from '@/components/Home/SuccessStory';
import Statistics from '@/components/Home/Statistics';
import Gallery from '@/components/Home/Gallery';
import Popular from '@/components/Home/Popular';
// import AOS from 'aos';

export default function Home() {
  return (
    <div className="">
      {/* Hello */}
      <HomeBanner />
      <Gallery/> 
      <Popular/>
      <TuitionTypes />
      <Statistics />
      <Testimonial />
      <SuccessStory />
      <Newsletter />
    </div>
  )
}
