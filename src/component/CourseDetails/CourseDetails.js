import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const { courseId } = useParams();
    return (
        <div className="container py-5">
            <div className="text-center pb-5">
                <h1>Course {courseId} Details:</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src="https://images.pexels.com/photos/7515084/pexels-photo-7515084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                    <h5>Instructor Name: FATEMA AKTHER</h5>
                    <p>Course Duration: 200H</p>
                    <p>Price:$100</p><br />
                    <h6>Course Overview:</h6>
                    <p>Content Strategy is a conversation that provides thought-leadership. It starts a “conversation” with users and stakeholders inside and outside an organization. Content Strategy practitioners are at all levels of the best enterprises – in all departments and sectors from the top leader to the newcomer in the ranks. In this course, professionals at all levels of an organization will learn the best ways to engage an audience they want and need by smartly implementing their important, strategic stories and information and by using proven tools and techniques to enhance an audience’s experiences and interest. In this course, professionals at all levels of an organization will learn the best ways to engage an audience they want and need by smartly implementing their important, strategic stories and information and by using proven tools and techniques to enhance an audience’s experiences and interest.</p>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;