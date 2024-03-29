import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/CartContext'
import ItemCount from '../ItemCount'


const ItemDetail = ({ product, imgs }) => {

  const [cant, setCant] = useState(0)

  const nav = useNavigate()

  const { addItem } = useContext(Shop)

  const goTo = () => {
    nav('/cart')
  }

  const showAdd = (cantidad) => {
    setCant(cantidad)
    addItem(product, cantidad)
  }
  return (
    <div className='container row'>
      <div id="carouselExampleControls" className="carousel carousel-dark slide col-md-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {imgs.map((elem) => {
            return <div key={imgs.indexOf(elem)} className="carousel-item active">
              <img src={elem} className="d-block w-100" style={{height: 400}} alt="..." />
            </div>
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='col-md-7'>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        {!cant ? <ItemCount stock={product.stock} initial={1} onAdd={showAdd} /> : <button onClick={goTo} className="btn btn-outline-dark">Ir al carrito</button>}
      </div>
    </div>
  )
}

export default ItemDetail





