import React from "react";

export default class FooterComponent extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">
                            Copyright &copy; Yasar Yousuf 2019
                        </p>
                    </div>
                </footer>
            </>
        );
    }
}