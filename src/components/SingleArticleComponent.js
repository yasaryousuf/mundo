import React from "react";
import moment from 'moment'

import SearchComponent from "./SearchComponent";
import ArticleComponent from "./ArticleComponent";
import PaginationComponent from "./PaginationComponent";
import FooterComponent from "./FooterComponent";
import SidebarComponent from "./SidebarComponent";
import NavbarComponent from "./NavbarComponent";
import CategoriesComponent from "./CategoriesComponent";

export default class SingleArticleComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="App">

                <NavbarComponent />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/* START */}


                            <h1 class="mt-4">Post Title</h1>

                            <p class="lead">
                                by&nbdp;<a href="#">Start Bootstrap</a>
                            </p>

                            <hr/>

                            <p>Posted on January 1, 2019 at 12:00 PM</p>

                            <hr/>

                            <img class="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>

                            <hr/>

                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

                            <hr/>

                            {/* END */}

                        </div>

                        <div className="col-md-4">

                            <SearchComponent search={this.search} />

                            <CategoriesComponent/>

                            <SidebarComponent />

                        </div>
                    </div>
                </div>

                <FooterComponent />

            </div>
        );
    }
}