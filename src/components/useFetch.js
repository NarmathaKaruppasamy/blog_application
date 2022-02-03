import { useState,useEffect } from "react";
const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const[isBending,setIsBending]=useState(true);
    const[error,setError]=useState(null)
      
      useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>
        fetch(url,{signal:abortCont.signal})
          .then(res =>{
            if(!res.ok){
              throw Error("couldn't able to fetch the data")
            }
            return res.json();
          })
          .then(data=>{
            setData(data);
            setIsBending(false);
            setError(null);
          })
          .catch(err =>{
              if(err.name==='AbortError'){
                console.log('fetch abort');
              }
              else{
                setError(err.message)
                setIsBending(false);
              }
              
          })
        ,1000);

        return()=> abortCont.abort();
      },[url])

      return ({data,isBending,error});

}
export default useFetch;