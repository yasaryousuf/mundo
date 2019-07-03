import React from "react";

export default class PaginationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }

    handlePagination(page) {
        console.log(page);
    }

    render() {
        return (
            <>
                <ul className="pagination justify-content-center mb-4">
                    <li 
                    className="page-item disabled" 
                        onClick={this.handlePagination(this.state.page--)}
                    >
                        <a 
                        className="page-link" 
                        href="#"
                        onClick={e => e.preventDefault()}
                        >
                            &larr; Older
                  </a>
                    </li>
                    <li 
                    className="page-item" 
                        onClick={this.handlePagination(this.state.page++)}
                    >
                        <a 
                        className="page-link" 
                        href="#"
                        onClick={e => e.preventDefault()}
                        >
                            Newer &rarr;
                  </a>
                    </li>
                </ul>
            </>
        );
    }
}