import { useEffect } from "react";
import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextprovider =(props)=>{

    const[allcoin, setallcoin]= useState([])
    const[currency, setCurrency]= useState({
        name:"usd",
        symbol:"$"
    })
    
    const fetchAllCoin = async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-qiZp6QCFW4WgTUvMrmdXpptn'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setallcoin(res))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoin()
    },[currency])


    const contextValue = {
        allcoin,
        currency,
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextprovider;