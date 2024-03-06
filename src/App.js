
import './App.css';
import CreatedProducts from './CreatedProducts';
import ProductAdd from './ProductAdd';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  const createProduct = async (title , desc , price,category,stock) =>{
  const response = await axios.post('http://localhost:3000/products',{
    title , desc , price,category,stock
  })

  const createdProducts =[  ...products, response.data];
    setProducts(createdProducts);
  }

    const fetchFiltered  = async(params) =>{const filteredresponse = await axios.get(params !== null ? `http://localhost:3000/products?q=${params}` : "http://localhost:3000/products")
  setProducts(filteredresponse.data);}

  useEffect(
    ()=> { fetchFiltered(); },[]
  )
  
  const deleteProduct = async (id) =>{
   await axios.delete(`http://localhost:3000/products/${id}`)
  const afterDeletingProducts =  products.filter((product) =>{
      return product.id !== id
    });
    setProducts(afterDeletingProducts);
    }
     
  const filterCapture = (event) =>{
    setFilter(event.target.value)
  };
      const editProductbyId = async (id,title,desc,price,category,stock) =>{
        await axios.put(`http://localhost:3000/products/${id}`,{
          title:title,desc:desc,price:price,category:category,stock:stock
        })
        const afterEditingProducts =  products?.map((product) =>{
          if(product.id === id )
            {
              return {id,title:title,desc:desc,price:price,category:category,stock:stock}
            }
            return product;
          });
          setProducts(afterEditingProducts);
          }

          const onBack = async (event) => {
            event.preventDefault();
            await fetchFiltered(null);
            setFilter('');
          }   
          
          const onSubmit = async (event) => {
            event.preventDefault();
            await fetchFiltered(filter);
          }  

  return (
    <div className="App">
      <div className='form-filter'>
        <form >
            <input value={filter} onChange={filterCapture}></input>
            <button onClick={onSubmit}>Submit</button>
            <button onClick={onBack}>Back</button>
        </form>
    </div> 
      <ProductAdd onCreate={createProduct}/>

      <CreatedProducts products={products} onDelete={deleteProduct} onUpdate={editProductbyId}  />
    </div>
  );
}

export default App;
