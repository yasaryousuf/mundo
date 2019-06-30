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
            articles: [],
            categories: []
        };
        this.search = this.search.bind(this);
    }

    search(term) {
        this.getData(term);
    }

    componentDidMount()  {
        this.getData(this.state.searchTerm);
    }

    getData(term) {
        let searchString = '&q=';
        if (term) {
            searchString = `&q=${term}`;
        }

        axios(
            `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apikey}${searchString}`,
            {
                method: "GET",
                mode: "no-cors"
            }
        )
            .then(response => {
                console.log('api response');
                console.log(response);
                this.setState({ articles: response.data.articles });
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {

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
