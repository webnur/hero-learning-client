import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';

const Courses = () => {

    const [categories, setCategories] = useState([])
    const courses = useLoaderData();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (
        <div className="lg:grid grid-cols-4 gap-4 mt-7">
            <div className="ml-4 col-span-1">
                <ul className="menu bg-base-200 w-56 p-2 rounded-box" >

                    {
                        categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`} className='mx-auto'>{category.name}</Link></li>)
                    }
                </ul>
            </div>


            <div className="col-span-3">
                <div className='lg:grid grid-cols-3 gap-4 lg:mr-5 sm:mr-0'>
                    {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
                </div>


            </div>
        </div>
    );
};

export default Courses;