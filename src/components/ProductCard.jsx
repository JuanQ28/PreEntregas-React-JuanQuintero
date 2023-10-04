import { NavLink } from "react-router-dom"

const ProductCard = ({productIn, key}) => {
    return(
    <div key={key} className="card">
        <img src={productIn.img} className="card-img-top" alt={productIn.name}/>
        <div className="card-body">
            <h5 className="card-title">{productIn.name}</h5>
            <NavLink to={`/product/${productIn.id}`} className="btn btn-primary">Details</NavLink>
        </div>
    </div>
    )
}

export default ProductCard