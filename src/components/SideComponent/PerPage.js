import React from "react";


export default class PerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {perpage: this.props.perpage}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ perpage: e.target.value }, () => { this.props.selectPerPage(this.state.perpage)});
    }

    render() {
        return (
            <>
                <div className="card my-4">
                    <h5 className="card-header">Post Per Page</h5>
                    <div className="card-body">
                        Select results per page to show.
                        <hr />

                        <div className="row">
                            <div className="col-md-12">
                                {/* <div className="checkbox ml-3" style={{ float: 'left' }}> */}
                            
                                        <input 
                                            type="range" 
                                            value={this.state.perpage} 
                                            name="perpage" 
                                            min="0" 
                                            max="100" 
                                            onChange={this.handleChange} 
                                        /> 
                                        <br/>
                                        {this.state.perpage} posts to show per page
                                {/* </div> */}
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}