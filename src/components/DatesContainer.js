import React from "react";
import "./style/DatesContainer.css"

function DaysContainer({ dates, handleCurrentDay }) {
    return (
      <ul className="List List-days">
        {dates.map((day) => {
          return (
            <li key={day.day}>
              <button
                className="days-button"
                disabled={!day.enabled}
                onClick={() => handleCurrentDay(day)}>
                {day.day}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
  
  function HoursContainer({ currentDay }) {
    if(!currentDay){
        return null
    }
    return (
      <div className="hours-container">
      <h4>LOCATION</h4>
      <ul className="List List-hours">
        {currentDay.hours.map((hour) => {
          return (
            <li key={hour.from}>
              <button className="hours-button" disabled={!hour.enabled}>{hour.from}</button>
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
  
  export default function DatesContainer({ dates }) {
    const [currentDay, setCurrentDay] = React.useState(null);
  
    function handleCurrentDay(day) {
      setCurrentDay(day);
    }
  
    return (
      <div className="datesContainer">
        <DaysContainer dates={dates} handleCurrentDay={handleCurrentDay} />
        <HoursContainer currentDay={currentDay} />
      </div>
    );
  }