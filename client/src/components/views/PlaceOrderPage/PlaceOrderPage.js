import React ,{useState} from 'react'
import {Button, Form, message, Input, Icon} from 'antd'
import Axios from 'axios'

function PlaceOrderPage(props){
    const [productList, setProductList] = useState([]);
    const [address, setAddress] = useState({
        houseNumber: '',
        street: '',
        city: '',
        state: '',
        pinCode: 0,
        Phone: 0,
      });


    
}


export default PlaceOrderPage;