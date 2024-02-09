import React, { useEffect, useState } from "react";
// import person from '../Assets/person.png';
function Fetch() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    setImages(data);
  };
  console.log(images, "images");
  const imageSort = images.slice(0,20);
  return (
    <div>
      <div style={{display:"flex"}}>
        {imageSort.length > 0 &&
          imageSort?.map((i) => {
            return (
            <div style ={{}}>
              <img style={{ padding: "10px", width:"200px"}} src={i?.url} alt="img" />
            </div>
            );
          })}
      </div>
    </div>
  );
}
export default Fetch;
