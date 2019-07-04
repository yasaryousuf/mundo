import React from "react";

export default class PaginationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }

        this.increse = this.increse.bind(this);
        this.decrese = this.decrese.bind(this);
    }

    increse() {
        this.setState(prevState => { return { page: prevState.page + 1 } }, () => this.props.selectPage(this.state.page))
    }

    decrese() {
        this.setState(prevState => { return { page: prevState.page - 1 } }, () => this.props.selectPage(this.state.page))
    }


    render() {
        return (
            <>
                <ul className="pagination justify-content-center mb-4">
                    <li 
                    className="page-item disabled" 
                        onClick={this.decrese}
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
                        onClick={this.increse}
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