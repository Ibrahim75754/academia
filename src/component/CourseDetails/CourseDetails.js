import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./../courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const details = courses.find(course => course.id === parseInt(courseId));

    return (
        <div className="container py-5">
            <div className="text-center pb-5">
                <h1>{details?.name}</h1>
                <p>Course No. {courseId}</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={details?.photo} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                    <h5>Instructor Name: {details?.instructor}</h5>
                    <p>Course Duration: {details?.duration}H</p>
                    <p>Price: ${details?.price}</p><br />
                    <h6>Course Overview:</h6>
                    <p>{details?.desciption}</p>
                    <button className="btn btn-warning mt-3 py-3 px-5 text-white">Enroll Now</button>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;