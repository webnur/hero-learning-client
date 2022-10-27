import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';

const Home = () => {

    const courses = useLoaderData();
    return (
        <div className='mt-5'>

            <div className="hero" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=740&t=st=1666850434~exp=1666851034~hmac=c923d89fed6628559a7cf7bbbca31f65b2141c2088523f888ab49b98a8d1a942")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold mt-5">Welcome to Hero Learning</h1>
                        <p className="mb-5 mt-8 font-medium text-lg">there are most popular web development courses. you can build your career here. and we have expert course instractors. 24 hours support system. student care and many others supports</p>
                        <button className="btn btn-primary my-10"><Link to='/courses'>Get Started</Link></button>
                    </div>
                </div>
            </div>

            <div>
                <div className='my-10'>
                    <h2 className='text-center text-3xl font-bold'>Our Courses</h2>
                    <p className='text-center text-2xl '>There Post Popular Courses</p>
                </div>

                <div className='container lg:grid grid-cols-3 gap-4 lg:mr-5 sm:mr-0 mx-auto'>
                    {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
                </div>
            </div>




        </div>
    );
};

export default Home;