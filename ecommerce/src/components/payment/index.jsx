import React from 'react';
import './styles.scss';


const Payment = () => {

    return(
    <div className="m-auto mt-4">

        <h4>Forma de pagamento</h4>

        <div className="my-3">
            <div className="form-check">
              <input id="credit" name="credito" type="radio" className="form-check-input" checked="" required="" />
              <label className="form-check-label" for="credit">Crédito</label>
            </div>
            <div className="form-check">
              <input id="debit" name="debito" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" for="debit">Débito</label>
            </div>
        </div>

        {/* <select className="form-select mb-4 m-0 w-50" aria-label="Default select example">
            <option selected disabled>Quantas vezes</option>
            <option value="1">One</option>
            <option value="2">Two</option>
        </select> */}
        
        <div className="d-flex flex-row">
            <div className="form-floating mb-3 col-10 me-2">
                <input type="text" className="form-control" id="numberCard" placeholder="name@example.com" />
                <label for="numberCard">Nome</label>
            </div>
            <div className="form-floating mb-3 col-2">
                <input type="text" className="form-control" id="numberCard" placeholder="name@example.com" />
                <label for="numberCard">CVC</label>
            </div>
        </div>

        <div className="d-flex flex-row">
            <div className="form-floating mb-3 col-8 me-2">
                <input type="text" className="form-control" id="numberCard" placeholder="name@example.com" />
                <label for="numberCard">Número do Cartão</label>
            </div>

            <div className="form-floating mb-3 col-4">
                <input type="text" className="form-control" id="numberCard" placeholder="name@example.com" />
                <label for="numberCard">Expiração</label>
            </div>
        </div>
        
    </div>
  
    )
}

export default Payment;