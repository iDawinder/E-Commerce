import {  createContext, useEffect, useState } from "react";
import axios from "axios"

export const ProductContext = createContext()

export const ProductContextProvider = function ({children}){
        const [data , setData] = useState([])
        useEffect(()=>{
            async function getdata (){
                let response = await axios.get("http://localhost:7000/products")
                console.log(response.data)
                setData(response.data)
            }
            getdata()
        },[])
// console.log("data ",data.category)
    return <ProductContext.Provider value={data}>
        {children}
    </ProductContext.Provider>
}