import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breakcrum from "../Components/Breaknums/Breakcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import Relatedproduct from "../Components/Relatedproducts/Relatedproduct";
const Product = () => {
    const { all_product } = useContext(ShopContext);

    // step1 In  My App.js i have add my route which I pass my productID

    // step2 here i have use useParams to get my product Id
    const { productId } = useParams();

    // step3 using this product Id I can find the product in all products data

    // in this code function if the condition is true then this product will be displayed
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <>
            {/* Now I have to display the product in my page */}
            <div>
                <Breakcrum product={product} />
                {/* Next is to go to item and link it */}
                <ProductDisplay product={product} />
                <DescriptionBox />
                <Relatedproduct />
            </div>
        </>
    )
}

export default Product