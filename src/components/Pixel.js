import React, { Component } from "react";

class Pixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
        };
    }

    onClickHandler = () => {
        console.log("Pixel Clicked");

        if (this.state.filled) {
            this.setState({ filled: false });
        } else {
            this.setState({ filled: true });
        }
    };

    render() {
        return (
            <div
                onClick={this.onClickHandler}
                className={this.state.filled ? "pixel filled" : "pixel"}
            ></div>
        );
    }
}

export default Pixel;
