import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// COMPONENTS
import Navbar from "../../components/navbar";
// SERVICES
import api from "../../services/api.js";
import helpers from "../../utils/helpers";
import MySwal from "../../utils/Swal";
// STYLES
import "./style.scss";

const Profile = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState({});
  const [name, setName] = useState("");

  const addZeroes = (num) => {
    return num
      .toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 })
      .toString()
      .replace(".", ",");
  };

  useEffect(() => {
    // // DESCOMENTAR ABAIXO E CHAMAR O ENDPOINT CORRETO
    // api
    //   .get(`/user/${id}`)
    //   .then((res) => {
    //     // EM 'setName' COLOCAR O NOME DO USUÁRIO APENAS
    //     setName(res.data.user.name);
    //     // em 'setOrders' COLOCAR APENAS O ARRAY DOS PEDIDOS
    //     setOrders({ ...res.data.orders });
    //     // em 'setAddress' COLOCAR APENAS O ARRAY DO ENDEREÇO
    //     setAddress(res.data.address);

    //     // OU PODE TRAZER O 'resp.data' E JOGAR TUDO DENTRO DE UM STATE[], E SEPARAR NO MAP
    //   })
    //   .catch((err) => {
    //     MySwal("Erro ao buscar dados", err, "error", 3000);
    //   });

    // TODO: REMOVER TUDO ISSO ABAIXO APÓS CHAMAR ENDPOINT ACIMA
    setName("Felipe Moreira");
    setOrders([
      { name: "Notebook", price: 17.5, quantity: 1 },
      { name: "Prancha", price: 55, quantity: 4 },
      { name: "Mouse", price: 6.5, quantity: 3 },
      { name: "Boneca Inflável", price: 125.75, quantity: 17 },
    ]);
    setAddress({
      cep: "65110-000",
      district: "Canudos",
      street: "Negro Cosme",
      city: "São José de Ribamar",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto content-profile pb-4">
        <div className="w-100 text-center fw-bold my-3 position-relative">
          <p className="m-0">Olá, {name}</p>
          <div className="position-absolute end-0 start-0 mx-auto"></div>
        </div>

        <div className="mx-5 mt-5 line">
          <div
            role="button"
            className="d-flex flex-row align-items-center mb-2"
            data-bs-toggle="collapse"
            data-bs-target="#Endereco"
          >
            <i className="fas fa-map-marker-alt me-2"></i>
            <span>Endereço</span>
          </div>
          <div className="collapse" id="Endereco">
            <div className="card card-body">
              <p className="m-0 fw-bold">
                <span className="fw-normal">
                  {address.street}, {address.district} - {address.city} ({address.cep})
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-5 line">
          <div
            role="button"
            className="d-flex flex-row align-items-center mb-2"
            data-bs-toggle="collapse"
            data-bs-target="#Orders"
          >
            <i className="fas fa-box me-2"></i>
            <span>Pedidos</span>
          </div>
          <div className="collapse" id="Orders">
            {orders.map((item, i) => (
              <div key={i} className="card card-body my-2">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span>
                    <span className="nameItem fw-bold text-decoration-underline">
                      {item.name}
                    </span>{" "}
                    (Unit. R$
                    {helpers.addZeroes(item.price)})
                  </span>
                  <span className="fw-bold qntItem">({item.quantity}x)</span>
                </div>
                <p className="m-0 text-end mt-1">
                  <span>Total: </span>
                  <span className="totalItem fw-bold text-success">
                    R$ {helpers.addZeroes(item.price * item.quantity)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
