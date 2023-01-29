import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, empty, increase, remove } from '../../store/cartSlice';

function Cart() {

  let { cart } = useSelector(state => state.CartReducer);

  let dispatch = useDispatch();

  let totalPrice = 0;

  cart.forEach(element => {
    totalPrice = totalPrice + (element.quantity * element.unitPrice)
  });


  return (<>
    <h1>Total Price: {totalPrice.toFixed(2)}</h1>
    <button className='w3-button w3-red' onClick={() => dispatch(empty())}>Empty Cart</button>
    <ul>
      {
        cart && cart.map(item => {
          return <>
            <li>{item.name}  *  {item.quantity} == {(item.unitPrice * item.quantity).toFixed(2)}</li>
            <button onClick={() => dispatch(remove(item))}>Remove Item</button>
            <button onClick={() => dispatch(increase(item.id))}> + </button>
            <button onClick={() => dispatch(decrease(item.id))}> - </button>

          </>
        })
      }
    </ul>
  </>
  )
}

export default Cart