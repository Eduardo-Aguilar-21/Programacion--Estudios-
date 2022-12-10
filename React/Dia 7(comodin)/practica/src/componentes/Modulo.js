import React from 'react';
import '../hojas-de-estilo/Modulo.css';

function Modulo(props){
    <div className='contenedor-modulo'>
        <img
        className='imagen-modulo'
        src={require(`..imagenes/modulo-${props.imagen}.png`)}
        alt={props.alter}/>
        <div className='contenedor-texto-modulo'>
            <p>{props.nombre}</p>
            <p>{props.cargo}</p>
            <p>{props.contenido}</p>
        </div>
    </div>
}

export default Modulo;