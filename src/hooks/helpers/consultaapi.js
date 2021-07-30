export const Consultaapi=async(informacion)=>{
    console.log(informacion)
    if(informacion==null) return;
const {Moneda,Bit}=informacion    
const api=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Bit}&tsyms=${Moneda}`;
const re=await fetch(api)
const js=await re.json();
return js;
}