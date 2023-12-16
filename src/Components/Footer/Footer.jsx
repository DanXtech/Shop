import "./Footer.css"
import Logo from "../../assets/logo2.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="" />
                <p>SHOPLIKES</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-iocns-container">
                    {/* instagram_icon */}
                    {/* pintester */}
                    {/* whatapp */}
                    1
                </div>
                <div className="footer-iocns-container">
                    {/* instagram_icon */}
                    {/* pintester */}
                    {/* whatapp */}
                    2
                </div>
                <div className="footer-iocns-container">
                    {/* instagram_icon */}
                    {/* pintester */}
                    {/* whatapp */}
                    3
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer