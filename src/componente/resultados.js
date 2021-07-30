import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react/cjs/react.development';

export  const Resultados=({datero})=>{

    const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }

    `
if(datero.datas==null) return "";

const {valores,datas}=datero
const {Moneda,Bit}=valores;
const final=datas.DISPLAY[Bit][Moneda] 


return ( 
    <ResultadoDiv>
    <Precio>El precio es: <span>{final.PRICE}</span> </Precio>
        <Info>Precio más alto del día: <span>{final.HIGHDAY}</span> </Info>
        <Info>Precio más bajo del día: <span>{final.LOWDAY}</span> </Info>
        <Info>Variación últimas 24 horas: <span>{final.CHANGEPCT24HOUR}</span> </Info>
        <Info>Última Actualización: <span>{final.LASTUPDATE}</span> </Info>
    </ResultadoDiv>
 );


}