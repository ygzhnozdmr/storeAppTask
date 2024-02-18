
import './App.css';
import CreatedProducts from './CreatedProducts';
import ProductAdd from './ProductAdd';
import { useState } from 'react';




function App() {
  const [products, setProducts] = useState([]);


  const createProduct = (title , desc , price,category,stock) =>{
    console.log(title,desc,price,category,stock)
  const createdProducts =[  ...products, {id:Math.round(Math.random()*999999),
    title,desc,price,category,stock}];
  setProducts(createdProducts);
  console.log(createdProducts[0])
  }

  const deleteProduct = (id) =>{
  const afterDeletingProducts =  products.filter((product) =>{
      return product.id !== id
    });
    setProducts(afterDeletingProducts);
    }
    const [filter, setFilter] = useState('')
    const FilterCapture = (event) =>{
        setFilter(event.target.value)
         };

    const filterSubmit = (event,products) => {
        event.preventDefault();
         const beforeFilteringProducts = products;
        return beforeFilteringProducts;
        setFiltering();
      
        

      }
      function setFiltering() {
        const afterFilteringProducts = products.filter((product) =>{
          return (product.title || product.desc ) == filter ;
        })
        setProducts(afterFilteringProducts);
      }
      
    
     
        const filterBackSubmit = (event,beforeFilteringProducts) => {
          event.preventDefault();
          setProducts(beforeFilteringProducts)
        }

  return (
    <div className="App">
      <div className='form-filter'>
        <form >
            <input value={filter} onChange={FilterCapture}></input>
            <button onClick={filterSubmit}>Submit</button>
            <button onClick={filterBackSubmit}>Back</button>
        </form>
    </div> 
      <ProductAdd onCreate={createProduct}/>

      <CreatedProducts products={products} onDelete={deleteProduct}  />
    </div>
  );
}

export default App;
