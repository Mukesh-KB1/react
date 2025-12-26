import { useState,useEffect } from "react";

const usecurrencyconverter = (currency)=>{
    const[data,setData] = useState({});
    const[error,setError] = useState(false);
    useEffect(()=>{
        if(!currency) return;

        setError(null);
        
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch exchange rates");
            }
            return res.json();
        })
        .then(res => setData(res.rates))
        .catch(err => setError(err.message));
        console.log(data);
    },[currency])
    console.log(data);
    return {data,error};
}

export default usecurrencyconverter;