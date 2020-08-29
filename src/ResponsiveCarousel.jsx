import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ui/ResponsiveCarousel.css";
import { Carousel } from "react-responsive-carousel"
import { Slide } from "./components/Slide";

class ResponsiveCarousel extends Component {

    constructor(props) {
        super(props);

        this.returnSlides = this.returnSlides.bind(this);
    }

    returnSlides() {
        const { content, datasource: ds } = this.props;

        return ds.status === "loading" ? null : ds.items.map((item) => content(item))
    }


    renderSlides(map) {  
        return map != null
            ? map.map(item => {
                
                return (
                    <Slide
                        item={item}
                    />
                );
            })
            : null;
    };

    render() {
        const { isSwipeable, useKeyboard, datasource: ds } = this.props;

        const carouselOptions = {
            showThumbs: false,
            swipeable: isSwipeable,
            emulateTouch: isSwipeable,
            useKeyboardArrows: useKeyboard
        }
        return (
            <div id="carousel" className="carousel-slide">
                <Carousel {...carouselOptions}>
                    {this.returnSlides()}
                </Carousel>
            </div>
        )
    }
}

export default hot(ResponsiveCarousel);
