import { useState } from "react";


function App() {
  const [product, setProduct] = useState({})
  return (
    <>
      <h1>¯\_(ツ)_/¯ Lesson 19 Client (Front-end)</h1>
      <hr></hr>
      <button onClick={async () => {
        let res = await fetch('http://localhost:2000/api/product')
        let resJson = await res.json()
        setProduct(resJson)
      }}>Загрузить</button>
      <h2>Блюдо: {product.name}</h2>
    </>
  );
}

export default App;
