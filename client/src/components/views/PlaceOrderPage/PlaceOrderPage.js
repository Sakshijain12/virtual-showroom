import React ,{useState} from 'react'
import {Button, Form, message, Input, Icon, Typography} from 'antd'
import Axios from 'axios'
const { Title } = Typography;

function PlaceOrderPage(props){

    const [productList, setProductList] = useState([]);
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
        console.log(userAddress);
      };


    const onSubmit = (event) =>{
        event.preventDefault();
        console.log("cart",props.user.userData.cart)
        const variables = {
            userID: props.user.userData._id,
            //address: userAddress,
            Phone : userAddress.Phone,
            productList : props.user.userData.cart,
        }

        Axios.post('/api/order/uploadOrder', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Order Successfully Placed')
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