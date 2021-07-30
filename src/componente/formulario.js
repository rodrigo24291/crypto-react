import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
export const Formulario=({cripto,Moneda,mo,setguardado})=>{
    const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem`
    //traigo las cripto
const Handelmoneda=(e)=>{
Moneda({...mo,
[e.target.name]:e.target.value
})
}    

const guardar=(e)=>{
    e.preventDefault();
    setguardado(mo);
}

return(
    <>
    <form onSubmit={guardar}>
<Label>HOLA</Label>
<Select value={mo.Bit} name="Bit" onChange={Handelmoneda}>
<option value="">- Seleccione -</option>
{cripto!==null  ? cripto.map((fer,i)=>{
    
    return <option value={fer.CoinInfo.Name} onChange={Handelmoneda} > {fer.CoinInfo.FullName} </option>
})  : null}
</Select >

<Label>HOLA</Label>
<Select name="Moneda" value={mo.Moneda} onChange={Handelmoneda}>
<option value="">- Seleccione -</option>

    <option value="USD">Dolar</option>
    <option value="MXN">Pesos mexicanos</option>
    <option value="EUR">Euros</option>
    <option value="GPB">Libras</option>
</Select>

<Boton
                type="submit"
                value="Calcular"
            />
</form>


    </>
)

}