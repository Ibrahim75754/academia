import React from 'react';
import { NavLink } from 'react-router-dom';

const Courses = (props) => {
    const { id, name, img, price, desciption } = props.course;
    return (
        <div className="col-sm-4 mt-4">
            <div className="card h-100">
                <div className="card-body">
                    <img src={img} className="img-fluid" alt="" />
                    <h3 className="card-title">{name}</h3>
                    <h5>Price: ${price}</h5>
                    <p className="card-text">{desciption.slice(0, 100)}</p>
                    <NavLink to={`/course/${id}`} className="btn btn-warning">Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Courses;