import React, { useState, useEffect } from "react";
import PersonalizedLearning from "../assets/PersonalizedLearning1.svg";
import Slider2 from "../assets/Slider21.svg";
import Slider3 from "../assets/Slider31.svg";
import Logo from "../assets/Logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const slides = [
  {
    title: "One - One Tech Oriented Learning",
    desc: "Experience personalized, tech-focused learning with one-on-one tuition at your home. Our expert tutors tailor their teaching to meet each student's unique needs and pace.",
    button: "Book a Demo",
    image: PersonalizedLearning,
  },
  {
    title: "Innovative Tech Courses for Young Minds",
    desc: "From AI to Robotics, explore our range of tech courses designed to equip students with the skills of the future.",
    button: "Tuition Enquiry",
    image: Slider2,
  },
  {
    title: "Shaping Futures Together",
    desc: "Are you an expert in your field and passionate about teaching? Join us as a tutor and help shape the future of young minds.",
    button: "Tutor Enquiry",
    image: Slider3,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full h-screen relative">
      <div className="relative w-full h-full bg-primary"
           style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 87%, 85% 100%, 17% 100%, 0% 87%)" }}>
        <img src={Logo} alt="logo" className="absolute top-4 left-4 w-40 h-40 md:w-44 md:h-44 z-20" />
        <div className="relative w-full h-full flex md:flex-row flex-col items-start md:items-center bg-primary px-8 md:px-16">
          <div className="flex-1 py-4 md:py-8 overflow-hidden">
            <h1 className="text-5xl md:text-[3rem] font-bold text-secondary leading-[3.2rem]">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-6 text-4xl  md:text-[1.5rem]">{slides[currentSlide].desc}</p>
            {slides[currentSlide].button && (
              <button className="mt-6 mt-2 px-7 py-4 bg-blue-500 text-white text-xl rounded-full">
                {slides[currentSlide].button}
              </button>
            )}
          </div>
          <div className="flex-1 md:mt-0 flex justify-center items-center relative py-4 md:py-8 h-full">
            <img
              src={slides[currentSlide].image}
              alt="Slide Image"
              className="mx-auto object-contain w-[90%] h-[90%] transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
