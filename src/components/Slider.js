import React from "react";
import Slider from "@material-ui/core/Slider";
import "../styles/slider.css";
const SliderBox = () => {
  return (
    <div className='slider'>
      <div className='slider__contaner'>
        <div className='slider__item'>
          <div className='slider__heading'>
            <h2>Add more users</h2>
            <p>
              <span>NGN99,99</span>per user
            </p>
          </div>
          <div className='slider__control'>
            <div>
              <h3>0</h3>
              <h3>{`>`}1000</h3>
            </div>
            <Slider
              defaultValue={100}
              aria-labelledby='discrete-slider-small-steps'
              step={10}
              min={0}
              max={1000}
              valueLabelDisplay='on'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBox;
