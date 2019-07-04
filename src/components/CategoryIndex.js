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
import Spinner from "./Spinner";

import history from './History';
import {queryString} from 'query-string';

export default class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            categories: [],
            isLoading: true,
            searchParams: {
                apiKey: apikey,
                q: '',
                country: 'us',
                sources: '',
                page: 0
            }
        };
        this.search         = this.search.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectPage  = this.selectPage.bind(this);
    }

    selectPage(page) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, page: page
                }
            };
        }, () => {
            let urlParam = new URLSearchParams(this.state.searchParams);
            urlParam = urlParam.toString();
            this.getData(urlParam);

        });

    }

    selectCountry(country) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, country: country
                }
            };
        }, () => {
            let urlParam = new URLSearchParams(this.state.searchParams);
            urlParam = urlParam.toString();
            this.getData(urlParam);

        });

    }

    search(term) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, q: term
                }
            };
        }, () => {
            let urlParam = new URLSearchParams(this.state.searchParams);
            urlParam = urlParam.toString();
            this.getData(urlParam);

        });
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        let urlParam = new URLSearchParams(this.state.searchParams);
        urlParam = urlParam.toString();
        this.getData(urlParam);
        // console.log(urlParam);

    }

    getData(urlParam) {
        console.log(urlParam);
        this.setState({ isLoading: true });

        axios(
            `https://newsapi.org/v2/top-headlines?${urlParam}`,
            {
                method: "GET",
                mode: "no-cors"
            }
        )
            .then(response => {
                this.setState({ articles: response.data.articles, isLoading: false });
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
                            {this.state.isLoading === true ? <Spinner/> : this.state.articles.map((article, i) =>
                                <ArticleComponent key={i} article={article} />
                            )}

                            <PaginationComponent page={this.state.searchParams.page} selectPage={this.selectPage}/>

                        </div>

                        <div className="col-md-4">

                            <SearchComponent search={this.search}/>

                            <CategoriesComponent url={this.state.url} addCategory={this.addCategory} />

                            <SidebarComponent selectCountry={this.selectCountry}/>

                        </div>
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }
}
