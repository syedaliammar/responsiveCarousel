import { Component, createElement } from "react";

export class Slide extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { item, imageCaption } = this.props;

        return (
            <div>
                {<img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />}
                <p className="legend"></p>
            </div>
        )
    }
}
