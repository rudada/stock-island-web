import React, {useState, useRef} from 'react';
import Searchbar from '../components/Searchbar'
import DatePicker, { registerLocale } from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import ko from 'date-fns/locale/ko';
registerLocale("ko", ko);



function Weekly() {
const [currentDate, setCurrentDate] = useState();
const calendar = useRef(null);

const cancelDatePicker = () => {
  setStartDate(currentDate);
  calendar.current.setOpen(false);
};

const openDatePicker = () => {
  calendar.current.setOpen(true);
};

const closeDatePicker = () => {
  setCurrentDate(startDate);
  calendar.current.setOpen(false);
};

<DatePicker
                withPortal
                className="date date-record"
                locale="ko"
                selected={startDate}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat="yyyy.MM.dd(eee)"
                useWeekdaysShort={true}
                shouldCloseOnSelect={false}
                useWeekdaysShort={true}
                excludeDates={excludeDates}
                ref={calendar}
                onInputClick={() => openDatePicker()}
                onChange={(date, event) => datePickHandler(date, event)}
                renderCustomHeader={({
                    date,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div
                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                    >
                    <div
                        className="btn_month btn_month-prev"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        <img src="/static/images/arrow-black-left.png" />
                    </div>
                    <div className="month-day">
                        {getYear(date)}.{months[getMonth(date)]}
                    </div>

                    <div
                        className="btn_month btn_month-next"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        <img src="/static/images/arrow-black-right.png" />
                    </div>
                    </div>
                )}
                >
                <div className="button-container">
                    <div className="btn_ctrl btn_ctrl-cancel" onClick={cancelDatePicker}>
                    {" "}
                    취소
                    </div>
                    <div className="btn_ctrl btn_ctrl-confirm" onClick={closeDatePicker}>
                    선택
                    </div>
                </div>
            </DatePicker>
    return (
        
        <div  className="content_weekly">
            <Searchbar></Searchbar>
            Weekly
            
        </div>
    );
};

export default Weekly;