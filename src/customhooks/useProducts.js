import { useEffect, useState } from "react"
import { getProducts } from "../services/products"

const useProducts = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setLoading(false))
    }, [])

    return {
        products,
        loading
    }
}

export default useProducts