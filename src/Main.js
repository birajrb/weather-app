import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="form-container">
        <form>
          <input
            placeholder="Search..."
            type="text"
            className="search-box"
          ></input>
          <button className="submit-button">Search</button>
        </form>
      </div>
      <div className="location">location</div>
      <div className="temperature">35 °F</div>
      <div className="day-type">Cloudy</div>
    </div>
  );
}

export default Main;
