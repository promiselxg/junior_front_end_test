import React from "react";
import CropFreeIcon from "@material-ui/icons/CropFree";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Icon from "@material-ui/core/Icon";
const NavBar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar__top'>
          <CropFreeIcon />
        </div>
        <div className='sidebar__links'>
          <div className='sidebar__linksContainer'>
            <div className='links active'>
              <h1>Trial &amp; Price</h1>
              <ArrowForwardIcon />
            </div>
            <div className='links'>
              <h1>Payment Method</h1>
            </div>
            <div className='links dots'>
              <h1>------</h1>
            </div>
            <div className='links'>
              <p>Get started...</p>
            </div>
          </div>
        </div>
        <div className='sidebar__testimonial'>
          <div className='testimonial__box'>
            <div className='testimonial'>
              <Icon className='fas fa-quote-left' />
              <div className='testimonial__text'>
                <p>
                  Success is not final;failure is not fatal;it is the courage to
                  that counts.
                </p>
                <p> -Wiston Churchill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
