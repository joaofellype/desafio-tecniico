import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Navbar from "../../components/navbar";
import CardList from "../../components/card";
// IMAGES
import logo from "../../images/01.jpeg";
// SERVICES
import helpers from "../../utils/helpers.js";
import api from "../../services/api";
// STYLES
import "./style.scss";
import MySwal from "../../utils/Swal";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     api
      .get("/products")
      .then((resp) => {
       if (resp.data) setProducts(resp.data);
      })
       .catch((err) => {
         MySwal("Erro ao receber produtos", err, "error", 0);
       });

  
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-4 father">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h4 className="m-0 p-0">Produtos</h4>
          <div className="traco mt-1"></div>
        </div>
      </div>

      <div className="card-list justify-content-between align-itens-center d-flex row row-cols-1 row-cols-md-2 row-cols-lg-4 px-auto mx-auto">
        {products.map((item, i) => (
          <Link className="text-decoration-none" key={i} to={`/description/${item.id}`}>
            <CardList
              img={item.img}
              text={item.name}
              description={item.description}
              price={helpers.addZeroes(item.price)}
              className="col"
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Home;
