import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="jumbotron">
        <h1 className="display-3">My store</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>You can create, read and update products</p>
        <p className="lead">
            <Link to='/products' className="btn btn-primary btn-lg" href="#" role="button">View products</Link>
        </p>
    </div>
);

export default LandingPage;