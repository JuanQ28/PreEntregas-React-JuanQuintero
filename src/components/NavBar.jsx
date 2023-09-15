import Brand from "./Brand";
import CardWidget from "./CardWidget";
import HamButton from "./HamButton-navbar";
import NavLink from "./NavLink-navbar";

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary navbar-expand-md">
            <div className="container-fluid">
                <Brand/>
                <HamButton/>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ArmyBody</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <NavLink content="Productos" isActive={true} />
                    </li>
                    <li className="nav-item">
                        <NavLink content="Sucursales"/>
                    </li>
                    <li className="nav-item">
                        <NavLink content="Noticias"/>
                    </li>
                    <li className="nav-item">
                        <NavLink content="Nosotros"/>
                    </li>
                    <li className="nav-item">
                        <CardWidget count={3}/>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;