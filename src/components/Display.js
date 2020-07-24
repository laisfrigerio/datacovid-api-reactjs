import React, { useState, useEffect } from 'react';
import axios from "axios";

export default () => {
    
const [data, setData] = useState([]);

useEffect(()=> {

      axios.get("http://covid19api.xapix.io/v2/latest")
  .then(response => {
      setData(response.data);
    console.log(response.data);
  }, error => {
    console.log(error);
  });

  }, []);




return(
    <div>
<h1> {Object.values(data).map((item) => {
      return item.confirmed
    })}</h1>
    </div>
);
}
 
 