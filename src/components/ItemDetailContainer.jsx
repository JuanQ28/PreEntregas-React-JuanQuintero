import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useProducts from "../customhooks/useProducts";
import { useState } from "react";



const ItemDetailContainer = () => {
    const {productId} = useParams()
    const {products, loading} = useProducts()
    const [quantity, setQuantity] = useState(0)
    
    const Increment = () => {
        setQuantity((quantity) => quantity + 1)
    }

    const Decrement = () => {
        setQuantity((quantity) => quantity - 1)
    }

    if(loading){
        return <h1>Cargando...</h1>
    }

    const productFind = products.find((product) => (
        product.id == productId
    ))
    
    return (
        <div className="container cardContainer">
            <div className="card text-center cardDetail">
                <div className="card-header">
                    {productFind.category}
                </div>
                <img src={productFind.img} className="card-img-top" alt={productFind.name}/>
                <div className="card-body">
                    <h5 className="card-title">{productFind.name}</h5>
                    <p className="card-text">{productFind.description}</p>
                    <p className="card-text">${productFind.price}</p>
                    <div className="cardNumberProducts">
                    <button type="button" className="btn btn-secondary btn-lg buttonCard" onClick={Decrement} disabled={quantity == 0}>
                        -
                    </button >
                    <p className="card-text">{quantity}</p>
                    <button type="button" className="btn btn-secondary btn-lg buttonCard" onClick={Increment} disabled={quantity >= productFind.stock}>
                        +
                    </button>
                    </div>
                    <p className="card-text">Stock disponible: {productFind.stock}</p>
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
                <div className="card-footer text-body-secondary">
                    <NavLink to={`/`} className="btn btn-primary">Volver</NavLink>
                </div>
            </div>
        </div>
    );
};


export default ItemDetailContainer;