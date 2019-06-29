import React from "react";

export default class SidebarComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                        You can put anything you want inside of these side widgets.
                        They are easy to use, and feature the new Bootstrap 4 card
                        containers!
                </div>
                </div>
            </>
        );
    }
}