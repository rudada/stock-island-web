import DatePicker from "react-datepicker";
import React from "react";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import "./DatePick.scss"

function DatePick({ startDate, endDate, setStartDate, setEndDate }) {

  const CustomInput = ({ value, onClick }) => (
    <button className="datepick-input" onClick={onClick}>
      {value}
    </button>
  );
  
  return (
    <div className="DatePick">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
      />
      <span className="dash">-</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<CustomInput />}
      />
      <button className="submit">search</button>
    </div>
  );
}

export default DatePick;
