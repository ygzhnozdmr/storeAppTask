
import './App.css';
import CreatedProducts from './CreatedProducts';
import ProductAdd from './ProductAdd';
import { useState } from 'react';
import ProductFilter from './ProductFilter';



function App() {
  const [products, setProducts] = useState([]);
  //const [first, setfirst] = useState(secon)

  const createProduct = (title , desc , price,category) =>{
    console.log(title,desc,price,category)
  const createdProducts =[  ...products, {id:Math.round(Math.random()*999999),
    title,desc,price,category}];
  setProducts(createdProducts);
  console.log(createdProducts[0])
  }

  const deleteProduct = (id) =>{
  const afterDeletingProducts =  products.filter((product) =>{
      return product.id !== id
    })
    setProducts(afterDeletingProducts);
    }
 


  return (
    <div className="App">
      <ProductFilter/>
      <ProductAdd onCreate={createProduct}/>
      <CreatedProducts products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;
