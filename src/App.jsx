import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PricingPlan from "./Pages/PricingPlan";
import "./App.css";
import FormMeritPage from "./Pages/FormMeritPage";
import FormTutorPage from "./Pages/FormTutorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book-demo" element={<FormMeritPage/>}/>
        <Route path="/tutition-enquiry" element={<FormTutorPage/>}/>
        <Route path="/pricingplan" element={<PricingPlan />} />
      </Routes>
    </Router>
  );
};

export default App;
