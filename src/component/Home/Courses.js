import React from 'react';
import { NavLink } from 'react-router-dom';

const Courses = (props) => {
    const { id, name, img, price, desciption } = props.course;
    return (
        <div class="col-sm-4 mt-4">
            <div class="card h-100">
                <div class="card-body">
                    <img src={img} className="img-fluid" alt="" />
                    <h3 class="card-title">{name}</h3>
                    <h5>Price: ${price}</h5>
                    <p class="card-text">{desciption.slice(0, 100)}</p>
                    <NavLink to={`/course/${id}`} class="btn btn-warning">Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Courses;