import { useState } from "react";
function ProductFilter() {
const [filter, setFilter] = useState('')
const FilterCapture = (event) =>{
    setFilter(event.target.value)
     };
const filterSubmit = (event) => {
    event.preventDefault();}
//     onFilter(title,desc,price,category,stock);
// 
    return ( <div>
        <form>
            <input value={filter} onChange={FilterCapture}></input>
            <button onClick={filterSubmit}>Submit</button>
        </form>
    </div> );
}

export default ProductFilter;