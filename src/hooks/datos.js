import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { Consultaapi } from "./helpers/consultaapi"

export const Datos=(Money)=>{

const [datos,setdatos]=useState({
    datas:null,
    valores:null,
    loading:true,
    error:false
})
useEffect(()=>{

Consultaapi(Money).then((info)=>{
if(info==undefined)return;
console.log(info)

    setdatos({
    valores:Money,    
    datas:info,
    loading:!datos.loading
})

})       
},[Money])


return datos;

}