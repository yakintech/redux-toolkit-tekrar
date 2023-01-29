import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';

function ProductList() {

  const [products, setproducts] = useState([]);

  let dispatch = useDispatch();

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data);
      })

    return () => {

    }
  }, [])

  const addToCart = (item) => {
    dispatch(add(item))
  }

  return (<>
    <table className="w3-table w3-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Stock</th>
          <th>Add to Cart</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map(item => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td><button onClick={() => addToCart(item)} className='w3-button w3-aqua'>Add to Cart</button></td>
            </tr>
          })
        }
      </tbody>

    </table>
  </>
  )
}

export default ProductList