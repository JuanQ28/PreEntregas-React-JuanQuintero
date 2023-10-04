import { useParams } from "react-router-dom";
import useProducts from "../customhooks/useProducts";
import useFilter from "../customhooks/useFilter";
import { useEffect} from "react";
import ProductCard from "./ProductCard";


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
                    <ProductCard key={product.id} productIn={product}/>
                ))
            }
        </div>
    );
};


export default ItemListContainer;