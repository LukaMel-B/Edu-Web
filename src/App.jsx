import React from 'react';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import CoursesSection from './components/CoursesSection';

const App = () => {
  return (
    <div className='bg-white'>
      <HeroSection />
      <StorySection />
      <CoursesSection />
    </div>
  );
};

export default App;
