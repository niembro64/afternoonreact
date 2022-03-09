import React, { Component } from "react";

class Pixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
        };
    }

    onClickHandler = () => {
        // console.log("Pixel Clicked");

        this.setState({
            filled: this.state.filled ? false : true,
        });
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
