import React, { useEffect, useState } from 'react';
import Courses from '../Home/Courses';


const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <div className="text-center pt-5">
                <h1>OUR ALL COURSES</h1>
                <p>ALL THE TOP COURSES WE OFFERED</p>

            </div>
            <div className="container pb-5">
                <div className="row">
                    {
                        courses.map(course => <Courses
                            key={course.id}
                            course={course}
                        ></Courses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;