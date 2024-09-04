import './ProductList.css';
import Product from "./Product";

const ProductList = (props) => {
    return (
        <div className='products-list-container'>
            <h1 className='list-header'>Desserts</h1>
            <div className="product-list">
                {props.products && props.products.map((product) => {
                    return <Product  key={product.id} product={product} incrementQuantity={props.incrementQuantity} 
                    decrementQuantity={props.decrementQuantity}/>
                })}
            </div>
        </div>

    )
}

export default ProductList;