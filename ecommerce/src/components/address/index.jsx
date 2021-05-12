import React from 'react';
import './styles.scss';

const Address = () => {

    return(
        <div className="address">
            <h4>Endereço de entrega</h4>

            <div className="p-3 rounded my-3">
                <p className="p-0 m-0">Rua Alguma coisa, 128</p>
                <p>São Bernardo - São Luis - MA</p>

                <button className="btn text-white border-0 btn-info btn-sm w-100">Editar</button>
            </div>

            <button className="btn btn-light w-100 mb-2">Adicionar endereço</button>

            <h4 className="mt-4">Selecione a opção de entrega</h4>

            <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Transportadora
                    </label>
                </div>
                <span>Até 15 dias</span>
                <span>R$ 23,50</span>
            </div>

        </div>
    )
}

export default Address;