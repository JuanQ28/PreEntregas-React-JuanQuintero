const NavLink = ({content, isActive = false}) => {
    return (
        <a className={`nav-link ${isActive ?'active' :null}`} aria-current="page" href="#">
            {content}
        </a>
    );
};

export default NavLink;