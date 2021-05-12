import React, { useState } from "react";
import { useHistory } from "react-router";
// SERVICES
import api from "../../services/api.js";
// STYLES
import MySwal from "../../utils/Swal.js";
import "./styles.scss";

const FormLogin = () => {
  const route = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);


  //   CHECA OS VALORES
  const checkSubmit = () => {
    return Array.from([email, password]).every((el) => el);
  };

  //  ENVIA SUBMIT
  const sendSubmit = async (event) => {
    event.preventDefault();
    setIsloading(true);
    let dt = { email, password };

    await api
      .post("/clients/login", dt)
      .then((resp) => {
        console.log(resp.data)
        if (resp.data != null) {
          MySwal("Logado com succeso", "", "success", 3000);
          localStorage.setItem("client",JSON.stringify(resp.data));

          route.push(`/finish`);
        }
      })
      .catch((err) => {
        MySwal("Falha ao logar", err, "error", 0);
      });

    setIsloading(false);
  };

  return (
    <div className="mx-auto mt-5 m-lg-auto">
      <h4 className="text-center mb-4">Login</h4>
      <form onSubmit={sendSubmit} className="form-login mt-2">
        <div className="form-floating mb-3">
          <input
            type="text"
            value={email}
            placeholder="Email"
            id="inputEmailLogin"
            disabled={isLoading}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="inputEmailLogin">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            value={password}
            placeholder="Senha"
            id="inputPassLogin"
            disabled={isLoading}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="inputPassLogin">Senha</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
          disabled={!checkSubmit() || isLoading}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
