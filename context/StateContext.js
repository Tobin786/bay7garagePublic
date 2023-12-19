import React, { createContext, useContext, useState, useEffect} from "react";
import product from "../sanity/schemas/product";
import toast from "react-hot-toast";

//import { toast} from 'react-hot-toast';

const Context = createContext();



export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    
    let foundProduct;

    const toggleCartItemQuanitity = (id, value) => {
        setCartItems((prevCartItems) => {
          return prevCartItems.map((item) => {
            if (item._id === id) {
              if (value === 'inc') {
                const updatedItem = { ...item, quantity: item.quantity + 1 };
                setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
                return updatedItem;
              } else if (value === 'dec' && item.quantity > 1) {
                const updatedItem = { ...item, quantity: item.quantity - 1 };
                setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
                return updatedItem;
              }
            }
            return item;
          });
        });
      };
      
      
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    
    const decQty = () => {
        setQty((prevQty) =>{ 
            if(prevQty - 1 < 1) return 1;
            else return prevQty - 1}
            );
    }

    const onAdd = (product,quantity) => {
        const checkProductInCart = cartItems.find((item => item._id === product._id));
        setTotalPrice ((prevTotalPrice) => prevTotalPrice + product.price * quantity );
        setTotalQuantities ( (prevTotalQuantities) => prevTotalQuantities + quantity) ;

        if (checkProductInCart) {
           

            const updatedCartItem = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItem);
            toast.success(qty+' '+product.name+' Added to the cart');
        }
        else{
                product.quantity = quantity;
                setCartItems([...cartItems, {...product}]);
                toast.success(qty+' '+product.name+' Added to the cart');
        }

        } 

        const onRemove = (product) => {
            foundProduct = cartItems.find((item) => item._id === product._id);
            const newCartItems = cartItems.filter((item) => item._id !== product._id);
        
            setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
            setCartItems(newCartItems);
          }
    
    
    return (
        <Context.Provider 
        value ={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuanitity,
            onRemove
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);