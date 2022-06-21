import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios config/axiosInstance"; 
const Details = (props) => {
  const params = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} />
    </div>
  );
};

export default Details;
