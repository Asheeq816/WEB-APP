import React from 'react'
import './HomePage.css'



const data = [
  { name: "Product1", price: 'price1', quantity: "quantity1", category: 'category1' },
  { name: "Prodcut2", price: 'price2', quantity: "quantity2", category: 'category3' },


]

function HomePage() {
  return (
<div>
  <div className='List'>
<h1>List Of Products</h1>
      <div className="App">
        
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.quantity}</td>
                <td>{val.category}</td>
              </tr>
            )
          })}
        </table>
        </div>
      </div>
      </div>
      

      );
  }
      export default HomePage