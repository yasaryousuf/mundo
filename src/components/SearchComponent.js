import React from "react";

export default class SearchComponent extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.search(this.state.searchTerm);
    }


    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <form onSubmit={(e) => this.handleSubmit(e)} className="form-inline">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for..."
                                onChange={this.handleChange}
                                value={this.state.searchTerm}
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit">
                                    Go!
                      </button>

                        </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}