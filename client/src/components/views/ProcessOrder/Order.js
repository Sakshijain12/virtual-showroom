import React from 'react'
// import PropTypes from "prop-types";
import "./Order.css"

function Order(props) {
  return (
    <div className="order">
      <span>
        <a href = "/orderview/" productID = {props.productId}>{props.productId}</a>
      </span>
    </div>
  )
}

export default Order