import React from 'react'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/StorySection'
import CoursesSection from '../components/CoursesSection'

const Home = () => {
  return (
    <div className="lato-regular">
      <HeroSection />
      <StorySection />
      <CoursesSection />
    </div>
  )
}

export default Home
