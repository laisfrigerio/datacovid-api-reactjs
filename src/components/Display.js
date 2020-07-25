import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [newData, setData] = useState(false);

  useEffect(() => {
    getData();
    
  }, []);

  let getData = async () => {
    let res = await axios.get("http://covid19api.xapix.io/v2/locations");
    let { data } = await res; 

    setData(Object.values(data));
 
  };

  let getArray = (object) => {
    
    return object !== undefined?Object.values(object):false;
  }

  let isNotUndefined = (element) => {
    return element !== undefined?element:false;
  }

  return (
    <div>
      {}
      <h1> {console.log(isNotUndefined(getArray(getArray(newData)[0]))[0])}</h1>
    </div>
  );
};
