
import "../Css/Login.css"
const Login = () => {
    return (
        <div className="container login-box">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Contine</button>
                <p className="login-SignUp">
                    Already have an account? <span>Login here</span>
                </p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the trems of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Login