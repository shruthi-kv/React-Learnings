import React from "react";
import { useState } from "react";

export default function XMLHttpRequest() {
  const [data, setData] = useState(null);
  function handleData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data", true);
    xhr.onload = function () {

      if (xhr.status >= 200 && xhr.status < 300) {
        setData(JSON.parse(xhr.responseText));
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }

    };
    xhr.onerror = function () {
      console.error();
    };
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleData}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}

