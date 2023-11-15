import React from "react"
import {useCounter} from '../hooks/useCounter'
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const {counter,handleAdd} = useCounter(1)
   const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)


   return (
       <>
       <div class="container">
           <h1 class="title">Breaking Bad Quotes...</h1>
           

           {isLoading ? (
               <div class="loading">Loading</div>
           ) : (
               <blockquote class="blockquote">
               <p class="quote">{data[0]?.quote}</p>
               <footer class="author">{data[0].author}</footer>
               </blockquote>
           )}

           <button class="btn" onClick={() => handleAdd()}>
               Next Quote
           </button>
       </div>

       </>
   )
   
}