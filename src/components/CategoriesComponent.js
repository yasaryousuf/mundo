import React from "react";
import { sources } from '../data/sources';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let halfWayThough = Math.floor(sources.length / 2)

let arrayFirstHalf = sources.slice(0, halfWayThough);
let arraySecondHalf = sources.slice(halfWayThough, sources.length);

export default class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.selectCategory(e.target.value);
    }


    render() {
        return (
            <div className="card my-4">

            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                        <div className="col-lg-6">
                            <div className="checkbox ml-3" style={{ float: 'left' }}>
                                <label><input type="radio" value="" name="category" onChange={this.handleChange} />
                                    &nbsp;All
                                </label>
                            </div>
                            {arrayFirstHalf.map((category, i) => (
                                <div className="checkbox ml-3" style={{ float: 'left' }} key={i}>
                                    <label><input type="radio" value={category} name="category" onChange={this.handleChange} /> 
                                        &nbsp;{category.charAt(0).toUpperCase() + category.slice(1)}
                                    </label>
                                </div>
                            ))}
                    </div>
                    <div className="col-lg-6">
                            {arraySecondHalf.map((category, i) => (
                                <div className="checkbox ml-3" style={{ float: 'left' }} key={i}>
                                    <label><input type="radio" value={category} name="country" onChange={this.handleChange} /> 
                                        &nbsp;{category.charAt(0).toUpperCase() + category.slice(1)}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}