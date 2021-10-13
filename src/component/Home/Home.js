import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Courses from './Courses';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="text-center pt-5">
                <h1>FEATURED COURSES</h1>
                <p>ALL THE TOP COURSES WE OFFERED</p>

            </div>
            <div className="container pb-5">
                <div className="row">
                    {
                        courses.slice(0, 5).map(course => <Courses
                            key={course.id}
                            course={course}
                        ></Courses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;