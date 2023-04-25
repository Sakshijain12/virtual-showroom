import React from 'react'
// import PropTypes from "prop-types";
import "./Order.css"
import "./OrderView.js"

function Order(props) {
  return (
    <div className="order">
      <span><a href = "/orderview" >{props.orderID} </a></span>
    </div>
  )
}

export default Order