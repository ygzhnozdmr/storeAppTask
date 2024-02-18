import { useState } from "react";

function ProductAdd({onCreate}) {
    
   
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("" );
    const [price, setPrice] = useState( "");
    const [category, setCategory] = useState( "");
    const [stock, setStock] = useState(0);




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
        console.log(price);
        onCreate(title,desc,price,category,stock);
    };


    
    return (
    <div className="divForm" onSubmit={handleSubmit}>
        <form className="forminput">
            <h3>Add Product</h3>
            <label>Product Name</label>
            <input type="text" value={title} onChange={titleCapture}></input>
            <label>Product Description</label>
            <input type="text" value={desc} onChange={descCapture}></input>
            <label>Product Price</label>
            <input type="text" value={price} onChange={priceCapture}></input>
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
                <input type="text" value={stock} onChange={stockCapture}></input>

            <button onClick={handleSubmit} >Submit</button>
        </form >
    </div>  );
}

export default ProductAdd;