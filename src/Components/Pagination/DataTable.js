import React, { useState, useEffect } from "react";
import "./DataTable.css";
import { Pagination } from "./Pagination/Pagination";
import { Pages } from "./Pages/Pages";
export default function DataTable() {
  const [images, setImages] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const getImagesfromApi = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    setLoading(true);
    const requiredData = data.slice(0, 50);
    setLoading(false);
    setImages(requiredData);
  };

  useEffect(() => {
    getImagesfromApi();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate =(pageNumber) => setCurentPage(pageNumber)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Pagination posts={currentPosts} loading={isloading} />
      <Pages
        postPerPage={postsPerPage}
        totalPosts={images.length}
        paginate={paginate}
      />
    </div>
  );
}
