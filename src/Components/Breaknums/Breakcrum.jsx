import "./Breakcrum.css"
import { IoIosArrowForward } from "react-icons/io";

const Breakcrum = (props) => {

    // So for me to get the product I have to use props
    const { product } = props;
    return (
        <div className="Breakcrum">
            HOME<IoIosArrowForward />SHOP <IoIosArrowForward />{product.category}<IoIosArrowForward />{product.name}
            {/* So the next is to connect it to the product page */}
        </div>
    )
}

export default Breakcrum