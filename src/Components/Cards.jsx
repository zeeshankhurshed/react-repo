import React from 'react'


function Cards({products}) {
  return (
    <>
     <div className="card align-items-center mt-3" >
  <img src={products.image} className="card-img-top w-50 h-75" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{products.title.slice(0,18)}...</h5>
    <p className="card-text">{products.description.slice(0,80)}...</p>
    <p className="card-text">{products.catagory}</p>
    <p className="card-text">${products.price}</p>
    <p className="card-text">{products.rating.rate}</p>
    <p className="card-text">{products.rating.counts}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> 
    </>
  )
}

export default Cards
