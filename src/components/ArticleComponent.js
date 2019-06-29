import React from "react";
import moment from 'moment'

export default class ArticleComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <div className="card mb-4">
                    <img
                        className="card-img-top"
                        src={this.props.article.urlToImage}
                        alt={this.props.article.title}
                    />
                    <div className="card-body">
                        <h2 className="card-title">{this.props.article.title}</h2>
                        <p className="card-text">{this.props.article.description}</p>
                        <a href={this.props.article.url} className="btn btn-primary">
                            Read More &rarr;
            </a>
                    </div>
                    <div className="card-footer text-muted">
                        {moment(this.props.article.publishedAt).fromNow(true)} ago {this.props.article.author ? 'by' : ''} &nbsp;
            <a href="#">{this.props.article.author}</a>
                    </div>
                </div>
            </>
        );
    }
}