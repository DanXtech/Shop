import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaArrowDown } from "react-icons/fa";
import Item from "../Components/Item/Item"
import "../Css/Shopcategory.css"

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <>
            <div className="shop-category">
                <div className="hero-banner">
                    <img src={props.banner} alt="" className="shop-banner" />
                    <div className="shop-discription">
                        <h1>{props.Title}</h1>
                        <p>{props.Discriptions}</p>
                        <button>Chat us</button>
                    </div>
                </div>

                <div className="shopcategory-indexSort">
                    <p>
                        <span>Shoping 1-12</span> out of 36 products
                    </p>
                    <div className="shopcategory-sort">
                        <FaArrowDown />
                    </div>
                </div>
                <div className="shopcategory-container">
                    <div className="container shopcategory-product">
                        {/* {all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                        else {
                            return null;
                        }
                    })} */}

                        {all_product.map((item, i) => {
                            if (props.category === item.category) {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                <div className="shopcategory-loadmore">
                    Explore
                </div>
            </div>
        </>
    )
}

export default ShopCategory;