import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import ContainerComponent from "./components/ContainerComponent";
import CategoryIndex from "./components/CategoryIndex";
import CategorySingle from "./components/CategorySingle";

export default class CategoriesComponent extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <div>
                        <Route path="/" exact component={withRouter(CategoryIndex)} />
                        <Route exact path="/category" exact component={withRouter(CategoryIndex)} />
                        <Route path="/category/:category" component={CategorySingle} />
                        
                        <Route path="/source/" component={ContainerComponent} />
                    </div>
                </Router>
            </>
        );

    }
}

