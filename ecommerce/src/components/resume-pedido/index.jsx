import React from 'react';
import './styles.scss';


const ResumePedido = () => {

    return(
    <div className="m-auto mt-0 resumo-pedido">
        
        <div className="my-3 w-100 mt-0 pb-4 mb-4">
        
             <h4>Resumo do pedido</h4>
             
             <div className="card p-3 my-2">
                <p className="mb-1">Nome do Produto</p>
                <div className="d-flex flex-row justify-content-between">
                    <span>2x</span>
                    <span>R$ 12,50</span>
                </div>
             </div>
             
             <div className="card p-3 my-2">
                <p className="mb-1">Nome do Produto</p>
                <div className="d-flex flex-row justify-content-between">
                    <span>2x</span>
                    <span>R$ 12,50</span>
                </div>
             </div>
             
             <div className="card p-3 my-2">
                <p className="mb-1">Nome do Produto</p>
                <div className="d-flex flex-row justify-content-between">
                    <span>2x</span>
                    <span>R$ 12,50</span>
                </div>
             </div>

        </div>

        <div className="total">
            <div className="d-flex flex-row justify-content-between" >
            <p>Total</p>
            <p>R$ 50,00</p>    
            </div>
            <button className="btn btn-success w-100">Confirmar Pedido</button>
        </div>

    </div>
  
    )
}

export default ResumePedido;