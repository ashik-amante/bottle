import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLs, getLsData, removefromLs } from "../../Utilities/localstorage";
import Cart from "../cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    

    const handlePurchase = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }

    useEffect(() =>{
        const cartdata = getLsData()
        const saveCart = []

        for(const id of cartdata){
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                saveCart.push(bottle)
            }
        }
        setCart(saveCart)
    } ,[bottles])

   

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    const handleRemove = id =>{
        //  visiul
        const remaining = cart.filter(bottle => bottle.id !== id)
        setCart(remaining)
        // from ls
        removefromLs(id)
    }
    return (
        <div>
            <h3>total Bottle :{bottles.length} </h3>
            <div>
                <Cart cart = {cart} handleRemove = {handleRemove}></Cart>
            </div>

            <div className="grid">
                {

                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}
                    handlePurchase = {handlePurchase}
                    > </Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;