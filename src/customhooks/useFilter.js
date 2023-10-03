import { useState } from "react"

const useFilter = (initialValue = "all") => {
    const [filter, setFilter] = useState(initialValue)

    const filterComplete = (products) => {
        if(filter == "all" || !filter){
            return products
        }else{
            return products.filter((product) => product.category == filter)
        }
    }

    return {filter, setFilter, filterComplete}

}

export default useFilter