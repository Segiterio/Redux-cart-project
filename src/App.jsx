import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/NavBar";
import Home from './assets/Home';
import Cart from "./assets/Cart";
import { useEffect,useState} from 'react'


function App() {
  const [Loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  const [Data, setData] = useState([]);
  async function fetchApi() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    catch (e) {
      console.log(e);
      setData([]);
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);
 
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home Data={Data} Loading={Loading}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
