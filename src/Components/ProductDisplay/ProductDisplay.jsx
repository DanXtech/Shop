import { useContext } from "react";
import "./ProductDisplay.css"
import { ShopContext } from "../../Context/ShopContext";
import { IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const ProductDisplay = (props) => {
    // for this to work I will add props
    const { product } = props;

    // so in this function I when to add the product Id in which I will link the function into adDToCart Id
    const { addToCart } = useContext(ShopContext);
    //After doing the onclick then you we go to shopcontext.jsx and console-log

    return (
        <div className="Productdisplay">
            <div className="ProductDisplay-left">
                <div className="Productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {/* star */}
                    {/* <img src="star icon" alt="" /> */}
                    {/* <img src="star icon" alt="" /> */}
                    {/* <img src="star dull icon" alt="" /> */}
                    <span>{IoIosStarOutline}</span>
                    <span>{IoIosStarOutline}</span>
                    <span>{IoIosStarOutline}</span>
                    <span>{IoIosStarHalf}</span>
                    <p>(22)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">
                    A lightweight, usally knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an ubdershirtor outer garment
                </div>
                <div className="productdisplay-right-sizes">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button className="productdisplay-right-button" onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay