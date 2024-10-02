import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    // we want to call api when someone use 
    const [data, setData] = useState({})           // if value is not coming then then empty object will handle
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())                 // response converted to json
        .then((res) => setData(res[currency]))     // we are taking currency from the data and the key will be currency
        console.log(data);
    }, [currency])                                 // when currency will change then it will call again
    console.log(data);
    return data
}

export default useCurrencyInfo;
