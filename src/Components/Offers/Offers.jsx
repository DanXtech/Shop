import "./Offers.css"
import exclucive_image from "../../assets/exclucive_image.png"
const Offers = () => {
    return (
        <>
            <div className="container offers">
                <div className="offers-inner">
                    <div className="offers-left">
                        <h1>Exclusive</h1>
                        <h1>Offers for you</h1>
                        <p>Only on best sellers projects</p>
                        <button>Check Now</button>
                    </div>
                    <div className="offers-right">
                        <img src={exclucive_image} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offers