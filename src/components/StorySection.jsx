  import React from 'react';
  import OurStory from "../assets/OurStory.mp4";

  const StorySection = () => {
    return (
      <section className="">
        <h2 className="text-base text-center font-semibold bg-secondary p-2 text-white">Our Story: Sidharth's Journey to Quality Education</h2>
        <div className="">
          <video 
            src={OurStory} 
            alt="Our Story" 
            className="mx-auto rounded-lg md:w-10/12 md:h-[300px] mt-6 md:mt-10" 
            controls 
          />
        </div>
      </section>
    );
  };

  export default StorySection;
