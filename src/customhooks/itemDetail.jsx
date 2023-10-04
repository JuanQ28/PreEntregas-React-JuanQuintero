import { NavLink } from "react-router-dom"
import useCounter from "./useCounter"

const ItemDetail = ({product}) => {
    const {quantity, Increment, Decrement} = useCounter()
    
    return (
        <div className="card text-center cardDetail">
                <div className="card-header">
                    {product.category}
                </div>
                <img src={product.img} className="card-img-top" alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <div className="cardNumberProducts">
                    <button type="button" className="btn btn-secondary btn-lg buttonCard" onClick={Decrement} disabled={quantity == 0}>
                        -
                    </button >
                    <p className="card-text">{quantity}</p>
                    <button type="button" className="btn btn-secondary btn-lg buttonCard" onClick={Increment} disabled={quantity >= product.stock}>
                        +
                    </button>
                    </div>
                    <p className="card-text">Stock disponible: {product.stock}</p>
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
                <div className="card-footer text-body-secondary">
                    <NavLink to={`/`} className="btn btn-primary">Volver</NavLink>
                </div>
            </div>
    )
}

export default ItemDetail