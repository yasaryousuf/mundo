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

export default class ContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apikey}`,
      articles: [],
      categories: []
    };
    this.addCategory = this.addCategory.bind(this);
  }
  componentDidMount() {

    axios(
      this.state.url,
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

  addCategory(category) {
    let url = new URL(this.state.url);
    url.searchParams.set('category', category);
    this.setState({ url: url }, () =>
      console.log(this.state.url)); 

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
              {this.state.articles.map(article =>
                <ArticleComponent article={article} />
              )}

              <PaginationComponent />

            </div>

            <div className="col-md-4">

              <SearchComponent />

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
