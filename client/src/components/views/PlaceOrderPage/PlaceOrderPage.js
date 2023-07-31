import React ,{useState} from 'react'
import {Button, Form, Input, Typography} from 'antd'
import { useDispatch } from 'react-redux';
import Axios from 'axios'
import {
    //removeCartItem,
    onSuccessBuy
} from '../../../_actions/user_actions';
const { Title } = Typography;

const async = require('async');

function PlaceOrderPage(props){
    const dispatch = useDispatch();
    //const [productList, setProductList] = useState([]);
    const [userAddress, setUserAddress] = useState({
        houseNumber: '',
        street: '',
        city: '',
        state: '',
        pinCode: 0,
        Phone: 0,
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
      };

    //   const removeFromCart = (productId) => {

    //     dispatch(removeCartItem(productId))
    //         .then((response) => {
    //             if (response.payload.cartDetail.length <= 0) {
    //                 setShowTotal(false)
    //             } else {
    //                 calculateTotal(response.payload.cartDetail)
    //             }
    //         })
    // }


    const onSubmit = (event) =>{
        event.preventDefault();
        const variables = {
            userID: props.user.userData._id,
            address: userAddress,
            productList : props.user.userData.cart,
        }
        Axios.post('/api/order/uploadOrder', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Order Successfully Placed')
                    Axios.post('/api/order/onPlace', props._id)
                    //  for(let idx = 0; idx < variables.productList.length; idx++){
                    //     console.log("p_id", variables.productList[idx].id);
                    //     removeCartItem(variables.productList[idx].id);
                    // }

                    props.history.push('/')
                } else {
                    alert('Failed to Place Order')
                }
            })
    }

      return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Provide Your Address</Title>
            </div>
            <Form onSubmit={onSubmit}>
                <label>House Number</label>
                <Input type='text' name='houseNumber' value={userAddress.houseNumber}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Street</label>
                <Input type='text' name='street' value={userAddress.street}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>City</label>
                <Input type='text' name='city' value={userAddress.city}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>State</label>
                <Input type='text' name='state' value={userAddress.state}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Pin</label>
                <Input type='number' name='pinCode' value={userAddress.pinCode}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Phone</label>
                <Input type='number' name='Phone' value={userAddress.Phone}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <Button onClick={onSubmit}>
                    Order
                </Button>
            </Form>

        </div>
    )
}


export default PlaceOrderPage;