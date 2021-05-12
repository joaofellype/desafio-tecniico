import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// COMPONENTS
import Navbar from "../../components/navbar";
// IMAGES
import logo from "../../images/01.jpeg";
import helpers from "../../utils/helpers";
// SERVICES
import api from "../../services/api.js";
// STYLES
import mySwal from "../../utils/Swal.js";
import "./style.scss";

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    //   TODO: REMOVER COMENTÁRIOS ASSIM QUE BUSCAR NO ENDPOINT
    api
      .get(`/products/${id}`)
      .then((resp) => {
        if (resp.data) setProduct({ ...resp.data });
      })
      .catch((err) => {
        mySwal("Erro ao carregar produto", err, "error", 0);
      });

    
  }, []);

  const saveProduct = () => {
    let allProducts = [];

    if (localStorage.hasOwnProperty("products"))
      allProducts = JSON.parse(localStorage.getItem("products"));

    allProducts.push(product);
    localStorage.setItem("products", JSON.stringify(allProducts));

    mySwal("Adicionado ao carrinho", "Adicione o quanto quiser :)", "success", 2000);
  };

  return (
    <>
      <Navbar />
      <div className="description mt-5 justify-content-center d-flex flex-column flex-lg-row m-auto">
        <img src={logo} alt="IMG" className="mx-auto me-lg-3 w-50" />
        <div className="description-product mx-auto ms-lg-3 my-4 my-lg-0 p-4 p-lg-0">
          <h2>{product.name}</h2>
          <p className="text-success fw-bold">R$ {helpers.addZeroes(product.price)}</p>
          <p className="text-secondary">{product.description}</p>
          <Link
            to="/"
            onClick={() => saveProduct()}
            className="d-flex justify-content-center justify-content-lg-start text-decoration-none mt-4"
          >
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Description;
