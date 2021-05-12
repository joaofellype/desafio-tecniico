import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/01.jpeg";
import "./styles.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-100 d-flex flex-row justify-content-between align-items-center navbar-g">
      <div className="w-100">
        <img
          src={Logo}
          width="45px"
          height="45px"
          alt="MeuPau"
          className="rounded-circle ms-3"
        />
      </div>

      <div className="px-3 d-flex">
        {location.pathname !== "/cart" ? (
          <Link
            className="me-3 d-flex justify-content-center align-items-center text-decoration-none"
            to="/cart"
          >
            <i className="fas fa-shopping-cart me-2"></i>
            <span>Carrinho</span>
          </Link>
        ) : (
          <Link
            className="me-3 d-flex justify-content-center align-items-center text-decoration-none"
            to="/"
          >
            <i className="fas fa-box me-2"></i>
            <span>Produtos</span>{" "}
          </Link>
        )}
        {location.pathname === "/login" ? (
          <Link
            className="d-flex justify-content-center align-items-center text-decoration-none"
            to="/"
          >
            <i className="fas fa-box me-2"></i>
            <span>Produtos</span>{" "}
          </Link>
        ) : (
          <Link
            className="d-flex justify-content-center align-items-center text-decoration-none"
            to="/login"
          >
            <i className="fas fa-sign-in-alt me-2"></i>
            <span>Cadastrar/Logar</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
