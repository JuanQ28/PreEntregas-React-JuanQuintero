import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useProducts from "../customhooks/useProducts";
import useFilter from "../customhooks/useFilter";
import { useEffect} from "react";


const ItemListContainer = () => {
    const {categoryName} = useParams()
    const {products, loading} = useProducts()
    const {setFilter, filterComplete} = useFilter()    

    useEffect(() => {
        if(categoryName){
            setFilter(categoryName)
        }
    }, [categoryName])

    if(loading){
        return <h1>Cargando...</h1>
    }
    
    const filteredProducts = filterComplete(products) 
    return (
        <div className="container cardContainer">
            {
                filteredProducts.map((product) =>(
                    <div key={product.id} className="card">
                        <img src={product.img} className="card-img-top" alt={product.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <NavLink to={`/product/${product.id}`} className="btn btn-primary">Details</NavLink>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


export default ItemListContainer;