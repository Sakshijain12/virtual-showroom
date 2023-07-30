import React ,{useState} from 'react'
import {Button, Form, message, Input, Icon, Typography} from 'antd'
import Axios from 'axios'
const { Title } = Typography;

function PlaceOrderPage(){
    const [productList, setProductList] = useState([]);
    const [address, setAddress] = useState({
        houseNumber: '',
        street: '',
        city: '',
        state: '',
        pinCode: 0,
        Phone: 0,
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
        console.log(address);
      };

      return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Provide Your Address</Title>
            </div>
            <Form >
                <label>House Number</label>
                <Input type='text' name='houseNumber' value={address.houseNumber}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Street</label>
                <Input type='text' name='street' value={address.street}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>City</label>
                <Input type='text' name='city' value={address.city}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>State</label>
                <Input type='text' name='state' value={address.state}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Pin</label>
                <Input type='number' name='pinCode' value={address.pinCode}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <label>Phone</label>
                <Input type='number' name='Phone' value={address.Phone}
                       onChange={handleInputChange} required
                />
                <br />
                <br />
                <Button
                >
                    Order
                </Button>

            </Form>

        </div>
    )
}


export default PlaceOrderPage;