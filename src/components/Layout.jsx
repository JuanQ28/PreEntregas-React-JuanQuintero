import NavBar from "./NavBar"

export const Layout = (props) => {
    return (
        <div className="layout">
            <NavBar/>
            {props.children}
        </div>
    )
}