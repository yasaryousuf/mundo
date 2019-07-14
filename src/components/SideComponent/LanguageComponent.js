import React from "react";


export default class LanguageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.selectLanguage(e.target.value);
    }

    render() {
        return (
            <>
                <div className="card my-4">
                    <h5 className="card-header">Language</h5>
                    <div className="card-body">
                        Select one language as your search parameter.
                        <hr />

                        <div className="row">
                            <div className="col-md-6">
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="" name="language" onChange={this.handleChange}
                                        checked={this.props.language === '' ? 'checked' : ''}
                                    /> All</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="de" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'de' ? 'checked' : ''}
                                    /> German</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="en" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'en' ? 'checked' : ''}
                                    /> English</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="es" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'es' ? 'checked' : ''}
                                    /> Spanish</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="fr" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'fr' ? 'checked' : ''}
                                    /> French</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="it" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'it' ? 'checked' : ''}
                                    /> Italy</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="ru" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'ru' ? 'checked' : ''}
                                    /> Russian</label>
                                </div>
                                <div className="checkbox ml-3" style={{ float: 'left' }}>
                                    <label><input type="radio" value="nl" name="language" onChange={this.handleChange}
                                        checked={this.props.language === 'nl' ? 'checked' : ''}
                                    /> Nederlands</label>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}