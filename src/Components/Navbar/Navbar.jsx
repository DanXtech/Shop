// import "./Navbar.css"
// import Logo from "../../assets/logo2.png";
// import Cart from "../../assets/add.carts.png"
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItem } = useContext(ShopContext);

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={Logo} alt="" />
//                 <p>SHOPLIKES</p>
//             </div>
//             <ul className="nav-menu">
//                 <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to={"/"}>Shop</Link>
//                     {/* for this to work, the first thing is that we will check our menu is shop */}
//                     {menu === "shop" ? <hr /> : <></>}
//                     {/* <hr /> */}
//                 </li>
//                 <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to={"/mens"}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to={"/womens"}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
//                 <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to={"/kids"}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 <Link style={{ textDecoration: 'none' }} to={"/login"}><button>Login</button></Link>
//                 <Link style={{ textDecoration: 'none' }} to={"/cart"}><img src={Cart} alt="" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItem()}</div>
//             </div>
//         </div>
//     )
// }

// export default Navbar



import "./Navbar.css"
import Logo from "../../assets/logo2.png";
import Cart from "../../assets/add.carts.png"
import Menu from "../../assets/menu.png"
import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {

    // const [menu, setMenu] = useState("shop");
    const { getTotalCartItem } = useContext(ShopContext);
    // const [showOverlay, setShowOverlay] = useState(false);



    // const [showNavbar, setShowNavbar] = useState(false);
    // const handleShowNavbar = () => {
    //     setShowNavbar(!showNavbar)
    //     setShowOverlay(!showNavbar);

    // }



    // const handleOverlayClick = () => {
    //     setShowNavbar(false);
    //     setShowOverlay(false);
    // }

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src={Logo} alt="" />
                        <p>SHOPLIKES</p>
                    </div>
                    <div className="menu-icon" onClick={toggleNavbar}>
                        <img src={Menu} alt="" />
                    </div>

                    <div className={`nav-element ${isOpen ? 'active' : ''}`}>
                        {/* className={`nav-element ${showNavbar && 'active'}`} */}
                        <div >
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={closeNavbar}>Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mens" onClick={closeNavbar}>Mens</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/womens" onClick={closeNavbar}>Womens</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/kids" onClick={closeNavbar}>Kids</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='nav-button-1'>
                            <Link style={{ textDecoration: 'none' }} to={"/login"} onClick={closeNavbar}><button>Login</button></Link>
                            <Link style={{ textDecoration: 'none' }} to={"/cart"} onClick={closeNavbar}><img src={Cart} alt="" /></Link>
                            <div className="moblie-cart-count">{getTotalCartItem()}</div>

                        </div>
                    </div>
                    <div className="nav-button">
                        <Link style={{ textDecoration: 'none' }} to={"/login"} onClick={closeNavbar}><button>Login</button></Link>
                        <Link style={{ textDecoration: 'none' }} className="cart-moblie" to={"/cart"} onClick={closeNavbar}><img src={Cart} alt="" /></Link>
                        <div className="nav-cart-count">{getTotalCartItem()}</div>
                    </div>
                    {/* <button>login</button>
                    <button>login</button> */}
                </div>
            </nav>
        </>
    )
}


export default Navbar;






// import "./Navbar.css"
// import Logo from "../../assets/logo2.png";
// import Cart from "../../assets/add.carts.png"
// import Menu from "../../assets/menu.png"
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import './Navbar.css'; // Make sure to adjust the path to your CSS file

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeNavbar = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className={`navbar ${isOpen ? 'active' : ''}`}>
//             <div className="nav-container">
//                 <div className="nav-logo">
//                     <NavLink to="/" onClick={closeNavbar}>
//                         {/* Your logo or brand name */}
//                         Logo
//                     </NavLink>
//                 </div>
//                 <div className="menu-icon" onClick={toggleNavbar}>
//                     {/* Your menu icon */}
//                     ☰
//                 </div>
//                 <div className={`nav-element ${isOpen ? 'active' : ''}`}>
//                     <ul>
//                         <li>
//                             <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" onClick={closeNavbar}>About</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact" onClick={closeNavbar}>Contact</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
