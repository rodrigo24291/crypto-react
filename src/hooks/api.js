export const Racing=async ()=>{

const api=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
const resul=await fetch(api)
const resultado=await resul.json()
return resultado.Data
}