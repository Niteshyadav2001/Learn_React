// a hook is normally a function, which accept some value and
// do some actions/calculations and send response 

import React from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data,setData] = useState({})
    useEffect(() => {

        // this link is not working anymore
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // res[currency] = returns the value of currency key

        // for example: below is our json fetched by the api
        // {
        //     "usd": {
        //       "eur": 0.85,
        //       "gbp": 0.75
        //     }
        //   }
        // so here res[currency] returns value like:
        
        // "eur": 0.85,
        // "gbp": 0.75
          
    },[currency])

    return data
}

export default useCurrencyInfo