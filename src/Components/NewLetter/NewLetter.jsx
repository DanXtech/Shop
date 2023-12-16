import "./NewLetter.css"

const NewLetter = () => {
    return (
        <section className='newsletter'>
            <h1>Get Exclusive Ofeers On Your Email</h1>
            <p>Subscribe to our NewLetter andstay updated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </section>
    )
}

export default NewLetter                                
