import "./Hero.css"
// import HeroShopping from "../../assets/hero-shopping.png"
import HeroShopping from "../../assets/hero-shopping.jpg";

const Hero = () => {
    return (
        <>
            <section className="container hero">
                <div className="hero-inner">
                    <div className="hero-left">
                        <h1>Neew Arrivals Only</h1>
                        <div>
                            <div className="hand-hand-icon">
                                <p>New</p>
                                {/* <img src="" alt="" /> */}
                                <h2>👋</h2>
                            </div>
                            <p>Collections</p>
                            <p>For every</p>
                        </div>
                        <div className="hero-latest-btn">
                            <div>Latest Collection</div>
                            👉
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={HeroShopping} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero