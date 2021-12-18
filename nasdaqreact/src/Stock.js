import React, { Component } from "react";

class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {eta: this.props.eta};
    }

    aggiornaStato = () => {
        this.setState((state,props) => ({eta: this.state.eta + 1}));
        if(this.state.eta >= 18) {
            this.props.showEta(this.props.nome);
        }
    }

    realTime = () => {
        setInterval(() => this.aggiornaStato(), 1000);
    }

    render() {
        const {nome, fondatore} = this.props;
        return (
            <div>
                <h3>Azienda: {nome.toUpperCase()} - Eta: {this.state.eta}</h3>
                <p>Fondatore: {fondatore}</p>
                <p>
                    { this.state.eta >= 18 ? 'Sono maggiorenne': 'Sono minorenne'}
                </p>
                <button onClick={this.realTime}>Aggiorno</button>
            </div>
        );
        
    }
}

// Utilizzato per fornire dei valori di default
Stock.defaultProps = {
    nome: 'ND',
    fondatore: 'ND'
}

// Utilizzato per la convalida dei tipi di dati
// Stock.protoType = {
//     nome: ProtoTypes.string,
//     fondatore: PropTypes.string,
//     eta: PropTypes.number
// }

export default Stock;