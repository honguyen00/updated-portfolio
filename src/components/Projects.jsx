import React, { Component } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import Work from "./Work";
import parking from '../assets/map-parking-demo.png'
import babysitters from '../assets/babysitters-demo.png'
import jate from '../assets/jate-demo.png'
import weather from '../assets/weather-forecast-demo.png'
import planner from '../assets/daily-planner-demo.png'
import workout from '../assets/workout-demo.png'

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
            <Work title={'Workout Tracker'} image={workout}
            livesite={"https://workout-tracker-574o.onrender.com"} github={'https://github.com/honguyen00/Fire-workout'}/>
          </div>
          <div>
            <Work title={'Parking with Access'} image={parking} 
            livesite={"https://honguyen00.github.io/map-parking/"} github={'https://github.com/honguyen00/map-parking'}/>
          </div>
          <div>
            <Work title={'Weather Forecast'} image={weather} 
            livesite={"https://honguyen00.github.io/map-parking/"} github={'https://github.com/honguyen00/map-parking'}/>
          </div>
          <div>
            <Work title={'JATE'} image={jate} 
            livesite={"https://just-another-text-editor-jate.onrender.com"} github={'https://github.com/honguyen00/JATE'}/>
          </div>
        </Carousel>
      </div>
    );
  }
}
