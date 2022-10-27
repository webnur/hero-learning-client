import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
// import jsPDF from 'jspdf';
import Pdf from "react-to-pdf";
const ref = React.createRef();


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);

    return (
        <div className="hero min-h-screen bg-base-200"  ref={ref}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={courseDetails.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className='flex items-center justify-between'>
                        <h1 className="text-5xl font-bold">{courseDetails.name}</h1>


                        <Pdf targetRef={ref} filename="course.pdf">
                            {({ toPdf }) => <FaFilePdf style={{cursor: 'pointer'}}  onClick={toPdf} className='text-2xl ml-3'></FaFilePdf>}
                        </Pdf>

                        
                    </div>
                    <p className="py-6">{courseDetails.description}</p>
                    <p className='mb-2'><span>Published Date:{courseDetails.published_date}</span></p>
                    <p className='mb-2 text-2xl'>Price: {courseDetails.price}</p>
                    <button className="btn btn-primary"><Link to='/checkout'>Get Premium Access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;