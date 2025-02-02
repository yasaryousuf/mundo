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
                        Select one country as your search parameter.
                        <hr/>

                    <div className="row">
                            <div className="col-md-6">
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === '' ? 'checked' : ''}
                                    /> All</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="gb" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === 'gb' ? 'checked' : ''}
                                    /> England</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="ca" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === 'ca' ? 'checked' : ''}
                                    /> Canada</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="au" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === 'au' ? 'checked' : ''}
                                    /> Australia</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="us" name="country" onChange={this.handleChange} 
                                    checked={this.props.country === 'us' ? 'checked' : ''}
                                    /> USA</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="fr" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === 'fr' ? 'checked' : ''}
                                    /> France</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="jp" name="country" onChange={this.handleChange} 
                                    checked={this.props.country === 'jp' ? 'checked' : ''}
                                    /> Japan</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="cn" name="country" onChange={this.handleChange}  
                                    checked={this.props.country === 'cn' ? 'checked' : ''}
                                    /> China</label>
                                </div>
                            </div>
                        </div>                        
                    </div>


                </div>
            </>
        );
    }
}