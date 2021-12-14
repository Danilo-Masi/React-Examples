import React from "react";
// import PropTypes from 'prop-types';

function FiglioStock(props) {
    // Recupero i valori passati
    const nomePassato = props.nome;
    const fondatore = props.fondatore;
    //Passiamo dei valori di default nel caso quelli originali
    //non ci vengano dati
    FiglioStock.defaultProps = {
        nome: 'ND',
        fondatore: 'ND',
    }
    //Verifichiamo che i tipi di dati passati siano
    //nella forma corretta
    //TROVARE L'IMPORT GIUSTO
    // FiglioStock.PropTypes = {
    //     nome: PropTypes.string,
    //     fondatore: PropTypes.string
    // }

    return (
        <div>
            <h1>Nome azienda: {nomePassato}</h1>
            <h2>Fondatore: {fondatore}</h2>
        </div>
    );
}

export default FiglioStock;