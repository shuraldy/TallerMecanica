// Predefined Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packges
import ShowImage from './ShowImage';

const CardServicio = ({ _id,name, description, slug }) => {
    return (
        <div className="item col-md-3 col-lg-3">
            <div className="card">
                <div className="fade-in">
                    <ShowImage
                        id={_id}
                        name={name}
                        url='service'
                        attr='card-img-top img-card pt-1'
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">

                        {description.split("/").map((item, i) => (
                            <span className="d-block" key={i}>{item}</span>
                        ))}

                    </p>

                    <Link
                        to={`servicio/${slug}`}
                        className="btn btn-card rounded-pill waves-effect">Saber más...</Link>
                </div>
            </div>
        </div>
    );
}

export default CardServicio;