import { useParams } from "react-router-dom";
import useProducts from "../customhooks/useProducts";
import ItemDetail from "../customhooks/itemDetail";



const ItemDetailContainer = () => {
    const {productId} = useParams()
    const {products, loading} = useProducts()

    if(loading){
        return <h1>Cargando...</h1>
    }

    const productFind = products.find((product) => (
        product.id == productId
    ))
    
    return (
        <div className="container cardContainer">
            <ItemDetail product={productFind}/>
        </div>
    );
};


export default ItemDetailContainer;