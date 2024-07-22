import React from "react";
import PersonalizedLearning  from "../assets/PersonalizedLearning.svg";

const HeroSection = () => {
  return (
    <section className="">
      <div className="p-6 flex flex-co md:flex-row bg-primary rounded-b-[100px]">
        <div className="flex-1">
          <h1 className="text-sm md:text-2xl font-bold text-secondary">
            One - One Tech Oriented Learning
          </h1>
          <p className="mt-4 text-xs md:text-lg">
            Experience personalized, tech-focused learning with one-on-one tuition
            at your home. Our expert tutors tailor their teaching to meet each
            student's unique needs and pace.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full">
            Book a Demo
          </button>
        </div>
        <div className="flex-1 md:flex-[2] mt-6 md:mt-0">
          <img
            src={PersonalizedLearning}
            alt="Our Story"
            className="mx-auto w-[500px] rounded-full"
          /> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
