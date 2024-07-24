import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("Rising Star");

  const plans = [
    {
      title: "Starter Scholar",
      price: "$499",
      features: [
        "Tech Integrated Tuition",
        "Career & Mental Guidance",
        "Evaluation Session",
        "Mobile App Security",
        "Fixed Timetable",
        "Smart Library",
      ],
      label: "Basic",
      Button: "Get Started",
    },
    {
      title: "Rising Star",
      price: "$999",
      features: [
        "All in Starter Scholar",
        "Smart Lab",
        "Doubt Clearance",
        "CCTV Camera",
        "Revision Session",
      ],
      label: "Most Popular",
      Button: "Upgrade Now",
    },
    {
      title: "Prime Scholar",
      price: "$1499",
      features: ["All in Rising Star", "AR Integrated", "Flexible Timetable"],
      label: "Premium",
      Button: "Choose Plan",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8 lato-regular">
      <div className="flex w-full">
        <Link to="/" className="w-[20%] md:w-[10%]">
          <img src={Logo} alt="logo" className="w-24 h-24" />
        </Link>
        <h1 className="w-[80%] md:w-[80%] text-2xl md:text-3xl mt-5 font-bold text-center text-gray-900">
          Sapience Edu Connect Pricing Plan
        </h1>
      </div>
      <div className="flex items-center justify-center p-6 md:p-0">
        <div className="flex flex-col lg:flex-row space-y-10 mt-8 lg:space-y-0 lg:space-x-6 w-full max-w-3xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between w-full md:w-1/3 p-4 mx-auto cursor-pointer ${
                selectedPlan === plan.title
                  ? "bg-blue-800 text-white"
                  : "bg-white"
              } rounded-xl shadow-2xl`}
              style={{
                transition: "all 0.3s",
                transform:
                  selectedPlan === plan.title ? "scale(1.05)" : "scale(1)",
                zIndex: selectedPlan === plan.title ? 1 : 0,
                border:
                  selectedPlan === plan.title
                    ? "2px solid transparent"
                    : "2px solid #e5e7eb",
              }}
              onClick={() => setSelectedPlan(plan.title)}
            >
              <div
                className={`absolute w-[130px] text-center -top-4 left-4  py-1 text-sm font-bold  rounded-lg ${
                  selectedPlan === plan.title
                    ? "bg-[#51ccde] text-black"
                    : "bg-blue-700 text-white"
                }`}
              >
                {plan.label}
              </div>
              <div
                className={`text-center border-b ${
                  selectedPlan === plan.title ? "border-white" : ""
                } pb-4`}
              >
                <h2
                  className={`text-xl font-semibold ${
                    selectedPlan === plan.title
                      ? "text-white"
                      : "text-gray-9000"
                  }`}
                >
                  {plan.title}
                </h2>
              </div>
              <div className="flex-1 mt-4">
                <h3
                  className={`text-lg font-semibold ${
                    selectedPlan === plan.title ? "text-white" : "text-gray-900"
                  }`}
                >
                  Features
                </h3>
                <ul className="mt-2 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 ${
                          selectedPlan === plan.title
                            ? "text-white"
                            : "text-blue-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <span
                  className={` text-start text-sm font-semibold ${
                    selectedPlan === plan.title ? "text-white" : "text-black"
                  }`}
                >
                  Price
                </span>
                <p
                  className={`text-4xl font-extrabold mt-1 ${
                    selectedPlan === plan.title ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                  <span
                    className={`text-sm ml-2 ${
                      selectedPlan === plan.title
                        ? "text-white"
                        : "text-gray-500 "
                    }`}
                  >
                    / Month
                  </span>
                </p>
                <button
                  className={`w-[200px] py-1.5 mt-4 ${
                    selectedPlan === plan.title
                      ? "bg-[#51ccde] text-black"
                      : "bg-blue-700 text-white"
                  } font-bold rounded-lg`}
                >
                  {plan.Button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
