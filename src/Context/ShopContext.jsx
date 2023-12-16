import { createContext, useState } from "react";
import all_product from "../assets/all_product"

export const ShopContext = createContext(null);

const getfaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProver = (props) => {

    const [cartItems, setCartItems] = useState(getfaultCart());

    // move the context below because of the cart function
    // const contextValue = { all_product, cartItems };



    // we will create add to cart function

    const addToCart = (itemId) => {
        /// first I we send the prev value
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        /// first I we send the prev value
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    // The nexthing is to move to add to productdisplay

    // lastly I will insart the cart total value

    // const getTotalCartAmount = () => {

    //     let totalAmount = 0;
    //     // then I will run the forloop function
    //     for (const item in cartItems) {
    //         // inthis function I will pass an item if the quatity item is greater then 0 
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((product) => product.id === Number(item));
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }

    // }

    // so i will pass this getTotalCartAmount in this contextValue


    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((Product) => Product.id === Number(item));
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    // }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((Product) => Product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }


    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // so the next thing is to pass this function getTotalCartItem into my context api
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProver;














// import { createContext, useState } from "react";
// import all_product from "../assets/all_product"

// export const ShopContext = createContext(null);
// // Now I have created one Context in this it will be null

// // now the nexthing to create shopContext provider


// const getfaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.lenght; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProver = (props) => {

//     // add to cart in the code here we create a product value whichnis number of value by creating function
//     // const getfaultCart = ()=>{
//     //     // And the we will create one variable which is below
//     //     let cart = {};
//     //     // Next isto createall product frst value by using forloop in this i Will add a condition in my forloop
//     //     for (let index = 0; index < all_product.lenght; index++) {
//     //         // here I add a card
//     //         cart[index] = 0;
//     //     }

//     //     return card;
//     //     // after that which is for loop we will return our card
//     // }

//     // Keep this function outside the ShopContextProver


//     // const contextValue = { all_product };
//     // in this ShopContextProver we will create one content variable

//     // Let  of the part of this project
//     const [cartItems, setCartItems] = useState(getfaultCart());
//     const contextValue = { all_product, cartItems };
//     // at the top when get an empty card we get

//     // Using this context I can access the  data item  using conponent
//     console.log(cartItems)


//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProver;