import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    var myCookieData = document.cookie;
    var myLocalStorageData = window.localStorage.getItem("Paragon");
    var mySessionStorageData = '<%= Session["frontend"].ToString() %>';

    return {
      myCookieData,
      myLocalStorageData,
      mySessionStorageData,
    };
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>
          Submit Data
        </button>
        <button type="button" onClick={this.getMyStorage}>
          Get Data
        </button>
      </div>
    );
  }
}

export default App;
