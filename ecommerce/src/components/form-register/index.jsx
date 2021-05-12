import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// SERVICES
import api from "../../services/api.js";
// STYLES
import MySwal from "../../utils/Swal.js";
import "./styles.scss";

const FormLogin = () => {
  const route = useHistory();

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passConfirm, setPassConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // CHECA A IGUALDADE DOS PASSWORDS
  const checkEqualPass = () => {
    return (
      password.length > 0 && passConfirm.length > 0 && passConfirm !== password
    );
  };

  // CHECA OS DADOS
  const checkSubmit = () => {
    return (
      Array.from([name, password, email, passConfirm]).every((el) => el) &&
      !checkEqualPass()
    );
  };

  // ENVIA SUBMIT
  const sendSubmit = async (event) => {
    event.preventDefault();
    let dt = { name, email, password };

    setIsLoading(true);

    await api
      .post("/clients", dt)
      .then(() => {
        MySwal("Registrado com sucesso", "Você já pode logar", "success", 3000);
        route.push("/");
      })
      .catch((err) => {
        MySwal("Falha ao registrar", err, "error", 0);
      });

    setIsLoading(false);
  };

  return (
    <div className="m-auto mt-4">
      <h4 className="text-center mb-4">Registre-se</h4>
      <form onSubmit={sendSubmit} className="form-register  p-4 rounded mt-2">
        <div className="form-floating mb-3">
          <input
            type="text"
            value={name}
            id="inputName"
            placeholder="Nome"
            disabled={isLoading}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="inputName">Nome</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            id="inputEmail"
            placeholder="Email"
            disabled={isLoading}
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="inputEmail">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            autoComplete="true"
            placeholder="Senha"
            value={password}
            disabled={isLoading}
            id="inputPassRegister"
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${checkEqualPass() ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">Senhas diferem</div>
          <label htmlFor="inputPassRegister">Senha</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            autoComplete="true"
            placeholder="Confirmar Senha"
            className={`form-control ${checkEqualPass() ? "is-invalid" : ""}`}
            id="inputPassConfirmRegister"
            value={passConfirm}
            disabled={isLoading}
            onChange={(e) => setPassConfirm(e.target.value)}
          />
          <div className="invalid-feedback">Senhas diferem</div>
          <label htmlFor="inputPassConfirmRegister">Confirmar Senha</label>
        </div>

        <button
          disabled={!checkSubmit() || isLoading || checkEqualPass()}
          className="btn btn-primary w-100"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
