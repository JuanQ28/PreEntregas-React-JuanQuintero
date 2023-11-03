import { useParams } from "react-router-dom";
import useProducts from "../customhooks/useProducts";
import useFilter from "../customhooks/useFilter";
import { useEffect} from "react";
import ProductCard from "./ProductCard";


const ItemListContainer = () => {
    const {categoryName} = useParams()
    const {products, loading} = useProducts()
    const {filter, setFilter, filterComplete} = useFilter()    
    useEffect(() => {
        if(categoryName || filter){
            setFilter(categoryName)
        }
    }, [categoryName, setFilter, filter])

    if(loading){
        return (
            <div className="loaderContainer">
                <span className="loader"></span>
            </div>
        )
    }
    
    const filteredProducts = filterComplete(products) 
    return (
        <div className="container cardContainer">
            {
                filteredProducts.map((product) =>(
                    <ProductCard key={product.id} productIn={product}/>
                ))
            }
        </div>
    );
};


export default ItemListContainer;