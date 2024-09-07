import './OrderConfirmation.css'

const OrderConfirmation = (props) => {

    return (
        <div className='OrderConfirmation'>
            <div className='confirmation-container'>
                <img className='image' src='./images/icon-order-confirmed.svg' alt='' />
                <h1 className='heading'>Order Confirmed</h1>
                <p className='paragraph'>We hope you enjoy your food!</p>
                <div className='cart-summary'>
                    <div className='cart-summary-item'>

                        <div className='cart-item-info'>
                            <img className='cart-item-image' src='./images/image-waffle-thumbnail.jpg' alt='Product Image' />
                            <div className='wrapper'>
                                <h3 className='cart-item-heading'>Classic Tiramisu</h3>
                                <div className='quantity-and-unit-price'>
                                    <p className='quantity'>4x</p>
                                    <p className='unit-price'>@$7.00</p>
                                </div>
                            </div>
                        </div>
                        <p className='price-in-general'>$5.50</p>
                    </div>
                    <div className='order-total'>
                        <p className='order-total-txt'>Order Total</p>
                        <p className='order-total-price-summary'>$46.50</p>
                    </div>
                    <button className='new-order-button'>Start New Order</button>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation;