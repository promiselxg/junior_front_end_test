import React from "react";
import { Container, Button } from "@material-ui/core";
import "../styles/dashboard.css";
import SliderBox from "./Slider";
import Modules from "./Modules";
const AppContent = () => {
  return (
    <>
      <div className='dashboard'>
        <Container>
          <div className='dashboard__container'>
            <div className='dashboard__top'>
              <div className='dashboard__topLeft'>
                <h1>Hey,Terry</h1>
                <h2>
                  Start your <span>30 days</span> Trial
                </h2>
                <p>Select your preferred package below</p>
              </div>
              <div className='dashboard__topRight'>
                <h1>NGN</h1>
                <h1 className='currency'>1,999,999</h1>
                <h2>
                  Total <span>(Excludes Vat)</span>
                </h2>
              </div>
            </div>
            <div className='dashboard__options'>
              <div className='dashboard__option default'>
                <div className='dashboard__optionBox'>
                  <div className='option_one'>
                    <h1>Starts From</h1>
                    <h2>NGN</h2>
                    <h1>5,999,999.99</h1>
                    <p>Per annum</p>
                  </div>
                  <div className='option_two'>
                    <h1>Premium</h1>
                    <span className='bottom'>
                      <h2>100 Users</h2>
                      <h2>.</h2>
                      <h2>100 Users</h2>
                    </span>
                  </div>
                </div>
              </div>
              <div className='highlight'>
                <div className='dashboard__optionBox'>
                  <div className='option_one'>
                    <h1>Basic</h1>
                    <p>
                      <span>30 days trial</span> on our premium app features
                    </p>
                    <span className='second'>
                      <p>Includes -------------</p>
                      <p>- 25 users</p>
                      <p>- all modules and features</p>
                      <p>- unlimited commitees</p>
                      <p>- unlimited role creation</p>
                    </span>
                  </div>
                </div>
                <span className='badge'>
                  <i className='fa fa-check' />
                </span>
              </div>
            </div>
            <SliderBox />
            <Modules />
            <div className='footer'>
              <div className='footer__container'>
                <div>
                  <Button>Go Back</Button>
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: "yellow",
                      color: "#000",
                      padding: "10px 20px",
                    }}
                  >
                    Secondary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AppContent;
