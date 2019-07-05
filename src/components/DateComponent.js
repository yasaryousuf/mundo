import React from "react";
import moment from 'moment';

export default class DateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        },
            () => { this.props.setDate(this.state)})
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div className="card my-4">
                    <h5 className="card-header">Date range</h5>
                    <div className="card-body">
                        Select date range as your search parameter.
                        <hr />

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="from">From:</label>
                                    <input 
                                    type='date' 
                                    className="form-control" 
                                    id='from' 
                                    name='from' 
                                    onChange={this.handleChange} 
                                        min={moment().subtract(2, 'months').format('YYYY-MM-DD')}
                                        max={moment().format('YYYY-MM-DD')}
                                    value={this.state.from}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="to">To:</label>
                                    <input 
                                    type='date' 
                                    className="form-control" 
                                    id='to' 
                                    name='to' 
                                    onChange={this.handleChange}
                                        value={this.state.to}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}