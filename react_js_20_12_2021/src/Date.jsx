import React, { useEffect } from "react";
import moment from "moment";

const Date = () => {
  useEffect(() => {
    handle = setInterval(WriteTime, 1000);

    return unmountComponent;
  }, []);

  let handle = null;

  function WriteTime() {
    const time = moment();
    return (document.title = time.format("MM/DD HH:MM:SS"));
  }

  function unmountComponent() {
    clearInterval(handle);
  }

  return (
    <div>
      <h4>Date Component</h4>
    </div>
  );
};

export default Date;
