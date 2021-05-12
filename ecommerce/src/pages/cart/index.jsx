import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Navbar from "../../components/navbar";
// UTILS
import helpers from "../../utils/helpers.js";
// STYLES
import "./style.scss";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {

    let valor=0;
    setProducts(JSON.parse(localStorage.getItem("products")));
    console.log(localStorage.getItem("products"))
    products.map(e=>{
      console.log(e.price)
      valor +=e.price;
    });
    setValorTotal(valor)
  }, []);
  useEffect(() => {

    let valor=0;
    setProducts(JSON.parse(localStorage.getItem("products")));
    console.log(localStorage.getItem("products"))
    products.map(e=>{
      console.log(e.price)
      valor +=e.price;
    });
    setValorTotal(valor)
  }, [products]);
  const removeItem = (id) => {
    var result = products.filter(function(el) {
      return el.id != id;
  });
  let valor=0;
  setProducts(result);
  localStorage.setItem("products",JSON.stringify(result))
  products.map(e=>{
    console.log(e.price)
    valor +=e.price;
  });
  setValorTotal(valor)

}

  

  return (
    <>
      <Navbar />
      <div className="mt-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="m-0 p-0">Carrinho</h4>
          <div className="traco mt-1"></div>
        </div>
      </div>
      <div className="mt-5  justify-content-center   d-flex  div-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col"></th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <img width="60" src={item.img} alt="IMG" />
                </th>
                <td>
                  {item.name} <br />{" "}
                  <span
                    onClick={() => removeItem(item.id)}
                    className="text-danger"
                    role="button"
                  >
                    Remover
                  </span>
                </td>
                <td>R$ {helpers.addZeroes(item.price)}</td>
                <td width="5">
                  <input type="number" id={`inputQuant-${item.id}`} />
                </td>
                <td>R$ {helpers.addZeroes(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="subtotal justify-content-center  d-flex">
        <p className="py-5">Subtotal</p>
        <p className="py-5 px-5"> R$ {valorTotal}</p>
      </div>

      <div className="checkout justify-content-center  d-flex">
        <Link to="/login">
          <button className="btn btn-primary ">Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
