import React, { Fragment } from 'react';
import { useState } from 'react';
import Error from './Error';


const Pregunta = ({guardarPresupuesto, guardarRestante, setMostrarPregunta}) => {


    //Definit el State
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
    }


    //Funcion para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //Si se pasa la validación
        setError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        setMostrarPregunta(false)

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;
