import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./components/Layout";
import {data} from './pages/prodact'
import { useState } from "react";
import'./style.css';
import Error from "./pages/Error";


const App = ()=>{
  const [cate] = useState(data.cate)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {cate.map(ele => 
            <Route path={ele.name}>
              <Route index element={<Products />} />
              <Route path=':id' element={<Item />} />
            </Route>
          )}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
