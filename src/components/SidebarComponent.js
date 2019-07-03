import React from "react";


export default class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.selectCountry(e.target.value);
    }

    render() {
        return (
            <>
                <div className="card my-4">
                    <h5 className="card-header">Country</h5>
                    <div className="card-body">
                        You can put anything you want inside of these side widgets.
                        They are easy to use, and feature the new Bootstrap 4 card
                        containers!
                    </div>

                    <div className="row mx-2">
                    <div className="col-md-4">
                        <div className="checkbox">
                            <label><input type="radio" value="" name="country" onChange={this.handleChange} /> All</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="checkbox">
                            <label><input type="radio" value="gb" name="country" onChange={this.handleChange} /> England</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="checkbox">
                            <label><input type="radio" value="us" name="country" onChange={this.handleChange} /> USA</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="checkbox disabled">
                            <label><input type="radio" value="fr" name="country"  onChange={this.handleChange} /> France</label>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}