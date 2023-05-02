import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import { endPoint, messages } from '../../utils/configs';
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const Main = () => {
  const [products, setProducts] = useState([]);
  const URL_BASE = process.env.REACT_APP_URL_BASE;
  const navigate = useNavigate();
  console.log(URL_BASE);
  useEffect(() => {
    getData()
  },[]);


  const getData = async () => {
    try {
      const {data} = await axios.get(`${URL_BASE}${endPoint.products}`)
      setProducts(data)
    } catch (error) {
      alert(messages.failGetProducts)
      navigate('/');
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">Bienvenido al Soft Store de tu señora</h1>
      <div className="row justify-content-center mt-4">
        {
          products.length >= 1
        ?
            products.map((prod) => <Card key={prod.id} prod={prod} />)
            :
            <Loader/>
        }
      </div>
    </div>
  );
};

export default Main;
