import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './index.css'
import ShopContextProver from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProver>
    <App />
  </ShopContextProver>,
)
