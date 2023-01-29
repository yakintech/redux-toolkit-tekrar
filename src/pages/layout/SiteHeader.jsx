import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {
  return (<>

    <ul style={{display:'flex', justifyContent:'space-between'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/cart'>Cart</Link></li>
    </ul>
  
  </>
  )
}

export default SiteHeader