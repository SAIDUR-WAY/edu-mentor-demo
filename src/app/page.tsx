// import Image from 'next/image'
// "use client"
import HomeBanner from '@/components/Home/HomeBanner';
import Statistics from '@/components/Home/Statistics';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/Newsletter';
import TuitionTypes from '@/components/Home/TuitionTypes';
import SuccessStory from '@/components/Home/SuccessStory';
// import AOS from 'aos';

export default function Home() {
  return (
    <div className="">
      {/* Hello */}
      <HomeBanner />
      <TuitionTypes />
      <Statistics />
      <Testimonial />
      <SuccessStory />
      <Newsletter />
    </div>
  )
}
