import { useState } from "react";
import prd  from "./components/prd.json"

function App()
{

    var[list , setList] = useState(prd)
    var[cart , setCart] = useState([])


    function  handlEcart(e)
    {
       setCart([...cart ,   e])
    }

    return(
       <div>

          <h1>LIST OF PRODUCTS</h1>

           {
               list.map( (e) => {
                     return (
                          <li>{e.name} {e.category} {e.price}   <button onClick={() => handlEcart(e)}>ADD TO CART</button></li>
                     )
               })
           }


           <h1>MY CART</h1>

           {
               cart.map( (e) => {
                     return (
                          <li>{e.name} {e.category} {e.price} </li>
                     )
               })
           }


       </div>
      
    )
}

export default App;