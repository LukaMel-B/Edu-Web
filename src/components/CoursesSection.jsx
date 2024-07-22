import React from 'react';

const courses = [
  { id: 1, title: 'CBSE / ICSE', subtitle: 'V - IX Std' },
  { id: 2, title: 'CBSE / ICSE', subtitle: 'X Std' },
  { id: 3, title: 'Workshops', subtitle: 'Anyone' },
];

const CoursesSection = () => {
  return (
    <section className="text-center py-12 relative">
      <div className='bg-blue-100 p-6'>
      <h2 className="absolute top-6 left-0 right-0 text-xl bg-secondary text-white w-max mx-auto px-6 py-1.5 rounded-full">Courses Offered</h2>
      <div className="flex flex-wrap justify-center mt-8">
        {courses.map((course) => (
          <div key={course.id} className="m-4 h-[200px] bg-white rounded-lg shadow-lg w-60 flex flex-col justify-center items-center relative">
            <h3 className="text-lg font-bold text-[#358cc5]">{course.title}</h3>
            <p className="mt-2 text-[#358cc5] font-bold">{course.subtitle}</p>
            <button className="absolute -bottom-4 px-4 py-1.5 bg-secondary text-white font-thin rounded-full">View More</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CoursesSection;
