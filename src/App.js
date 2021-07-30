import React, { useEffect, useState } from 'react';
import {Formulario} from './componente/formulario'
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import {Racing} from './hooks/api'
import { Resultados } from './componente/resultados';
import { Datos } from './hooks/datos';
import {Error} from './componente/error'
function App() {
    const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width:992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `;
  
  const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
  `;
  const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-align:left;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 50px;
    margin-top: 80px;
    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display:block;
    }
  `;
  const [cripto,setcripto]=useState(null)
  const [moneda,setmoneda]=useState({
Moneda:"",
Bit:"" } )
const [guardado,setguardado]=useState(null);
const [imprimir,setimprimir]=useState(
 { valores:null,
  datas:null
}

);
const [hay,seterr]=useState(false)

  useEffect(()=>{
       
    Racing().then(ro=>setcripto(ro))},[])
    
    const {datas,loading,valores}=Datos(guardado)

    useEffect(()=>{
      if(  datas !== null && datas.Response !=="Error"){
        setimprimir({
          valores:valores,
          datas:datas
        })
       

    }
  
  },[loading])
  console.log(datas !== null && datas.Response!=="Error")
    
  return (
    <>
<Contenedor>
        <div>
          <Imagen 
            src={imagen}
            alt="imagen cripto"
          />
        </div>
        <div>
          {datas !== null && datas.Response == "Error" ? <Error/>:' '}
            <Heading>Cotiza Criptomonedas al Instante</Heading>

    <Formulario cripto={cripto}  Moneda={setmoneda} mo={moneda} setguardado={setguardado}/>
    
    <Resultados datero={imprimir}/> 
    </div>
    </Contenedor>
    </>
  );
}

export default App;
