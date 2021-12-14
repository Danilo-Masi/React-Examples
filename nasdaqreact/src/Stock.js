import React, { Component } from "react";

class Stock extends Component {
    render() {
        const {nome, fondatore, eta} = this.props;
        return (
            <div>
                <h3>Azienda: {nome.toUpperCase()}</h3>
                <p>Fondatore: {fondatore}</p>
                <p>
                    { eta>18 ? 'Sono maggiorenne': 'Sono minorenne'}
                </p>
            </div>
        );
    }
}

export default Stock;