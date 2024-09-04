import './Cart.css';

const Cart = (props) => {

    const countItemsInCart = (products) => {

        let selectedProducts = 0;

        for (let i = 0; i < products.length; i++) {
            if (products[i].quantity > 0) {
                selectedProducts += products[i].quantity;
            }
        }

        return selectedProducts;
    }

    const countTotalPrice = (products) => {

        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            if (products[i].quantity > 0) {

                let unitPrice = products[i].price;
                let quantity = products[i].quantity;

                totalPrice += unitPrice * quantity;
            }
        }

        return totalPrice.toFixed(2);
    }


    return (
        <div className='cart-container'>
            <h2 className='cart-heading'>Your Cart ({props.products ? countItemsInCart(props.products) : '0'})</h2>
            {!props.products || countItemsInCart(props.products) === 0 && <div className='empty-cart'>
                <img src='./images/illustration-empty-cart.svg' alt='Empty Cart Image' />
                <p>Your added items will apear here</p>
            </div>}
            {props.products && countItemsInCart(props.products) !== 0 && <div className='cart-with-items'>
                {props.products.map((product) => {
                    if (product.quantity !== 0) {

                        return (
                            <div key={product.id} className='cart-item'>
                                <div className='selected-product'>
                                    <h3 className='product-heading'>{product.name}</h3>
                                    <div className='item-order-details'>
                                        <p className='quantity'>{product.quantity}x</p>
                                        <p className='unit-price'>@ ${Number(product.price).toFixed(2)}</p>
                                        <p className='price-in-general'>${(Number(product.price) * product.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className='remove-from-cart-button' onClick={()=>{props.removeItems(product.id)}}></button>
                            </div>
                        )
                    }

                })}
                <div className='order-summary'>
                    <p className='order-txt'>Order Total</p>
                    <p className='price-summary'>${countTotalPrice(props.products)}</p>
                </div>
                <div className='delivery-info'>
                    <img src='./images/icon-carbon-neutral.svg' alt='Tree Icon' />
                    <p className='delivery-info-txt'>This is carbon-neutral delivery</p>
                </div>
                <button className='confirmation-button'>Confirm Order</button>
            </div>}
        </div>
    )
}

export default Cart;