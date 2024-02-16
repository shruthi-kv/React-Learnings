import React, { useState, useEffect } from "react";
import "./Pagination.css";

export default function Pagination() {
  const [images, setImages] = useState([]);

  const getImagesfromApi = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    const requiredData = data.slice(0, 50);
    setImages(requiredData);
  };

  useEffect(() => {
    getImagesfromApi();
  }, []);

  return (
    <>
      <div className="container">
        {images.length > 0 &&
          images.map((i) => {
            return <img key={i.id} src={i.url} alt="img"></img>;
          })}
      </div>
    </>
  );
}
