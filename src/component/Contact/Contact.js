import React from 'react';

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="text-center pb-5">
                <h1>SEND AN MESSAGE</h1>
                <p>FEEL FREE TO SEND US MESSAGE</p>
            </div>
            <div class="mb-3">
                <label>Full Name:</label>
                <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div class="mb-3">
                <label>Email:</label>
                <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
                <label>Message:</label>
                <textarea class="form-control" placeholder="Description" rows="10"></textarea>
            </div>
            <div class="mb-3">
                <button className="btn btn-warning">Submit</button>
            </div>
        </div>

    );
};

export default Contact;