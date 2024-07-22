import React from 'react';
import VideoPlaceholder from "../assets/VideoPlaceholder.png";

const StorySection = () => {
  return (
    <section className="text-center">
      <h2 className="text-base font-semibold bg-secondary p-2 text-white">Our Story: Sidharth's Journey to Quality Education</h2>
      <div className="mt-4">
        <img src={VideoPlaceholder} alt="Our Story" className="mx-auto rounded-lg shadow-lg"/>
      </div>
    </section>
  );
};

export default StorySection;
