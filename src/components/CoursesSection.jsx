import React, { useState } from 'react';
import Image1 from '../assets/Image1.svg';
import Image2 from '../assets/Image2.svg';
import Popup from './Popup';

const courses = [
  { id: 1, title: 'CBSE / ICSE', subtitle: 'V - IX Std', image: Image1 },
  { id: 2, title: 'CBSE / ICSE', subtitle: 'X Std', image: Image1 },
  { id: 3, title: 'Workshops', subtitle: 'Anyone', image: Image2 },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewMoreClick = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="text-center py-12 relative">
      <div className='bg-blue-100 py-9 px-2'>
        <h2 className="absolute top-6 left-0 right-0 text-xl bg-secondary text-white w-max mx-auto px-6 py-1.5 rounded-full">Courses Offered</h2>
        <div className="flex justify-center gap-3 md:gap-4 w-[100%]">
          {courses.map((course) => (
            <div key={course.id} className="w-[100%] md:w-[150px] h-[150px] p-2 bg-white rounded-lg shadow-lg  flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${course.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <h3 className="text-sm font-bold text-[#358cc5] whitespace-nowrap">{course.title}</h3>
              <p className="mt-2 text-[#358cc5] font-bold whitespace-nowrap">{course.subtitle}</p>
              <button className="absolute -bottom-4 px-2 md:px-4 py-1.5 bg-secondary text-xs text-white rounded-full" onClick={() => handleViewMoreClick(course)}>View More</button>
            </div>
          ))}
        </div>
      </div>
      {selectedCourse && <Popup course={selectedCourse} onClose={handleClosePopup} />}
    </section>
  );
};

export default CoursesSection;
