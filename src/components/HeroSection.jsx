import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider2 from "../assets/Slider2.svg";
import Slider3 from "../assets/Slider3.svg";
import PersonalizedLearning from "../assets/PersonalizedLearning.svg";
import Logo from "../assets/Logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const slides = [
  {
    title: "One - One Tech Oriented Learning",
    desc: "Experience personalized, tech-focused learning with one-on-one tuition at your home. Our expert tutors tailor their teaching to meet each student's unique needs and pace.",
    button: "Book a Demo",
    image: PersonalizedLearning,
    path:"/book-demo",
  },
  {
    title: "Innovative Tech Courses for Young Minds",
    desc: "From AI to Robotics, explore our range of tech courses designed to equip students with the skills of the future.",
    button: "Tuition Enquiry",
    image: Slider2,
    path:"/tutition-enquiry",
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
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Reduced the interval time to 3000ms for a better slider view
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  const handleClick = (path) => {
    navigate(path);
  };


  return (

    <div className="hero-container pb-5 md:pb-20">
      <section className="mx-auto hero-section">
        <div className="bg-primary">
          <img src={Logo} alt="logo" className="w-20 h-20 md:w-40 md:h-40" />
        </div>
        <div className="p-2 md:p-6 h-[260px] md:h-[500px] flex md:flex-row justify-center items-start md:items-center">
          <div className="flex-1 p-2">
             <h1 className="text-sm md:text-[3rem] font-bold text-secondary leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-4 text-sm md:text-[1.56rem] leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            {slides[currentSlide].button && (
              <button className="mt-5 px-7 py-4 bg-blue-500 text-white text-[1.5rem] text-sm rounded-full self-start"
              onClick={() => handleClick(slides[currentSlide].path)}>

                {slides[currentSlide].button}
              </button>
            )}
          </div>
          <div className="flex-1  md:mt-0 ">
            {/* <KeyboardArrowLeftIcon
            fontSize="large"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-blue-500"
            onClick={prevSlide}
            /> */}
            <img
              src={slides[currentSlide].image}
              alt="Slide Image"
              className="mx-auto object-contain w-[90%] h-[90%] transition-transform duration-1000 ease-in-out"
            />
            {/* <KeyboardArrowRightIcon
            fontSize="large"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-blue-500"
            onClick={nextSlide}
            /> */}
          </div>
        </div>
        {/* <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
          key={index}
          className={`w-2 h-2 mx-1 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
          ></div>
          ))}
          </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
