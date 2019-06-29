import React from "react";
import axios from "axios";

import NavbarComponent from "./NavbarComponent";
import CategoriesComponent from "./CategoriesComponent";

import { apikey } from '../data/apikey';
import SearchComponent from "./SearchComponent";
import ArticleComponent from "./ArticleComponent";
import PaginationComponent from "./PaginationComponent";
import FooterComponent from "./FooterComponent";
import SidebarComponent from "./SidebarComponent";
import history from './History';

export default class CategoryIndex extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            searchTerm: '',

            articles: [],
            categories: []
        };
        this.search = this.search.bind(this);
    }

    search(term) {
        this.setState({
            searchTerm: term,
        });

        let query = new URLSearchParams(history.location.search)
        query.set('q', term);
        console.log(query);
        // history.replace({
        //     ...history.location,
        //     search: query.toString()
        // })
    }

    componentDidMount()  {
        console.log("componentDidMount");
        this.getData(this.state.searchTerm);
    }

    getData(q) {
        let searchString = '&q=';
        if (q) {
            searchString = `&q=${q}`;
        }

        axios(
            `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apikey}${searchString}`,
            {
                method: "GET",
                mode: "no-cors"
            }
        )
            .then(response => {
                console.log(response);
                this.setState({ articles: response.data.articles });
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");

        console.log(this.props);
    }



    render() {
        console.log("render");
        console.log(this.props.location.search);
        console.log(this.state.searchTerm);
        // this.getData(this.state.searchTerm);

        return (
            <div className="App">
                <NavbarComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="my-4">
                                MUNDO&nbsp;
                <small>World News</small>
                            </h1>
                            {this.state.articles.map((article, i) =>
                                <ArticleComponent key={i} article={article} />
                            )}

                            <PaginationComponent />

                        </div>

                        <div className="col-md-4">

                            <SearchComponent search={this.search}/>

                            <CategoriesComponent url={this.state.url} addCategory={this.addCategory} />

                            <SidebarComponent />

                        </div>
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }
}
