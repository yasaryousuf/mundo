import React from "react";
import axios from "axios";

import NavbarComponent from "./NavbarComponent";
import CategoriesComponent from "./CategoriesComponent";

import { apikey } from '../data/apikey';
import SearchComponent from "./SearchComponent";
import ArticleComponent from "./ArticleComponent";
import PaginationComponent from "./PaginationComponent";
import FooterComponent from "./FooterComponent";
import LanguageComponent from "./SideComponent/LanguageComponent";
import DateComponent from "./DateComponent";
import Spinner from "./Spinner";
import PerPage from "./SideComponent/PerPage";

import history from './History';

export default class EveryThing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            categories: [],
            isLoading: true,
            searchParams: {
                apiKey: apikey,
                q: 'messi',
                language: '',
                from: '',
                to: '',
                // page: 0,
                pageSize: 20,
            }
        };
        this.search = this.search.bind(this);
        // this.selectPage = this.selectPage.bind(this);
        this.selectPerPage = this.selectPerPage.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    selectLanguage(language) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, language: language
                }
            };
        }, () => {
            let urlParam = new URLSearchParams(this.state.searchParams);
            urlParam = urlParam.toString();
            this.getData(urlParam);

        });

    }
    // selectPage(page) {
    //     page < 0 ? page = 0 : page = page;

    //     this.setState(prevState => {
    //         return {
    //             searchParams: {
    //                 ...prevState.searchParams, page: page
    //             }
    //         };
    //     }, () => {
    //         let urlParam = new URLSearchParams(this.state.searchParams);
    //         urlParam = urlParam.toString();
    //         this.getData(urlParam);

    //     });

    // }



    selectPerPage(perpage) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, pageSize: perpage
                }
            };
        }, () => {
            let urlParam = new URLSearchParams(this.state.searchParams);
            urlParam = urlParam.toString();
            this.getData(urlParam);

        });

    }
    setDate(dateObj) {
        this.setState(prevState => {
            return {
                searchParams: {
                    ...prevState.searchParams, ...dateObj
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

    }

    getData(urlParam) {
        console.log(urlParam);
        this.setState({ isLoading: true });

        axios(
            `https://newsapi.org/v2/everything?${urlParam}`,
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
                            {this.state.isLoading === true ? <Spinner /> : this.state.articles.map((article, i) =>
                                <ArticleComponent key={i} article={article} />
                            )}

                            <PaginationComponent page={this.state.searchParams.page} selectPage={this.selectPage} />

                        </div>

                        <div className="col-md-4">

                            <SearchComponent search={this.search} term={this.state.searchParams.q}/>

                            <DateComponent setDate={this.setDate}/>
                            <PerPage perpage={this.state.searchParams.pageSize} selectPerPage={this.selectPerPage} />

                            <CategoriesComponent url={this.state.url} addCategory={this.addCategory} selectCategory={this.selectCategory} />

                            <LanguageComponent selectLanguage={this.selectLanguage} language={this.state.searchParams.language} />

                        </div>
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }
}
