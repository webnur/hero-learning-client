import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';

const Course = () => {
    const courses = useLoaderData();
   
    
    return (
        <div>
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Course;