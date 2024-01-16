import React, { Component } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import Work from "./Work";

const ArrowButton = ({currentSlide, slideCount, children, ...props}) => (
    <span {...props}>{children}</span>
);

const SETTINGS = {
    prevArrow: (
        <ArrowButton>
            <LeftOutlined />
        </ArrowButton>
    ),
    nextArrow: (
        <ArrowButton>
            <RightOutlined />
        </ArrowButton>
    )
};

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Carousel ref={node => (this.carousel = node)} {...props} arrows={true} prevArrow={SETTINGS.prevArrow} nextArrow={SETTINGS.nextArrow}>
          <div>
            <Work title={'Babysitter App'} image={'../src/assets/babysitters-demo.png'} 
            livesite={"https://babysitters-app-7fe0f50cf2a3.herokuapp.com/"} github={'https://github.com/honguyen00/babysitters'}/>
          </div>
          <div>
            <Work title={'Parking with Access'} image={'../src/assets/map-parking-demo.png'} 
            livesite={"https://honguyen00.github.io/map-parking/"} github={'https://github.com/honguyen00/map-parking'}/>
          </div>
          <div>
            <Work title={'JATE'} image={'../src/assets/jate-demo.png'} 
            livesite={"https://just-another-text-editor-jate.onrender.com"} github={'https://github.com/honguyen00/JATE'}/>
          </div>
          <div>
            <Work title={'Weather Forecast'} image={'../src/assets/weather-forecast-demo.png'} 
            livesite={"https://honguyen00.github.io/map-parking/"} github={'https://github.com/honguyen00/map-parking'}/>
          </div>
          <div>
            <Work title={'Daily Planner'} image={'../src/assets/daily-planner-demo.png'} 
            livesite={"https://honguyen00.github.io/daily-planner/"} github={'https://github.com/honguyen00/daily-planner'}/>
          </div>
          <div>
            <Work title={'Future Project'} image={'../src/assets/daily-planner-demo.png'} 
            livesite={"#"} github={'#'}/>
          </div>
        </Carousel>
      </div>
    );
  }
}
