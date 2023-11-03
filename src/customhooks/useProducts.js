import { useEffect, useState } from "react"
//import { getProducts } from "../services/products"
import {getFirestore , collection, getDocs} from "firebase/firestore"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, "products")
        getDocs(productsCollection).then((snapshot) => {
            if(!snapshot.empty){
                setProducts(snapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            }
        }). catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    return {
        products,
        loading
    }
}

export default useProducts