import { useState } from "react"

const useCounter = () => {
    const [quantity, setQuantity] = useState(0)
    
    const Increment = () => {
        setQuantity((quantity) => quantity + 1)
    }

    const Decrement = () => {
        setQuantity((quantity) => quantity - 1)
    }

    return {quantity, Increment, Decrement}
}

export default useCounter