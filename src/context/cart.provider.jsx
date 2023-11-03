import { useState } from "react";
import CartContext from "./cart.context";
import Toastify from 'toastify-js'

export default function CartProvider({children}) {
    const [cart, setCart] = useState({
        buyer:{},
        products:[],
        total:0
    })

    const addProduct = (product, quantity) => {
        const {products} = cart
        const productIndex = products.findIndex((p) => p.product.id === product.id)
        if(productIndex > -1){
            products[productIndex].quantity += quantity
        }else{
            products.push(
                {
                    product,
                    quantity
                }
            )
        }
        Toastify({
            text: `Producto agregado`,
            duration: 3000,
            gravity: "bottom",
            position: "right",  
            style: {
                background: "linear-gradient(90deg, rgba(22,94,0,1) 0%, rgba(67,171,0,1) 35%, rgba(0,131,15,1) 100%)",
            }
        }).showToast()
        setCart({
            ...cart,
            products
        })
    }

    const removeProduct = (productId) => {
        const {products} = cart
        const productIndex = products.findIndex((p) => p.product.id === productId)

        if(productIndex > -1){
            products.splice(productIndex, 1)
        }

        Toastify({
            text: `Producto eliminado`,
            duration: 3000,
            gravity: "bottom",
            position: "right",  
            style: {
                background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(171,0,0,0.6110819327731092) 35%, rgba(131,0,0,1) 100%)",
            }
        }).showToast()

        setCart({
            ...cart,
            products
        })
    }

    const clear = () => {
        setCart({
            buyer:{},
            products:[],
            total:0
        })
    }

    const getTotal = () => {
        const {products} = cart
        return products.reduce((suma ,p) => suma + p.quantity * p.product.price, 0)
    }

    return (
        <CartContext.Provider
        value={{
            cart,
            addProduct,
            removeProduct,
            clear,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
    
}