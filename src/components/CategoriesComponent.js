import React from "react";
import { sources } from '../data/sources';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let halfWayThough = Math.ceil(sources.length / 2)

let arrayFirstHalf = sources.slice(0, halfWayThough);
let arraySecondHalf = sources.slice(halfWayThough, sources.length);

export default class CategoriesComponent extends React.Component {

    constructor() {
        super();

    }


    render() {
        return (
            <div className="card my-4">

            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                                        <Link to={{ pathname: "/category" }}>
                                            All
                                        </Link>
                                {arrayFirstHalf.map((category, i) => (
                                    <li key={i}>
                                        <Link to={{ pathname: `/category/${category}` }}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                {arraySecondHalf.map((category, i) => (
                                    <li key={i}>
                                        <Link to={{ pathname: `/category/${category}` }}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}