import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course)
    const { name, photo,duration, id} = course;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={photo} style={{height: '200px'}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">duration: {duration}</h2>
                <p className='text-xl'>{name}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/courseDetails/${id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;