import { useContext } from "react"
import CartContext from "../context/cart.context"
import useForm from "../customhooks/useForm"
import {getFirestore , collection, addDoc} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import Toastify from 'toastify-js'

const Checkout = () => {
    const cartContext = useContext(CartContext)
    const navigate = useNavigate()
    const [values, handleChange] = useForm({
        nombre: "",
        apellido: "",
        telefono: "",
        email1: "",
        email2: ""
    }) 

    const addOrder = () => {
        const db = getFirestore()

        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, {
            ...cartContext.cart,
            buyer:{
                nombre: values.nombre,
                apellido: values.apellido,
                telefono: values.telefono,
                email: values.email1
            },
            total: cartContext.getTotal(),
            date: new Date()
        }).then(({id}) => {
            cartContext.clear()
            navigate("/")
            Toastify({
                text: `Orden #${id}`,
                duration: 10000,
                isClosable: true,
                gravity: "bottom",
                position: "right",  
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(90deg, rgba(0,39,255,1) 0%, rgba(0,147,171,1) 35%, rgba(0,100,131,1) 100%)",
                }
            }).showToast()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.email1 !== values.email2){
            return alert("correos distintos")
        }

        addOrder()
    }

    return(
        <div className="container cartContainer">
            <h1>Resumen del carrito</h1>
            <div className="container cartContainer">
            {
                cartContext.cart.products.map((p) => (
                    <div key={p.product.id} className="cartContainer_card">
                        <div className="cartContainer_card_img">
                            <img src={p.product.img} alt={p.product.name} />
                        </div>
                        <div className="cartContainer_card_name">
                            <p>
                                {p.product.name}
                            </p>
                        </div>
                        <div className="cartContainer_card_price">
                            <p>
                                {p.product.price}$
                            </p>
                        </div>
                        <div className="cartContainer_card_quantity">
                            <p>
                                {p.quantity} und
                            </p>
                        </div>
                    </div>
                ))
            }
            <div>
                <p>
                    Total = {cartContext.getTotal()}$
                </p>
            </div>
        </div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="nombre" onChange={(e) => {handleChange(e)}} required={true}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Apellido</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="apellido" onChange={(e) => {handleChange(e)}} required={true}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Teléfono</span>
                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="telefono" onChange={(e) => {handleChange(e)}} required={true}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="email1" onChange={(e) => {handleChange(e)}} required={true}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Confirmar Email</span>
                    <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="email2" onChange={(e) => {handleChange(e)}} required={true}/>
                </div>
                <div className="input-group mb-3">
                    <input type="submit" value="Comprar" disabled={cartContext.cart.products.length === 0}/>
                </div>
            </form>
        </div>
    )
}

export default Checkout