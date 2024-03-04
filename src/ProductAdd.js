import { useState } from "react";

function ProductAdd({onCreate,product,productUpdate,onUpdate}) {
    
   
    const [title, setTitle] = useState(product ? product.title : "");
    const [desc, setDesc] = useState(product ? product.desc : "");
    const [price, setPrice] = useState(product ? product.price : "");
    const [category, setCategory] = useState(product ? product.category : "");
    const [stock, setStock] = useState(product ? product.stock : "");




    const titleCapture = (event) =>{
   setTitle(event.target.value)
    };

    const descCapture =(event) =>{
    setDesc(event.target.value);
    };

    const priceCapture = (event) => {
    setPrice(event.target.value);
    };
    const stockCapture = (event) => {
        setStock(event.target.value);
        };
    const categoryCapture = (event) => {

        setCategory(event.target.value.toLowerCase());
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(productUpdate){
            onUpdate(product.id,title,desc,price,category,stock)
        }
        else{onCreate(title,desc,price,category,stock);}
        console.log(price);
        
    };


    
    return (
        <div> 
            {productUpdate ?  <div className="product-update" >
        <form className="edit-input">
            <h3>Add Product</h3>
            <label>Product Name</label>
            <input type="text" value={title} onChange={titleCapture}></input>
            <label>Product Description</label>
            <input type="text" value={desc} onChange={descCapture}></input>
            <label>Product Price</label>
            <input type="text" value={price} onChange={priceCapture}></input>
            <br></br>
            <label>Stock</label>
            <br></br>
            <input type="text" value={stock} onChange={stockCapture}></input>
            <li>
                <select  onChange={categoryCapture}>
                    <option>--Choose Category--</option>
                    <option>Dairy</option>
                    <option >Fruits</option>
                    <option >Vegetables</option>
                    <option >Beverages</option>
                    <option >Water</option>

                </select>
                </li>
                <br></br>

            <button onClick={handleSubmit} >Submit</button>
        </form >
    </div> :  <div className="divForm" onSubmit={handleSubmit}>
        <form className="forminput">
            <h3>Add Product</h3>
            <label>Product Name</label>
            <input type="text" value={title} onChange={titleCapture}></input>
            <label>Product Description</label>
            <input type="text" value={desc} onChange={descCapture}></input>
            <label>Product Price</label>
            <input type="text" value={price} onChange={priceCapture}></input>
            <label>Stock</label>
                <input type="text" value={stock} onChange={stockCapture}></input>
            <li>
                <select  onChange={categoryCapture}>
                    <option>--Choose Category--</option>
                    <option>Dairy</option>
                    <option >Fruits</option>
                    <option >Vegetables</option>
                    <option >Beverages</option>
                    <option >Water</option>

                </select>
                </li>
                <br></br>

            <button onClick={handleSubmit} >Submit</button>
        </form >
    </div>}
        </div>
     );
}

export default ProductAdd;