import React from "react";
import Item from "./works/WorkItems";
function Works() {
  return (
    <div className="works" id='works'>
        <div className="workHeading">
            Works
        </div>
      <div className="worksItems row noGutter">
        <Item  />
        <Item  />
     
      </div>
    </div>
  );
}

export default Works;
