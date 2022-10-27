import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={courseDetails.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{courseDetails.name}</h1>
                    <p className="py-6">{courseDetails.description}</p>
                    <p className='mb-2'><span>Published Date:{courseDetails.published_date}</span></p>
                    <p className='mb-2 text-2xl'>Price: {courseDetails.price}</p>
                    <button className="btn btn-primary">Get Premium Access</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;