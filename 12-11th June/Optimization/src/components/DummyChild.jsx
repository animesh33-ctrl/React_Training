import React from "react";

function DummyChild({ somefunction, add }) {
  return <div>{console.log("DummyChild rendered")}</div>;
}

export default React.memo(DummyChild);
