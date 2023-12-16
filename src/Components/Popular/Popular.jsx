import "./Popular.css"
import data_product from "../../assets/data"
import Item from "../Item/Item"
const Popular = () => {
    return (
        <section className=" popular-gta">
            <div className="popular">
                <div className="popular-head">
                    <h2>Popular In Women</h2>
                    <hr />
                </div>
                <div className="popular-item">
                    {data_product.map((item, i) => {
                        return <Item key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Popular