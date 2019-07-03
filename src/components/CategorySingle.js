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
// import LoadingComponent from "./LoadingComponent";


export default class CategorySingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            articles: [],
            categories: [],
            isLoading: true
        };
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.getData('', '');
    }

    componentDidUpdate() {
    }

    componentWillReceiveProps(nextProps) {
        this.getData(nextProps.match.params.category, '');
    }

    search(term) {
        this.getData('', term);
    }

    getData(category, term) {

        this.setState({ isLoading: true });
        let searchString = '&q=';
        if (term) {
            searchString = `&q=${term}`;
        }
        let categoryName = category;
        if (!category) {
            categoryName = this.props.match.params.category;
        }
        

        axios(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${categoryName}${searchString}`,
            {
                method: "GET",
                mode: "no-cors"
            }
        )
        .then(response => {
            console.log(response);
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
                            
                            {this.state.isLoading === true ? <h1>Loading...</h1> : this.state.articles.map((article, i) =>
                                <ArticleComponent key={i} article={article} />
                            )}

                            <PaginationComponent />

                        </div>

                        <div className="col-md-4">

                            <SearchComponent search={this.search} />

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
