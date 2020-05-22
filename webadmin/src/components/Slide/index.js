import React from 'react';
import { Slide } from 'react-slideshow-image';
import sl1 from "../../images/slide3.jpg";
import sl2 from "../../images/silde2.jpg";
import sl3 from "../../images/slide1.png";
import sl4 from "../../images/silde4.png";
import giaohang from "../../images/image_giaohang.png";


// const slideImages = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
}

class SlideShow extends React.Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "0 auto", height: 300, display: "flex" }}>
        <div style={{ width: "30%", height: "inherit" }}>
          <img style={{ width: 360, height: "inherit" }} src={giaohang} alt="" />
        </div>
        <Slide {...properties} style={{ width: "70%" }}>
          <div style={{ height: 300 }}>
            <div style={{ 'backgroundImage': `url(${sl1})`, height: "inherit" }}>
            </div>
          </div>
          <div style={{ height: 300 }}>
            <div style={{ 'backgroundImage': `url(${sl2})`, height: "inherit" }}>
            </div>
          </div>
          <div style={{ height: 300 }}>
            <div style={{ 'backgroundImage': `url(${sl3})`, height: "inherit" }}>
            </div>
          </div>
          <div style={{ height: 300 }}>
            <div style={{ 'backgroundImage': `url(${sl4})`, height: "inherit" }}>
            </div>
          </div>
        </Slide>
      </div>

    )
  }

}
export default SlideShow