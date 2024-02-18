//import { useState } from "react";
//import ProductAdd from "./ProductAdd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faAppleWhole,faGlassWater,faWineBottle,faCheese,faCarrot } from '@fortawesome/free-solid-svg-icons'




function ProductShow({product,onDelete}) {
    // const [edit, setEdit] = useState(false);
    // const handleChanger = () =>{
    //     setEdit(!edit);
    //     };
   const handleDeleteClick = () =>{
    onDelete(product.id);
   }
 
 
    return ( 
     <div className='product-each'>

       {(product.category === "fruits") ? (<FontAwesomeIcon icon={faAppleWhole}/>) : ("")}
       {(product.category === "dairy") ? (<FontAwesomeIcon icon={faCheese} />) : ("")}
       {(product.category === "vegetables") ? (<FontAwesomeIcon icon={faCarrot} />) : ("")}
       {(product.category === "beverages") ? (<FontAwesomeIcon icon={faWineBottle} />) : ("")}
       {(product.category === "water") ? (<FontAwesomeIcon icon={faGlassWater} />) : ("")}
       
                <h3 >{product.title}</h3>
                <p >{product.desc}</p>
                <p >{product.price}</p>
      

        <div className='buttons' >     
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} style={{color: "#ff4013",}} onClick={handleDeleteClick} />
         </div>
    </div>)
}



  


export default ProductShow;