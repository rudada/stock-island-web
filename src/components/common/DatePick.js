import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import "./DatePick.scss"

function DatePick({ startDate, endDate, setStartDate, setEndDate }) {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);

  const CustomInput = ({ value, onClick }) => (
    <button className="datepick-btn" onClick={onClick}>
      {value}
    </button>
  );

  const onSearch = () => {
    setStartDate(start);
    setEndDate(end);
  }
  
  return (
    <div className="DatePick">
      <div className="picker">
        <DatePicker
          selected={start}
          onChange={(date) => setStart(date)}
          selectsStart
          startDate={start}
          endDate={end}
          customInput={<CustomInput />}
        />
        <span className="dash"></span>
        <DatePicker
          selected={end}
          onChange={(date) => setEnd(date)}
          selectsEnd
          startDate={start}
          endDate={end}
          minDate={start}
          customInput={<CustomInput />}
        />
      </div>
      
      <button className="submit datepick-btn" onClick={onSearch}><i className="fas fa-search"></i></button>
    </div>
  );
}

export default DatePick;
