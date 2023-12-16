import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
// import { AiTwotoneDelete } from 'react-icons/ai';
// import { MdDelete } from 'react-icons/md'
import './CartItems.css'

const CartItems = () => {
    // I when to have access to Data and function using context api
    // const { all_product, cartItems, removeFromCart } = useContext(ShopContext)
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitem-farmat-main">
                <p>Product</p>
                <p className='p-ml'>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <>
                            <div>
                                <div>
                                    <div className="cartitems-format cartitem-farmat-main">
                                        <img src={e.image} className='carticon-product-image' alt="" />
                                        <p className='table-gta'>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                        <p>${e.new_price * cartItems[e.id]}</p>
                                        {/* <img src="" className='remove-icon' alt="" /> */}
                                        <button className='cartitem-remove-icon' onClick={() => { removeFromCart(e.id) }}>

                                            {/* {AiTwotoneDelete} */} x
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </>
                    )
                }
                return null;

            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shoping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems