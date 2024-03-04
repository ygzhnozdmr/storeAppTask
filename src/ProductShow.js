import { useState } from "react";
import ProductAdd from "./ProductAdd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faAppleWhole,faGlassWater,faWineBottle,faCheese,faCarrot } from '@fortawesome/free-solid-svg-icons'




function ProductShow({product,onDelete,onUpdate}) {
    const [edit, setEdit] = useState(false);
    const handleEditClick = () =>{
        setEdit(!edit);
        };
   const handleDeleteClick = () =>{
    onDelete(product.id);
   }
//    const handleFilter = () =>{
//     onFilter(product.title,product.desc,product.price,product.category);
//    }
const handleEditSubmit = (id,title,desc,price,category,stock) =>{
    setEdit(false);
    onUpdate(id,title,desc,price,category,stock)
    };
    return ( 
     <div className='product-each'>
    { edit ? <ProductAdd product={product} productUpdate={true} onUpdate={handleEditSubmit} /> : (<div>
        {(product.category === "fruits") ? (<FontAwesomeIcon icon={faAppleWhole}/>) : ("")}
       {(product.category === "dairy") ? (<FontAwesomeIcon icon={faCheese} />) : ("")}
       {(product.category === "vegetables") ? (<FontAwesomeIcon icon={faCarrot} />) : ("")}
       {(product.category === "beverages") ? (<FontAwesomeIcon icon={faWineBottle} />) : ("")}
       {(product.category === "water") ? (<FontAwesomeIcon icon={faGlassWater} />) : ("")}
       
                <h3 >{product.title}</h3>
                <h4 >{product.desc}</h4>
                <p >Price: {product.price}</p>
                <p >Stock: {product.stock}</p>
      

        <div className='buttons' >     
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditClick} />
            <FontAwesomeIcon icon={faTrash} style={{color: "#ff4013",}} onClick={handleDeleteClick} />
         </div></div>)
    }

      
       
    </div>)
}



  


export default ProductShow;