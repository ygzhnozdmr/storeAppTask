import ProductShow from "./ProductShow";

function CreatedProducts({products,onDelete,onUpdate}) {
    

   
    return (
       <div className="product-all">
       
       { products.map((product,index)=> {
           return   <ProductShow product={product} key={index} onDelete={onDelete} onUpdate={onUpdate} />;
        })}
       </div>
       );
    
   
       
   }
   export default CreatedProducts