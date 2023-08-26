import React from 'react'
import Cards from './Cards'


function Home({products}) {
  return (
    <div>
 
      <div className="container">
        <div className="row">
          {
            products.map(products=>{
              return(
                <div key={products.id} className="col-md-3">
                  <Cards products={products}/>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home
