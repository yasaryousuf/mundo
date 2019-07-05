import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import CategoryIndex from "./components/CategoryIndex";
import Everything from "./components/Everything";
import CategorySingle from "./components/CategorySingle";
import SingleArticleComponent from "./components/SingleArticleComponent";

export default class CategoriesComponent extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <div>
                        <Route path="/" exact component={withRouter(CategoryIndex)} />
                        <Route path="/all" exact component={withRouter(Everything)} />
                        <Route path="/category" exact component={withRouter(CategoryIndex)} />
                        <Route path="/category/:category" component={CategorySingle} />
                        <Route path="/news" component={SingleArticleComponent} />
                        

                    </div>
                </Router>
            </>
        );

    }
}

