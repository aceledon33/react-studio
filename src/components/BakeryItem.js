import React, {useState} from 'react';
import "../App.css";
// TODO: create a component that displays a single bakery item

//name, description, price (int), image
export default function BakeryItem(props) {

    function handleClick() {
        props.setCart(addToCart(props.cart, props.name));
        props.setTotal(addTotal(props.total, props.price))
      };

    function addTotal(total, price){
        return total += price
    }

    function addToCart(cart, name){
        if(cart.hasOwnProperty(name)){
            cart[name] += 1
        }
        else {
            cart[name] = 1
        }
        return cart
    }
    return <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <img src={props.image}/>
        <button onClick={handleClick}>Add to Cart</button>
        </div>

}
