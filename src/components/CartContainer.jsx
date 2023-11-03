import { useContext } from "react"
import CartContext from "../context/cart.context"
import { NavLink } from "react-router-dom"

const CartContainer = () => {
    const cartContext = useContext(CartContext)
    return(
        <div className="container cartContainer">
            {
                cartContext.cart.products.map((p) => (
                    <div key={p.product.id} className="cartContainer_card">
                        <div className="cartContainer_card_img">
                            <img src={p.product.img} alt={p.product.name} />
                        </div>
                        <div className="cartContainer_card_name">
                            <p>
                                {p.product.name}
                            </p>
                        </div>
                        <div className="cartContainer_card_price">
                            <p>
                                {p.product.price}$
                            </p>
                        </div>
                        <div className="cartContainer_card_quantity">
                            <p>
                                {p.quantity} und
                            </p>
                        </div>
                        <div className="cartContainer_card_trash">
                            <button onClick={() => cartContext.removeProduct(p.product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))
            }
            <div>
                <p>
                    Total = {cartContext.getTotal()}$
                </p>
                {cartContext.cart.products.length === 0
                    ?<button type="button" className="btn btn-primary btn-lg" disabled={cartContext.cart.products.length === 0}>Checkout</button>
                    :<NavLink to={"/checkout"}><button type="button" className="btn btn-primary btn-lg" disabled={cartContext.cart.products.length === 0}>Checkout</button></NavLink>
                }
                    
                <NavLink to={"/"}>
                    Continuar comprando
                </NavLink>
            </div>
        </div>
    )
}

export default CartContainer