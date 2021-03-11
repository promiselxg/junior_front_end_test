import React from "react";
import "../styles/modules.css";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AppleIcon from "@material-ui/icons/Apple";
import CommuteIcon from "@material-ui/icons/Commute";
import DehazeIcon from "@material-ui/icons/Dehaze";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
const Modules = () => {
  return (
    <div className='modules'>
      <div className='modules__container'>
        <div className='module__heading'>
          <h2>all modules</h2>
        </div>
        <div className='modules'>
          <div className='module'>
            <DragIndicatorIcon />
            <h2>Governance Portal</h2>
          </div>
          <div className='module'>
            <AppleIcon />
            <h2>Corporate Universe</h2>
          </div>
          <div className='module'>
            <AccountTreeIcon />
            <h2>Contact Domain</h2>
          </div>
          <div className='module'>
            <CalendarTodayIcon />
            <h2>Inventor Relations</h2>
          </div>
          <div className='module'>
            <CommuteIcon />
            <h2>Dispute Portfolio</h2>
          </div>
          <div className='module'>
            <DehazeIcon />
            <h2>Minute Book</h2>
          </div>
          <div className='module'>
            <EqualizerIcon />
            <h2>Reporting Tool</h2>
          </div>
          <div className='module'>
            <LibraryBooksIcon />
            <h2>Attendance Register</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
