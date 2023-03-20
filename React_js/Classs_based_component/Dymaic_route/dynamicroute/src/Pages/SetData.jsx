import React from "react";

const SetData = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((ele) => {
        return (
          <div style={{ paddingLeft: "25px" }} key={ele.id}>
            <p>{ele.RouteName}</p>
            {ele.HasChield == true && <SetData data={ele.Chield} />}
          </div>
        );
      })}
    </>
  );
};

export default SetData;
