import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../loader/Loader";
import { endPoint } from "../../utils/configs";
import Swal from "sweetalert2";

const DetailProduct = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = process.env.REACT_APP_URL_BASE;

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      const { data } = await axios.get(`${URL_BASE}${endPoint.products}/${id}`);
      setProd(data);
      setIsLoading(true);
    } catch (error) {
      Swal.fire({
        title: "Uff culiao no se k a pasao xd",
        confirmButtonText: "Todo bien prro",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("perdon loqo", "", "error");
        }
      });
      console.error(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <div className="container my-5 shadow">
            <h1 className="text-center"> Detalle de producto</h1>

            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <h2>{prod.tittle}</h2>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={prod.img[0]} alt={prod.tittle} />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={prod.img[1]}
                        className="d-block w-100"
                        alt={prod.tittle}
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        src={prod.img[2]}
                        className="d-block w-100"
                        alt={prod.tittle}
                      />
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>

                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>

                    <span className="visualy-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6">
                <h2>Descripcion</h2>

                <p>{prod.desc}</p>

                <div className="mt-5 text-end">
                  <h3>${prod.price} USD</h3>

                  <h4>Quedan {prod.quantity} UD.</h4>

                  <button className="btn btn-primary mb-5">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DetailProduct;
