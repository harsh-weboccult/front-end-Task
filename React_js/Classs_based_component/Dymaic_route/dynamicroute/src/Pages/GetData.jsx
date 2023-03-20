import React, { useState } from "react";
import data from "../assets/Data/Route";
import SetData from "./SetData";
var trigger = false;
const GetData = () => {
  const [RouteData, SetRouteData] = useState(data);
  /// const [UserData, SetUserData] = useState(data);
  const [list, SetList] = useState([
    {
      id: 1,
      List: "A",
      HasChield: false,
      Chield: [],
    },
  ]);

  function addToList() {
    console.log(list);
  }

  function showoption(ele) {
    alert("helo");
    if (trigger == true) {
      alert("Call");

      return (
        <select onChange={HandleChange}>
          <option value=""> Select value</option>
          {ele.Chield.map((ele, index) => {
            return (
              <option value={ele.value} key={index}>
                {ele.RouteName}
              </option>
            );
          })}
        </select>
      );
    }
  }
  function HandleChange(e) {
    var selectedvalue = e.target.value;

    // console.log(e.target.value);
    {
      data.map((ele, index) => {
        if (ele.RouteName == selectedvalue) {
          ele.HasChield = true;
          console.log(ele);
          trigger = true;
        }
      });
    }
  }

  return (
    <>
      <div className="App">
        <input
          type="text"
          name="List"
          value={list.List}
          onChange={(e) =>
            SetList({ ...list, [e.target.name]: e.target.value })
          }
        />{" "}
        <button onClick={addToList}> Click to Add </button>
      </div>

      <select onChange={HandleChange}>
        <option value=""> Select value</option>
        {data.map((ele, index) => {
          return (
            <option value={ele.value} key={index}>
              {ele.RouteName}
            </option>
          );
        })}
      </select>
      {showoption()}
      <SetData data={data} />
    </>
  );
};

export default GetData;
