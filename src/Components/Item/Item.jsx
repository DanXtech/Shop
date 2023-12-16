import { Link } from "react-router-dom"
import "./Item.css"

const Item = (props) => {
    return (
        <>
            <div className='items'>
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
                <p>{props.name}</p>
                <div className="items-prices">
                    <div className="items-price-new">
                        <span>${props.new_price}</span>
                    </div>
                    {/* <hr /> */}
                    <div className="items-price-old">
                        <span>${props.old_price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item