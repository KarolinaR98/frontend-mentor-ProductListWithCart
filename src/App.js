import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';


const App = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then((data) => {
        const dataHolder = data.map((item, index) => {
          return { ...item, id: index, quantity: 0 }
        })
        setProducts(dataHolder)

      })
      .catch(err => {
        console.error('Error fetching data: ' + err);
      })
  }, []);

  const incrementQuantity = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: element.quantity + 1 }
        : { ...element }
      ))
    }
  }

  const decrementQuantity = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: element.quantity - 1 }
        : { ...element }
      ))
    }
  }

  const removeItems = (id) => {

    if (products.some(element => element.id === id)) {

      setProducts(products => products.map(element => element.id === id
        ? { ...element, quantity: 0 }
        : { ...element }
      ))
    }
  }

  return (
    <div className="App">
      {<div className='main-content'>
        <ProductList products={products} incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity} />
        <Cart products={products} removeItems={removeItems} />
      </div>}
    </div>
  );
}

export default App;
