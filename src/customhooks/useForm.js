import { useState } from "react";


export default function useForm(firstValues) {
    const[values, setValues] = useState(firstValues)

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }

    function handleReset() {
        setValues(firstValues)
    }

    return [values, handleChange, handleReset]
}