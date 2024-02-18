import ProductShow from "./ProductShow";

function CreatedProducts({products,onDelete}) {
    

   
    return (
       <div className="product-all">
       
       { products.map((product,index)=> {
           return   <ProductShow product={product} key={index} onDelete={onDelete}/>;
        })}
       </div>
       );
    
   
       
   }
   export default CreatedProducts