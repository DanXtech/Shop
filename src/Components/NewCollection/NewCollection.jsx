import './NewCollection.css'
import new_Cellection from "../../assets/newCellection"
import Item from "../Item/Item"
const NewCollection = () => {
    return (
        <section className=' new-collections'>
            <div className='container-collection'>
                <h1>New Collections</h1>
                <hr />
                <div className="collections">
                    {new_Cellection.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>

        </section>
    )
}

export default NewCollection